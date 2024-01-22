import {Button} from '@mui/material';
import {useEffect, useState, Fragment} from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { lightGreen } from '@mui/material/colors';
import Typography from '@mui/material/Typography';
import Toolbar from '@mui/material/Toolbar';


const Header = () => {

    const navigate = useNavigate();
    const location = useLocation();

    const [isSignin, setIsSignin] = useState(location.state?.loginYN);
    const [title, setTitle] = useState('Blog Main');

    console.log(isSignin);

    return (

        <Fragment>
            <Toolbar sx={{ borderBottom: 1, borderColor: 'divider',  bgcolor: lightGreen[100] }}>
                <Button size="medium" onClick={() => {navigate('/')}}>Home</Button>
                <Typography
                    component="h2"
                    variant="h5"
                    color="inherit"
                    align="center"
                    noWrap
                    sx={{ flex: 1 }}
                >
                    {title}
                </Typography>

                <Button variant="contained" size="small" color="success" 
                        sx={{mr:1, display: !!isSignin ? 'none' : 'inline-flex'}}
                        onClick={() => navigate('/login')}>
                    Sign in
                </Button>
                <Button variant="contained" size="small" color="success"
                        sx={{display: !!isSignin ? 'none' : 'inline-flex'}}
                        onClick={() => navigate('/join')}>
                    Sign up
                </Button>
                <Button variant="contained" size="small" color="success"
                        sx={{display: !!isSignin ? 'inline-flex' : 'none'}}
                        onClick={() => {
                            setIsSignin(false);
                        }}>
                    Logout
                </Button>
            </Toolbar>
        </Fragment>


    )
}

export default Header;