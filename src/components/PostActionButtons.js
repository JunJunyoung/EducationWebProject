import React from 'react';
import styled from 'styled-components';
import palette from '../styles/palette';
import { useNavigate } from 'react-router-dom';

const PostActionButtonsBlock = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 2rem;
  margin-top: -1.5rem;
`;

const ActionButton = styled.button`
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  color: ${palette.gray[6]};
  font-weight: bold;
  border: none;
  outline: none;
  font-size: 0.875rem;
  cursor: pointer;
  &:hover {
    background: ${palette.gray[1]};
    color: ${palette.cyan[7]};
  }
  & + & {
    margin-left: 0.25rem;
  }
`;

const PostActionButtons = ({ idx, title, content }) => {
  const navigate = useNavigate();
  return (
    <PostActionButtonsBlock>
      <ActionButton
        onClick={() => {
          navigate('/write', {
            state: {
              idx,
              oldTitle: title,
              oldContent: content,
            },
          });
        }}
      >
        수정
      </ActionButton>
    </PostActionButtonsBlock>
  );
};

export default PostActionButtons;
