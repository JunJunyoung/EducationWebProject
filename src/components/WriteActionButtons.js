import React from 'react';
import styled from 'styled-components';
import Button from './Button';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { write } from '../redux/slice/Posts';

const WriteActionButtonsBlock = styled.div`
  margin-top: 1rem;
  margin-bottom: 3rem;
  button + button {
    margin-left: 0.5rem;
  }
`;

const StyledButton = styled(Button)`
  height: 2.125rem;
  & + & {
    margin-left: 0.5rem;
  }
`;

const WriteActionButtons = ({ idx, title, content }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const onPublish = () => {
    const strContent = content.replace(
      /<(\/)?([a-zA-Z]*)(\s[a-zA-Z]*=[^>]*)?(\s)*(\/)?>/g,
      '',
    );
    if (idx === null) {
      dispatch(write({ title, strContent }));
      navigate('/');
    } else {
      dispatch(write({ idx, title, strContent }));
      navigate('/');
    }
  };
  const onCancel = () => {
    navigate(-1);
  };

  return (
    <WriteActionButtonsBlock>
      <StyledButton cyan onClick={onPublish}>
        포스트 {idx ? '수정' : '등록'}
      </StyledButton>
      <StyledButton onClick={onCancel}>취소</StyledButton>
    </WriteActionButtonsBlock>
  );
};

export default WriteActionButtons;
