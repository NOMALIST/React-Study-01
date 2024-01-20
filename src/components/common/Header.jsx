import {Button} from '@mui/material';
import {useEffect, useState, Fragment} from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import { lightGreen } from '@mui/material/colors';

import Typography from '@mui/material/Typography';

import Toolbar from '@mui/material/Toolbar';







const Header = () => {

    const navigate = useNavigate();
    const location = useLocation();

    const [loginYN, setLoginYN] = useState(false);  
    const [title, setTitle] = useState('Blog Main');

    useEffect(() => {
        let temp = location.state?.loginYN;
        setLoginYN(temp);
    }, [])

    
    console.log(loginYN);

    return (
        //  <div style={{display:'flex', justifyContent:'space-between'}}>
        //    <div  style={{fontWeight: 'bold', fontSize:'25px'}} onClick={() => {navigate('/')}}>
        //         logo
        //     </div>

		// 	<div>
		// // 		<Button onClick={() => navigate('/login')}> { !!loginYN ? '새글' : '로그인'}  </Button>
		// // 	</div>
        //  </div>

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

                <Button variant="contained" size="small" color="success" sx={{mr:1}}
                        onClick={() => navigate('/login')}>
                    Sign in
                </Button>
                <Button variant="contained" size="small" color="success"
                        onClick={() => navigate('/Join')}>
                    Sign up
                </Button>
            </Toolbar>
        </Fragment>


    )
}

export default Header;