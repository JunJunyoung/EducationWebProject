import React, { useState } from 'react';
import Editor from '../components/Editor';
import Responsive from '../components/Responsive';
import WriteActionButtons from '../components/WriteActionButtons';
import { useLocation } from 'react-router-dom';

const WritePage = () => {
  const location = useLocation();
  const [title, setTitle] = useState(
    location.state?.oldTitle ? location.state?.oldTitle : '',
  );
  const [content, setContent] = useState(
    location.state?.oldContent ? location.state?.oldContent : '',
  );

  return (
    <Responsive>
      <Editor
        title={title}
        setTitle={setTitle}
        content={content}
        setContent={setContent}
      />
      <WriteActionButtons
        idx={location.state?.idx ? location.state?.idx : null}
        title={title}
        content={content}
      />
    </Responsive>
  );
};

export default WritePage;
