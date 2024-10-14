import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useInfiniteQuery } from "@tanstack/react-query";
import useAPI from "../../hooks/useAPI";
import EmptyFeed from "./EmptyFeed";
import PostItem from "./PostItem";
import searchIcon from "../../assets/images/icon_search.svg";
import logoIcon from "../../assets/images/symbol_logo_codegram_title.svg";
import styles from "../feed/PostFeed.module.scss";
import { setCommentCount } from "../../redux/commentSlice";

const LIMIT = 10; // 한 번에 불러올 게시물 수

export default function Feed() {
  const { get, post, token } = useAPI();
  const dispatch = useDispatch();
  // 댓글 상태를 Redux에서 가져오기
  const commentCounts = useSelector((state) => state.comments);

  const [selectedPost, setSelectedPost] = useState(null);

  // 테스트용 팔로우함수
  // const follow = async () => {
  //   const testUserId = "String2";

  //   const response = await post(
  //     ${import.meta.env.VITE_API_URL}/profile/${testUserId}/follow,
  //     "application/json",
  //     token
  //   );

  //   if (response.meta?.rejectedWithValue) {
  //     console.error(Error following: ${response.payload});
  //   } else {
  //     console.log("팔로우 되었습니다.");
  //   }
  // };

  // 피드 데이터를 불러오는 함수
  const fetchFeed = async ({ pageParam = 0 }) => {
    const response = await get(
      `${
        import.meta.env.VITE_API_URL
      }/post/feed?limit=${LIMIT}&skip=${pageParam}`,
      "application/json",
      token
    );
    return {
      posts: response.payload.posts,
      nextSkip: pageParam + LIMIT, // 다음 페이지를 위한 skip 값 계산
    };
  };

  // useInfiniteQuery를 사용한 무한 스크롤
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useInfiniteQuery({
      queryKey: ["feed"], // 쿼리식별키
      queryFn: fetchFeed, // 데이터를 가져오는 함수
      getNextPageParam: (lastPage) => {
        // 다음페이지를 불러오기위한 조건 설정
        // 마지막 페이지의 posts 배열이 LIMIT보다 작으면 undefined, 아니면 nextSkip으로 다음페이지 불러옴.
        return lastPage.posts.length < LIMIT ? undefined : lastPage.nextSkip;
      },
    });

  //댓글 수 업데이트
  useEffect(() => {
    if (data) {
      data.pages.forEach((page) => {
        page.posts.forEach((post) => {
          if (commentCounts[post.id] !== post.comments.length) {
            dispatch(
              setCommentCount({ postId: post.id, count: post.comments.length })
            );
          }
        });
      });
    }
  }, [dispatch, data, commentCounts]);

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

  // data가 로드되지않았거나 api호출 실패했을때 조건부렌더링
  if (!data || !data.pages) {
    return <p>데이터를 불러오는 데 문제가 발생했습니다.</p>;
  }

  return (
    <div>
      <div className={styles.header}>
        <h1 className={styles.title}>
          <img src={logoIcon} alt="코드그램" />
        </h1>
        <Link to="/search">
          <img src={searchIcon} alt="검색버튼" />
        </Link>
      </div>

      {data.pages[0].posts.length === 0 ? (
        <EmptyFeed />
      ) : (
        <ul className={styles.postsWrapper}>
          {data.pages.map((page, pageIndex) => (
            <React.Fragment key={pageIndex}>
              {page.posts.map((post) => {
                return (
                  <li key={post.id}>
                    <PostItem
                      post={post}
                      selectedPost={selectedPost}
                      setSelectedPost={() => setSelectedPost(post.id)}
                      commentCount={commentCounts[post.id]}
                    />
                  </li>
                );
              })}
            </React.Fragment>
          ))}
          {isFetchingNextPage && <p>로딩중...</p>}
        </ul>
      )}
    </div>
  );
}
