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

  const followers = data?.pages.flatMap((page) => page.followers) || [];

  if (loading && !data) {
    return <Loading />;
  }

  return (
    <div>
      <header className={styles.followersHeader}>
        <BackButton />
        <h1 className={styles.followerName}>팔로워</h1>
      </header>
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
