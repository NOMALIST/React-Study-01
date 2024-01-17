
import Rect from 'react';
import PostingCard from '../posting/PostingCard';
import data from '../../data';

const BlogMain = (props) => {
    return (
        data.map((posting) => { 
            return <PostingCard key={posting.postingId} posting={posting}/>;
        }) 
    )
}

export default BlogMain;