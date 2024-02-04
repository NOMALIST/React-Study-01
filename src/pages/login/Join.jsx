import React, { useState } from "react";
import JoinEmail from "./JoinEmail";
import JoinDetail from "./JoinDetail";
import JoinSuccess from "./JoinSuccess";




const Join = (props) => {

    const [step, setStep] = useState(1);
    const [userInfo, setUserInfo] = useState({});

    const changeToDetail = () => {
        setStep(2);
    }

    const changeToComplete = () => {
        setStep(3);
    }

    const handleData = (data) => {
        console.log('전송받은 data : ' + data);
        let newUserInfo = {...userInfo};
        if(step === 1) {
            newUserInfo.email = data.email;
            newUserInfo.password = data.password;
        } else if(step === 2) {
            newUserInfo.lastName = data.lastName;
            newUserInfo.firstName = data.firstName;
            newUserInfo.gender = data.gender;
            newUserInfo.birthDay = data.birthDay;
            newUserInfo.blogName = data.blogName;
            newUserInfo.nickname = data.nickname;
            newUserInfo.introduce = data.introduce;
        }

        setUserInfo(newUserInfo);
        console.log('userinfo : ' + userInfo.email);
    }

    return (
        <div className='join-container'>
            {step === 1 && <JoinEmail handleNextStep={changeToDetail} onData={handleData} ></JoinEmail>}
            {step === 2 && <JoinDetail handleNextStep={changeToComplete} onData={handleData} ></JoinDetail>}
            {step === 3 && <JoinSuccess></JoinSuccess>}
            
        </div>
    );
}

export default Join;