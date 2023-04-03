import React, { useState, useMemo } from 'react';
import Header from '../components/Header';
import PostList from '../components/PostList';
import Paging from '../components/Paging';
import { useSelector } from 'react-redux';

const MAX_POST_COUNT_PER_PAGE = 5;
const MaingPage = () => {
  const rawPosts = useSelector((state) => state);
  const posts = rawPosts.post.post;
  const [page, setPage] = useState(1);
  const currentPosts = useMemo(() => {
    const a = posts.slice(
      posts.length - MAX_POST_COUNT_PER_PAGE * page < 0
        ? 0
        : posts.length - MAX_POST_COUNT_PER_PAGE * page,
      posts.length - MAX_POST_COUNT_PER_PAGE * (page - 1),
    );
    return a;
  }, [posts, page]);
  const handlePageChange = (page) => {
    setPage(page);
  };

  return (
    <>
      <Header />
      <PostList posts={currentPosts.reverse()} />
      <Paging
        page={page}
        totalCount={posts.length}
        postPerPage={MAX_POST_COUNT_PER_PAGE}
        handlePageChange={handlePageChange}
      />
    </>
  );
};

export default MaingPage;
