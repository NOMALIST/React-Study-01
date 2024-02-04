import React, {useState} from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';


const steps = [
  '이메일 인증',
  '상세정보 입력',
  '가입완료',
];

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
  
 
  const defaultTheme = createTheme();

export default function JoinDetail (props) {

    const [gender, setGender] = useState('');
    const [value, setValue] = React.useState(null);
    

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);

        console.log({
          lastName: data.get('lastName'),
          firstName: data.get('firstName'),
          blogName: data.get('blogName'),
          nickname: data.get('nickname'),
          introduce: data.get('introduce'),
          // 성별, 생일 추가해야함
        });
        
        props.onData(data);
        props.handleNextStep();
      };


      const selectGender = (event) => {
        event.preventDefault();
        // console.log(event.target.value);
        if(event.target.value == 'mail') {
            setGender('mail');
        } else if(event.target.value == 'femail') {
            setGender('femail');
        }
      }

      const regex = /^[ㄱ-ㅎ|가-힣|a-z|A-Z|]+$/;  // 한글, 영어만
      const textChecker = (event) => {
        event.preventDefault();

        let str = event.target.value;
        if(!regex.test(str.charAt(str.length-1))) {
          event.target.value = str.slice(0, -1);
        }

      }


    return (
        <>
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
              Sign up
            </Typography>

            <Box sx={{ width: '100%', mt: 5 }}>
                <Stepper activeStep={1} alternativeLabel>
                    {steps.map((label) => (
                    <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                    </Step>
                    ))}
                </Stepper>
            </Box>

            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
              <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="lastName"
                    label="성"
                    name="lastName"
                    variant="standard"
                    onChange={textChecker}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="firstName"
                    label="이름"
                    name="firstName"
                    variant="standard"
                    onChange={textChecker}
                  />
                </Grid>
                <Grid item xs={12} sm={2}>
                  <label>성별*</label>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <Button
                    id="genderBtnMale"
                    variant={gender === 'mail' ? "contained" : "outlined"}
                    fullWidth
                    value="mail"
                    onClick={selectGender}
                    >
                    남자
                  </Button>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <Button 
                    id="genderBtnFemale"
                    variant={gender === 'femail' ? "contained" : "outlined"}
                    fullWidth
                    value="femail"
                    onClick={selectGender}
                    >
                    여자
                  </Button>
                </Grid>

                <Grid item xs={12} sm={3}>
                  <label>생일*</label>
                </Grid>
                <Grid item xs={12} sm={9}>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer components={['DatePicker']}>
                      <DatePicker value={value} onChange={(newValue) => setValue(newValue)} />
                    </DemoContainer>
                  </LocalizationProvider>
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="blogName"
                    label="블로그 이름(4자 이상, 영문 소문자와 숫자만 조합가능합니다.)"
                    name="blogName"
                    autoComplete="blogName"
                    variant="standard"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="nickname"
                    label="닉네임"
                    id="nickname"
                    autoComplete="nickname"
                    variant="standard"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="introduce"
                    label="본인소개"
                    id="introduce"
                    autoComplete="introduce"
                    variant="standard"
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                가입 완료하기
              </Button>
              <Grid container justifyContent="flex-end">
                <Grid item>
                  <Link href="#" variant="body2">
                    Already have an account? Sign in
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
          <Copyright sx={{ mt: 5 }} />
        </Container>
      </ThemeProvider>

      </>
      );
}

