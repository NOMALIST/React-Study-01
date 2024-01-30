
import {useState, useEffect} from 'react';
import PostingCard from '../posting/PostingCard';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import axios from 'axios';


const BlogMain = (props) => {

    const [apidata, setApidata] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    function addCardInfo() {

        setIsLoading(true);

        axios.get('http://localhost:4000/homePostings')    
        .then((response)=>{
                let newData = [...apidata, ...response.data];
                setApidata(newData);
            })
        .catch((Error)=>{console.log(Error)})
        
        setIsLoading(false);
    }

    const handleScroll = () => {
        //스크롤을 감지하여 포스팅 추가 요청
        let scrollLocation = document.documentElement.scrollTop; // 현재 스크롤바 위치
        let windowHeight = window.innerHeight; // 화면 크기
        let fullHeight = document.body.scrollHeight; // 전체 스크롤

        if(scrollLocation + windowHeight + 2 >= fullHeight) {
            console.log('카드 추가');
            addCardInfo();
        }
        console.log('scrollLocation : ' + scrollLocation);
        console.log('windowHeight : ' + windowHeight);
        console.log('fullHeight :  ' + fullHeight);

     };

    useEffect(() => {
        axios.get('http://localhost:4000/homePostings')    
        .then((response)=>{
                setApidata(response.data);
            })
        .catch((Error)=>{console.log(Error)});

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [])
       
    const SkeletonCard = () => {
        return (
            <Stack spacing={3}>
              {/* For variant="text", adjust the height via font-size */}
              <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
              {/* For other variants, adjust the size with `width` and `height` */}
              <Skeleton variant="circular" width={40} height={40} />
              <Skeleton variant="rectangular" width={210} height={60} />
              <Skeleton variant="rounded" width={210} height={60} />
            </Stack>
          );
    }

    return (
        <div className='posting-container'>
            <div className='postcard-wrapper inner-container'>
                {!!apidata && apidata.map((posting, index) => {return <PostingCard key={index} posting={posting}/>; })}
                {isLoading && <SkeletonCard/>}
            </div>
        </div>
    )


    
}

export default BlogMain;