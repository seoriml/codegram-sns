import React, { useEffect, useState } from "react";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import FollowerList from "../../components/follower/FollowerList";
import useAPI from "../../hooks/useAPI";
import BackButton from "../../components/ui/button/BackButton";
import Loading from "../../components/ui/Loading";
import styles from "../../components/follower/Follower.module.scss";

const Followings = () => {
  const { accountname } = useParams();
  const { get, error, token, loading } = useAPI();
  const LIMIT = 10;

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

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY >=
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

  const followings = data?.pages.flatMap((page) => page.followings) || [];

  if (loading && !data) {
    return <Loading />;
  }

  return (
    <div>
      <header className={styles.followingsHeader}>
        <BackButton />
        <h1 className={styles.followerName}>팔로잉</h1>
      </header>
      {!loading && error ? (
        <p className={styles.followerText}>.</p>
      ) : (
        followings.length > 0 && <FollowerList followers={followings} />
      )}
      {isFetchingNextPage && <Loading />}
    </div>
  );
};
export default Followings;
