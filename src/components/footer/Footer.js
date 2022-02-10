import React from 'react'
import './footer.css'
import {FiFacebook, FiInstagram, FiGithub, FiHeart} from 'react-icons/fi'

const Footer = () => {
  return (
    <div className='app_footer'>
      <div className="app__footer-sitemap">
        <div className='sitemap__link'><a href="#home">Home</a></div>
        <div className='sitemap__link'><a href="#home">Privacy</a></div>
        <div className='sitemap__link'><a href="#home">Contact</a></div>
        <div className='sitemap__link'><a href="#home">Simple Page</a></div>
      </div>

      <div className='app__footer-social'>
        <div><FiFacebook size={27} /></div>
        <div><FiInstagram size={27} /></div>
        <div><FiGithub size={27} /></div>
      </div>

      <div className='madeby'>Made with <FiHeart className='heart' /> by <a href='https://github.com/akhrrbk'>Axror Maxmudovich</a></div>

      <div className='rightsreserved'>
        ©Pomofocus 2021. All Rights Reserved.
      </div>
    </div>
  )
}

export default Footer