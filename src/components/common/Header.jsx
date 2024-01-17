import {Button} from '@mui/material';
import {useState} from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const Header = () => {

    const navigate = useNavigate();
    const location= useLocation();

    const [loginYN, setLoginYN] = useState(
        location.state?.loginYN
    );

    console.log(loginYN);


    return (
         <div style={{display:'flex', justifyContent:'space-between'}}>
           <div  style={{fontWeight: 'bold', fontSize:'25px'}} onClick={() => {navigate('/')}}>
                logo
            </div>

			<div>
				<Button onClick={() => navigate('/login')}> { !!loginYN ? '새글' : '로그인'}  </Button>
			</div>
         </div>
    );
}

export default Header;