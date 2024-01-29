import React, {useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';

import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';





function Copyright(props) {
    return (
      <Typography variant="body2" color="text.secondary" align="center" {...props}>
        {'Copyright © '}
        <Link color="inherit" href="https://mui.com/">
          Your Website
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }

function emailRegCheck (string) {
    const reg =
        /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
    return reg.test(string); //boolean
}
      
const defaultTheme = createTheme();

function Login() {

const [waringMessage, setwaringMessage] = useState('');
const navigate = useNavigate();
const [open, setOpen] = React.useState(false);

const handleClick = () => {
  setOpen(true);
};

const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
};

const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
    email: data.get('email'),
    password: data.get('password'),
    });

    if(emailRegCheck(data.get('email'))) {    // 이메일 형식이 맞을 때
    if(data.get('email') === 'jane20180@naver.com' && data.get('password') === 'aaaa') {    // 인증 통과
        console.log('로그인 인증 성공');
        navigate('/', {state: {loginYN: true}});
        window.location.reload();
    } else {    // 입력한 정보가 일치하지 않을 때
        setwaringMessage("입력하신 정보가 일치하지 않습니다.");
        console.log('입력하신 정보가 일치하지 않습니다.')
        handleClick();
    }

    } else {  // 이메일 형식이 아닐 때
    setwaringMessage("이메일 형식이 아닙니다.");
    console.log('이메일 형식이 아닙니다.');
    handleClick();
    }
};

return (
    <ThemeProvider theme={defaultTheme}>
    <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
        sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        }}
        >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
            Sign in
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            />
            <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
            />
            <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
            
            >
            Sign In
            </Button>
            <Grid container>
            <Grid item xs>
                <Link href="#" variant="body2">
                Forgot password?
                </Link>
            </Grid>
            <Grid item>
                <Link href="#" variant="body2">
                {"Don't have an account? Sign Up"}
                </Link>
            </Grid>
            </Grid>
        </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
    </Container>
    <Snackbar open={open} autoHideDuration={6000} onClose={handleClose} anchorOrigin={{ vertical:'top', horizontal:'center' }}>
        <Alert
            severity="error"
            variant="filled"
        >
            {waringMessage}
        </Alert>        
    </Snackbar>
  </ThemeProvider>
);
}





export default Login;