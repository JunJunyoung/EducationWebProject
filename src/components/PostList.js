import React from 'react';
import styled from 'styled-components';
import Responsive from './Responsive';
import palette from '../styles/palette';
import { useNavigate } from 'react-router-dom';

const PostListBlock = styled(Responsive)`
  margin-top: 3rem;
`;

const PostItemBlock = styled.div`
  padding-top: 3rem;
  padding-bottom: 3rem;
  &:first-child {
    padding-top: 0;
  }
  & + & {
    border-top: 1px solid ${palette.gray[2]};
  }

  h2 {
    font-size: 2rem;
    margin-bottom: 0;
    margin-top: 0;
    &:hover {
      color: ${palette.gray[6]};
    }
  }
  p {
    margin-top: 2rem;
  }
`;

const PostItem = ({ posts }) => {
  const navigate = useNavigate();
  return (
    <>
      {posts.map((item) => {
        const { idx, title, content } = item;
        return (
          <PostItemBlock key={idx}>
            <h2
              onClick={() => {
                navigate('/wiki', {
                  state: {
                    idx,
                    title,
                    content,
                    posts,
                  },
                });
              }}
            >
              {title}
            </h2>
          </PostItemBlock>
        );
      })}
    </>
  );
};

const PostList = ({ posts }) => {
  return (
    <PostListBlock>
      <div>
        <PostItem posts={posts} />
      </div>
    </PostListBlock>
  );
};

export default PostList;
