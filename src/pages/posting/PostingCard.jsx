import React, {useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';

import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { grey } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';


function formatingDate(date) {

    let tDay = new Date(date.createDt);

    let year = tDay.getFullYear();
    let month = tDay.getMonth()+1;
    let day = tDay.getDate();

    return year + '-' + month + '-' + day;
}

const AvatarChar = (nickname) => {
    return nickname.charAt(0).toUpperCase()
}

const PostingCard = (props) => {
    
    const navigate = useNavigate()
    const [createDt, setCreateDt] = useState(props.posting.createDt)
    const [avaterChar, setAvaterChar] = useState(AvatarChar(props.posting.homePostingUser.nickname))
    

    useEffect(() => {
        
        let formatedDt = formatingDate({createDt});
        setCreateDt(formatedDt);
        
    }, []);
        

    return (
    <Card sx={{ maxWidth: 345, margin: 2, display:'inline-block'}}  onClick={() => navigate('/PostingCardDetail')} >
        <CardHeader
        avatar={
            <Avatar sx={{ bgcolor: grey[400] }} aria-label="recipe">
                {avaterChar}
            </Avatar>
        }

      
        title = {`by ${props.posting.homePostingUser.nickname}`}
        subheader={createDt} 
        />
        <CardMedia
        component="img"
        height="194"
        image={props.posting.thumbnailImageURL}
        alt="Paella dish"
        />
        
        <CardContent sx={{maxHeight: 120}}>
            <Typography sx={{mb:1.5, overflow:'hidden', textOverFlow: 'ellipsis', display:'-webkit-box', WebkitLineClamp: '2', WebkitBoxOrient: 'vertical'}}>
                {props.posting.title}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{maxHeight: 80, overflow:'hidden', textOverFlow: 'ellipsis', display:'-webkit-box', WebkitLineClamp: '4', WebkitBoxOrient: 'vertical'}}>
                {props.posting.htmlContent.replace(/(<([^>]+)>)/ig,"")}
            </Typography>
        </CardContent>
        <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
            <FavoriteIcon />
            {props.posting.hitCnt}
        </IconButton>
        </CardActions>
    </Card>
    );
}

export default PostingCard;