import { useEffect, useState } from 'react';
import axios from 'axios';
import '@toast-ui/editor/dist/toastui-editor.css'
import { Viewer } from '@toast-ui/react-editor';


const PostingCardDetail = (props) => {

    let blogId = window.location.pathname.split('/')[2];
    let postingId = window.location.pathname.split('/')[4];
    
    const [post, setPost] = useState('');

    useEffect(() => {
        axios.get('http://localhost:4000/postingDetail?id='+ postingId)    
        .then((response)=>{
                // console.log(response.data);
                setPost(response.data[0]);
            })
        .catch((Error)=>{console.log(Error)})
    }, [])

    console.log(post);

    return (
        <>
            {!!post.htmlContent && <Viewer initialValue={post.htmlContent}/>}
            {/* <Viewer initialValue={post.htmlContent}/> */}
        </>
    )
}

export default PostingCardDetail;