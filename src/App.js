import React from 'react';
import {Routes, Route}  from 'react-router-dom';
import BlogMain from './pages/main/BlogMain';
import Login from './pages/login/Login';
import Join from './pages/login/Join';
import PostingCardDetail from './pages/posting/PostingCardDetail';
import Header from './components/common/Header';

import './App.css';

function App() {
    
  return (
    <>
      <Header/>

      <Routes>
        <Route path="/" element={<BlogMain/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/join" element={<Join/>}/>
        <Route path="/blogs/:blogId/postings/:postingId" element={<PostingCardDetail/>}/>
      </Routes>
    </>
  );
}

export default App;