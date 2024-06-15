import React from 'react'
import {useState} from 'react'

import QUESTIONS from '../questions.js';

export default function Quiz() {


    const [userAnswers,setUserAnswers] = useState([]);
    const activeQuestionIndex = userAnswers.length;

    function handleSelectAnswer(selectedAnswer){
        console.log(`selectedAnswer ${selectedAnswer}`);
        setUserAnswers((prevUserAnswers)=>{
            return [...prevUserAnswers,selectedAnswer];
        });
    }
    console.log("activeQuestionIndex " + activeQuestionIndex);
  return (
    <>
    <div id="quiz">
    <div id="question">
        <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
        <ul id="answers">
            {QUESTIONS[activeQuestionIndex].answers.map((answer)=>(
                <li key={answer} className="answer">
                    <button onClick={()=>handleSelectAnswer(answer)}>{answer}</button>
                </li>
            ))}
        </ul>
    </div>
    </div>
    </>
  )
}
