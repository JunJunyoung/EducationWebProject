import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MaingPage from './pages/MainPage';
import WikiPage from './pages/WikiPage';
import WritePage from './pages/WritePage';

function App() {
  return (
    <>
      <Routes>
        <Route element={<MaingPage />} path="/" />
        <Route element={<WikiPage />} path="/wiki" />
        <Route element={<WritePage />} path="/write" />
      </Routes>
    </>
  );
}

export default App;
