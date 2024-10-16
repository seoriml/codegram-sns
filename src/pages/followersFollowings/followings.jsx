import React, { useEffect } from "react";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import FollowerList from "../../components/follower/FollowerList";
import useAPI from "../../hooks/useAPI";
import BackButton from "../../components/ui/button/BackButton";

const Followings = () => {
  const { accountname } = useParams();
  const { get, error, token } = useAPI();
  const LIMIT = 10;

  // 팔로잉 리스트 데이터를 가져오는 함수
  const fetchFollowings = async ({ pageParam = 0 }) => {
    const response = await get(
      `${
        import.meta.env.VITE_API_URL
      }/profile/${accountname}/following?limit=${LIMIT}&skip=${pageParam}`,
      "application/json",
      token
    );
    return {
      followings: response.payload,
      nextSkip: pageParam + LIMIT,
    };
  };

  // useInfiniteQuery로 무한 스크롤 구현
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useInfiniteQuery({
      queryKey: ["followings", accountname],
      queryFn: fetchFollowings,
      getNextPageParam: (lastPage) => {
        return lastPage.followings.length < LIMIT
          ? undefined
          : lastPage.nextSkip;
      },
      enabled: !!accountname,
    });

  // 스크롤 이벤트로 무한 스크롤 감지
  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY >=
          document.documentElement.scrollHeight &&
        hasNextPage &&
        !isFetchingNextPage
      ) {
        fetchNextPage(); // 페이지 끝에 도달하면 다음 페이지 요청
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [hasNextPage, isFetchingNextPage, fetchNextPage]);

  // 모든 페이지의 following 데이터를 하나로 병합
  const followings = data?.pages.flatMap((page) => page.followings) || [];

  // data가 로드되지 않았거나 API 호출 실패 시 에러 메시지 표시
  if (!data || !data.pages) {
    return <p>데이터를 불러오는 데 문제가 발생했습니다.</p>;
  }

  return (
    <div>
      <div>
        <BackButton />
        <h1>팔로잉</h1>
      </div>

      {error ? (
        <p>해당 계정이 존재하지 않습니다.</p>
      ) : followings.length === 0 ? (
        <p>팔로우한 사용자가 없습니다.</p>
      ) : (
        <FollowerList followers={followings} />
      )}
      {isFetchingNextPage && <p>로딩 중...</p>}
    </div>
  );
};
export default Followings;
