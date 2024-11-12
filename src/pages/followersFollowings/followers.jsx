import React, { useEffect, useState } from "react";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import FollowerList from "../../components/follower/FollowerList";
import useAPI from "../../hooks/useAPI";
import BackButton from "../../components/ui/button/BackButton";
import Loading from "../../components/ui/Loading";
import styles from "../../components/follower/Follower.module.scss";

const Followers = () => {
  const { accountname } = useParams();
  const { get, token, error, loading } = useAPI();
  const LIMIT = 10;

  // 팔로워 리스트 데이터를 가져오는 함수
  const fetchFollowers = async ({ pageParam = 0 }) => {
    const response = await get(
      `${
        import.meta.env.VITE_API_URL
      }/profile/${accountname}/follower?limit=${LIMIT}&skip=${pageParam}`,
      "application/json",
      token
    );
    return {
      followers: response.payload,
      nextSkip: pageParam + LIMIT,
    };
  };

  // useInfiniteQuery로 무한 스크롤 구현
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useInfiniteQuery({
      queryKey: ["followers", accountname],
      queryFn: fetchFollowers,
      getNextPageParam: (lastPage) => {
        return lastPage.followers.length < LIMIT
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

  // 모든 페이지의 follower 데이터를 하나로 병합
  const followers = data?.pages.flatMap((page) => page.followers) || [];

  // 로딩 중일 때 Loading 컴포넌트 표시
  if (loading && !data) {
    return <Loading />;
  }

  return (
    <div>
      <div className={styles.followersHeader}>
        <BackButton />
        <h1 className={styles.followerName}>팔로워</h1>
      </div>
      {!loading && error ? (
        <p className={styles.followerText}>해당 계정이 존재하지 않습니다.</p>
      ) : (
        followers.length > 0 && <FollowerList followers={followers} />
      )}
      {isFetchingNextPage && <Loading />}
    </div>
  );
};

export default Followers;
