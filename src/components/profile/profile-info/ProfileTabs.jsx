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
import Loading from "../../ui/Loading";

const ProfileTabs = ({ accountname }) => {
  const [isListView, setIsListView] = useState(true);
  const { get, token } = useAPI();
  const LIMIT = 10;

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
    };
  };

  // useInfiniteQuery를 사용한 무한 스크롤 구현
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, error } =
    useInfiniteQuery({
      queryKey: ["userPosts", accountname],
      queryFn: fetchPosts,
      getNextPageParam: (lastPage) => {
        return lastPage.posts.length < LIMIT ? undefined : lastPage.nextSkip;
      },
      enabled: !!accountname,
    });

  // 스크롤 이벤트로 무한 스크롤 감지
  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY - 100 >=
          document.documentElement.scrollHeight &&
        hasNextPage &&
        !isFetchingNextPage
      ) {
        fetchNextPage();
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [hasNextPage, isFetchingNextPage, fetchNextPage]);

  // 모든 페이지의 post 데이터를 하나로 병합
  const posts = data?.pages.flatMap((page) => page.posts) || [];

  if (!data || !data.pages) {
    return (
      <>
        <Loading />
      </>
    );
  }

  // 리스트 뷰와 그리드 뷰 간 전환
  const tabView = (view) => {
    setIsListView(view);
  };

  return (
    <ul>
      <li className={styles.profileTabs}>
        <img
          src={isListView ? iconListOn : iconListOff}
          alt="리스트 뷰 아이콘"
          onClick={() => tabView(true)}
        />
        <img
          src={isListView ? iconAlbumOff : iconAlbumOn}
          alt="앨범 뷰 아이콘"
          onClick={() => tabView(false)}
        />
      </li>

      {/* 게시물 렌더링 */}
      {isListView ? <PostList posts={posts} /> : <PostGrid posts={posts} />}

      {/* 로딩 중 메시지 */}
      {isFetchingNextPage && (
        <>
          <Loading />
        </>
      )}
    </ul>
  );
};

export default ProfileTabs;
