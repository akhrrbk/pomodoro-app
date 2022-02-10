import React from 'react'
import './Target.css'
import {logo} from '../../assets/imports'
import { FiSettings, FiActivity, FiLogIn, FiGrid, FiPlusCircle } from "react-icons/fi";

const Target = () => {
  return (
    <div className='target__main'>
        <div className='target__main-navbar'>
            <div className='target__main-navbar_left'>
                <img className='logo' src={logo} alt="" />
                <h3>Pomodoro</h3    >
            </div>
            <div className='target__main-navbar_right'>
                <button><FiActivity className='button__icon' /> Report</button>
                <button><FiSettings className='button__icon' /> Settings</button>
                <button><FiLogIn className='button__icon' /> Login</button>
            </div>

        </div>

        <div className='target__main-container'>
            <div className='target__main-container_pomodoro'>
                <div>Pomodoro</div>
                <div>Short Break</div>
                <div>Long Break</div>
            </div>

            <div className='target__main-container_time'>
                25:00
            </div>

            <div className='target__main-container_button'>
                <button>Start</button>
            </div>

        </div>

        <div className='target__main-focus'>
            <div className='target__main-focus_one'>#1</div>
            <div className='target__main-focus_two'>Time to Focus!</div>
            
            <div className='target__main-focus_three'>
                <div>Tasks</div>
                <FiGrid className='FiGrid' />
            </div>

            <div className='target__main-focus_four'>
                <div className='flex'>
                    <FiPlusCircle className='FiPlusCircle' />
                    <div style={{opacity: '0.8', fontWeight: 'bold'}}>Add Task</div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Target