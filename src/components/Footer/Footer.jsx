import { FaInstagram, FaFacebookF, FaTelegramPlane } from 'react-icons/fa'
import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner container">
        <div className="footer-col">
          <p className="footer-logo">san+one</p>
          <p className="footer-phone">+998 (88) 413 00 00</p>
          <div className="footer-social">
            <FaInstagram />
            <FaFacebookF />
            <FaTelegramPlane />
          </div>
        </div>

        <div className="footer-col">
          <p>BIZ HAQIMIZDA</p>
          <p>KATALOG</p>
        </div>

        <div className="footer-col">
          <p>ENG KO'P SOTILGAN</p>
          <p>ENG KO'P KO'RILGAN</p>
          <p>YANGILIKLAR</p>
        </div>

        <div className="footer-col footer-pay">
          <div className="footer-pay-badge">CLICK</div>
          <div className="footer-pay-badge">Payme</div>
          <div className="footer-pay-badge">Humo</div>
          <div className="footer-pay-badge">Uzcard</div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
