import React, { useState } from 'react';

const Watch = () => {
    const [step,setStep]=useState(0);
    const increaseStep=()=>{
        const newStep= step+1;
        setStep(newStep)
    }
    const discrieasStep=()=>{
        const backStep= step-1;
        setStep(backStep)
    }
    return (
        <div>
            <h1>I have new Smart Watch</h1>
            <p>Step Count:{step}</p>
            <button onClick={increaseStep}>Dhor.........</button>
            <button onClick={discrieasStep}>Back.........</button>
            
        </div>
    );
};

export default Watch;