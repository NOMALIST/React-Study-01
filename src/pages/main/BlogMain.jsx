
import {useState, useEffect} from 'react';
import PostingCard from '../posting/PostingCard';
import data from '../../data';
import axios from 'axios';



const BlogMain = (props) => {

    const [apidata, setApidata] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:4000/homePostings')    
        .then((response)=>{
                setApidata(response.data)
            })
        .catch((Error)=>{console.log(Error)})
    }, [])
    
    

    return (
        apidata.map((posting) => { 
            return <PostingCard key={posting.postingId} posting={posting}/>;
        }) 
    )
}

export default BlogMain;