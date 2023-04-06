import React from 'react';
import styled from 'styled-components';
import palette from '../styles/palette';
import Responsive from '../components/Responsive';
import { useLocation } from 'react-router-dom';
import PostActionButtons from '../components/PostActionButtons';
import { useNavigate, Link } from 'react-router-dom';

const WikiPageBlock = styled(Responsive)`
  margin-top: 4rem;
`;
const PostHead = styled.div`
  border-bottom: 1px solid ${palette.gray[2]};
  padding-bottom: 3rem;
  margin-bottom: 3rem;
  h1 {
    font-size: 3rem;
    line-height: 1.5;
    margin: 0;
  }
`;

const PostContent = styled.div`
  font-size: 1.3125rem;
  color: ${palette.gray[8]};
  padding-bottom: 10rem;
  margin-bottom: 2rem;
  border-bottom: 1px solid ${palette.gray[2]};
`;

const PostTitleContent = styled(Link)`
  font-size: 1.3125rem;
  font-weight: 650;
  color: ${palette.gray[8]};
  padding-bottom: 10rem;
  margin-bottom: 2rem;
  border-bottom: 1px solid ${palette.gray[2]};
`;

const AnotherPostBlock = styled.div`
  display: flex;
  justify-content: flex-first;
  margin-top: -1.5rem;
  border-bottom: 1px solid ${palette.gray[2]};
`;

const PostItemBlock = styled.div`
  padding-top: 1.6rem;
  padding-bottom: 1.6rem;
  &:first-child {
    padding-top: 0;
  }
  & + & {
    border-top: 1px solid ${palette.gray[2]};
  }
  h3 {
    font-size: 1rem;
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

const WikiPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { idx, title, content, posts } = location.state;
  const newPosts = posts.filter((item) => item.idx !== idx);
  const allTitleArr = posts.map((item) => item.title);
  const duplicateWordsArr = allTitleArr?.filter((item) => content.match(item));
  const duplicateWordsDetailArr = posts.filter((item) => {
    const condition = duplicateWordsArr.filter((e) => e === item.title);
    return condition.toString() === item.title;
  });
  let convertedContent = content;
  const addTagDuplicateWords = duplicateWordsArr.forEach((item) => {
    convertedContent = convertedContent.replace(item, `<tag>${item}<tag>`);
  });
  const splitTagDuplicateWordsArr = convertedContent.split(`<tag>`);
  return (
    <WikiPageBlock>
      <PostHead>
        <h1>{title}</h1>
      </PostHead>
      <PostActionButtons idx={idx} title={title} content={content} />
      <PostContent>
        {splitTagDuplicateWordsArr.map((item, index) => {
          const v = duplicateWordsDetailArr.filter((e) => e.title === item);
          if (v.length > 0) {
            return (
              <PostTitleContent
                key={index}
                to="/wiki"
                state={{
                  ...v[0],
                  posts,
                }}
              >
                {item}
              </PostTitleContent>
            );
          } else {
            return item;
          }
        })}
      </PostContent>
      <AnotherPostBlock>
        <h2>페이지 내 다른 게시물 보기</h2>
      </AnotherPostBlock>
      {newPosts.map((item) => {
        const { idx, title, content } = item;
        return (
          <PostItemBlock key={idx}>
            <h3
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
            </h3>
          </PostItemBlock>
        );
      })}
    </WikiPageBlock>
  );
};

export default WikiPage;
