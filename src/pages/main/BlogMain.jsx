
import {useState, useEffect} from 'react';
import PostingCard from '../posting/PostingCard';
import axios from 'axios';


const BlogMain = (props) => {

    const [apidata, setApidata] = useState([]);

    function addCardInfo() {
        axios.get('http://localhost:4000/homePostings')    
        .then((response)=>{
                let newData = [...apidata, ...response.data];
                setApidata(newData);
            })
        .catch((Error)=>{console.log(Error)})
    }

    const handleScroll = () => {
        //스크롤을 감지하여 포스팅 추가 요청
        let scrollLocation = document.documentElement.scrollTop; // 현재 스크롤바 위치
        let windowHeight = window.innerHeight; // 화면 크기
        let fullHeight = document.body.scrollHeight; // 전체 스크롤

        if(scrollLocation + windowHeight + 1 >= fullHeight) {
            console.log('카드 추가');
            addCardInfo();
        }
        // console.log('scrollLocation : ' + scrollLocation);
        // console.log('windowHeight : ' + windowHeight);
        // console.log('fullHeight :  ' + fullHeight);

     };

    useEffect(() => {
        axios.get('http://localhost:4000/homePostings')    
        .then((response)=>{
                setApidata(response.data);
            })
        .catch((Error)=>{console.log(Error)})
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [])
       
  
    return (
        apidata.map((posting) => { 
            return !!posting && <PostingCard key={posting.postingId} posting={posting}/>;
        })
    )

    
}

export default BlogMain;