import React from 'react'
import './Footer.css'
import logo_glassify from '../Assets/logo_glassify.png'
import instagram_icon from '../Assets/instagram_icon.png'
import pintrest_icon from '../Assets/pintester_icon.png'
import whatsapp_icon from '../Assets/whatsapp_icon.png'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-logo">
        <img src={logo_glassify} alt="" />
      </div>
      <ul className="footer-links">
        <li>Prodotti</li>
        <li>Chi siamo</li>
        <li>Contatti</li>
      </ul>
      <div className="footer-social-icons">
        <div className="footer-icons-container">
            <img src={instagram_icon} alt="" />
        </div>
        <div className="footer-icons-container">
            <img src={pintrest_icon} alt="" />
        </div>
        <div className="footer-icons-container">
            <img src={whatsapp_icon} alt="" />
        </div>
      </div>
      <div className="footer-copyright">
        <hr />
        <p>Copyright @ 2023 - Tutti i diritti riservati.</p>
      </div>
    </div>
  )
}

export default Footer
