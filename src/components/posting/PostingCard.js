import React, {useState} from 'react';

import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import { grey } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

function formatingDate(date) {

    let tDay = new Date(date.createDt);

    let year = tDay.getFullYear();
    let month = tDay.getMonth()+1;
    let day = tDay.getDate();

    return year + '-' + month + '-' + day;
}

const PostingCard = (props) => {

    const [expanded, setExpanded] = React.useState(false);
    const [blogID, setBlogID] = useState(props.posting.blogId);
    const [postingID, setPostingID] = useState(props.posting.postingID);
    const [userID, setUserID] = useState(props.posting.homePostingUser.userID);
    const [nickname, setNickname] = useState(props.posting.homePostingUser.nickname);
    const [profileImageURL, setProfileImageURL] = useState(props.posting.homePostingUser.profileImageURL);
    const [title, setTitle] = useState(props.posting.title);
    const [htmlContent, setHtmlContent] = useState(props.posting.htmlContent);
    const [thumbnailImageURL, setThumbnailImageURL] = useState(props.posting.thumbnailImageURL);
    const [starCnt, setStarCnt] = useState(props.posting.starCnt);
    const [hitCnt, setHitCnt] = useState(props.posting.hitCnt);
    const [createDt, setCreateDt] = useState(props.posting.createDt);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    let formatedDt = formatingDate({createDt});

    // setCreateDt로 하면 오류가 나는데 왜나는지 모르겟다;;;;
    // setCreateDt(formatedDt);

    return (
    <Card sx={{ maxWidth: 345, margin: 2, border: 1} }>
        <CardHeader
        avatar={
            <Avatar sx={{ bgcolor: grey[400] }} aria-label="recipe">
            a
            </Avatar>
        }

        // 이거 닉네임 왜 안먹지
        // {nickname}

        // action={
        //     <IconButton aria-label="settings">
        //     <MoreVertIcon />
        //     </IconButton>
        // }
           
        subheader={formatedDt} 
        />
        <CardMedia
        component="img"
        height="194"
        image={thumbnailImageURL}
        alt="Paella dish"
        />
        <CardContent sx={{maxHeight: 100}}>
            {title }
            <Typography variant="body2" color="text.secondary">
                {htmlContent}
            </Typography>
        </CardContent>
        <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
            <FavoriteIcon />
            {hitCnt}
        </IconButton>
        {/* <IconButton aria-label="share">
            <ShareIcon />
        </IconButton> */}
        <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
        >
            {/* <ExpandMoreIcon /> */}
        </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
        {/* <CardContent>
            {htmlContent}
        </CardContent> */}
        </Collapse>
    </Card>
    );
}

export default PostingCard;