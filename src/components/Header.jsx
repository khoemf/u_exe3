import logoImg from '../assets/quiz-logo.png'
import React from 'react'

export default function Header() {    
  return (
    <>
        <header>
            <img src={logoImg} alt="Quiz logo"/>
            <h1>ReactQuiz</h1>
        </header>
    </>

  )
}
