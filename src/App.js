import React from 'react';
import PostingCard from './components/posting/PostingCard';
import './App.css';
import {data} from './data'

function App() {
 
  // const post = {postid:1 , postcontent:'abcd'};
 
  return (
    <>
      {data.map((posting) => { 
        return <PostingCard key={posting.postingId} posting={posting}/>;
      })}
    </>
  );
}

export default App;