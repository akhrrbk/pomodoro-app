import React from 'react'
import './info.css'

const info = () => {
  return (
    <div className='app__info'>
      <h1 className='app__info-h1'>
        An online Pomodoro Timer to boost your productivity
      </h1>
      <h2 className='app__info-h2'>What is Pomofocus?</h2>
      <div className='div' />
      <p className='app__info-p'>Pomofocus is a customizable pomodoro timer that works on desktop & mobile browser. The aim of this app is to help you focus on any task you are working on, such as study, writing, or coding. This app is inspired by <a href="#pomodoroTechnique">Pomodoro Technique</a> which is a time management method developed by Francesco Cirillo.</p>

      <h2 className='app__info-h2_2'>What is Pomodoro Technique?</h2>
      <div className='div' />
      <p className='app__info-p_2'>The Pomodoro Technique is created by Francesco Cirillo for a more productive way to work and study. The technique uses a timer to break down work into intervals, traditionally 25 minutes in length, separated by short breaks. Each interval is known as a pomodoro, from the Italian word for 'tomato', after the tomato-shaped kitchen timer that Cirillo used as a university student. - <a href="#wikipedia">Wikipedia</a></p>

      <h2 className='app__info-h2_2'>How to use the Pomodoro Timer?</h2>
      <div className='div' />
      <ol>
        <li><b>Add tasks</b> to work on today</li>
        <li><b>Set estimate pomodoros</b> (1 = 25min of work) for each tasks</li>
        <li><b>Select a task</b> to work on</li>
        <li><b>Start timer</b> and focus on the task for 25 minutes</li>
        <li><b>Take a break</b> for 5 minutes when the alarm ring</li>
        <li><b>Iterate</b> 3-5 until you finish the tasks</li>
      </ol>

      <h2 className='app__info-h2_2'>Features</h2>
      <div className='div' />
      <ul>
        <li><b>Responsive design</b> that works with desktop and mobile</li>
        <li><b>Color transition</b> to switch moods between work time and rest time</li>
        <li><b>Audio notification</b> at the end of a timer period</li>
        <li><b>Customizable timer</b> intervals to suit your preference</li>
      </ul>

      <h2 className='app__info-h2_2'>Download App</h2>
      <div className='div' /> 
      <ul>
        <li><b><a href="#mac">For MacOS</a></b> (zip file)</li>
        <li><b><a href="#windows">For Windows</a></b> (exe file)</li>
      </ul>
    </div>
  )
}

export default info