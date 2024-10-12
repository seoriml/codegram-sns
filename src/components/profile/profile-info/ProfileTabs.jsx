import React, { useState, useEffect } from "react";
import { useInfiniteQuery } from "@tanstack/react-query";
import PostList from "./PostList";
import PostGrid from "./PostGrid";
import useAPI from "../../../hooks/useAPI";
import iconListOn from "../../../assets/images/icon_post_list_on.svg";
import iconListOff from "../../../assets/images/icon_post_list_off.svg";
import iconAlbumOn from "../../../assets/images/icon_post_album_on.svg";
import iconAlbumOff from "../../../assets/images/icon_post_album_off.svg";
import styles from "./ProfileInfo.module.scss";

const ProfileTabs = ({ accountname }) => {
  const [isListView, setIsListView] = useState(true);
  const { get, token } = useAPI();
  const LIMIT = 10;

  // 데이터 가져오기 함수
  const fetchPosts = async ({ pageParam = 0 }) => {
    const response = await get(
      `${
        import.meta.env.VITE_API_URL
      }/post/${accountname}/userpost?limit=${LIMIT}&skip=${pageParam}`,
      "application/json",
      token
    );
    return {
      posts: response.payload.post,
      nextSkip: pageParam + LIMIT,
    }; // posts와 nextSkip 반환
  };

  // useInfiniteQuery를 사용한 무한 스크롤 구현
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, error } =
    useInfiniteQuery({
      queryKey: ["userPosts", accountname],
      queryFn: fetchPosts,
      getNextPageParam: (lastPage) => {
        // console.log("Last page:", lastPage); // 현재 페이지 정보 확인
        return lastPage.posts.length < LIMIT ? undefined : lastPage.nextSkip;
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

  // 모든 페이지의 post 데이터를 하나로 병합
  const posts = data?.pages.flatMap((page) => page.posts) || [];

  // data가 로드되지 않았거나 API 호출 실패 시 에러 메시지 표시
  if (!data || !data.pages) {
    return <p>데이터를 불러오는 데 문제가 발생했습니다.</p>;
  }

  // 리스트 뷰와 그리드 뷰 간 전환
  const tabView = (view) => {
    setIsListView(view);
  };

  return (
    <div>
      <div className={styles.profileTabs}>
        <img
          src={isListView ? iconListOn : iconListOff}
          alt="리스트 뷰 아이콘"
          onClick={() => tabView(true)}
          className={styles.tabIcon}
        />
        <img
          src={isListView ? iconAlbumOff : iconAlbumOn}
          alt="앨범 뷰 아이콘"
          onClick={() => tabView(false)}
          className={styles.tabIcon}
        />
      </div>

      {/* 게시물 렌더링 */}
      {isListView ? <PostList posts={posts} /> : <PostGrid posts={posts} />}

      {/* 로딩 중 메시지 */}
      {isFetchingNextPage && <p>로딩중...</p>}
    </div>
  );
};

export default ProfileTabs;
