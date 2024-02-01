import React, { useState } from "react";
import JoinEmail from "./JoinEmail";
import JoinDetail from "./JoinDetail";




const Join = (props) => {

    const [step, setStep] = useState(2);

    const changeToDetail = () => {
        setStep(2);
    }

    const changeToComplete = () => {
        setStep(3);
    }

    return (
        <div className='join-container'>
            {step === 1 && <JoinEmail handleJoinStep={changeToDetail} ></JoinEmail>}
            {step === 2 && <JoinDetail handleJoinStep={changeToComplete}></JoinDetail>}
            {step === 3 && <JoinEmail></JoinEmail>}
            
        </div>
    );
}

export default Join;