import { FaInstagram, FaFacebookF, FaTelegramPlane } from 'react-icons/fa'
import contactBg from '../../assets/images/navy-suede-loafer.png'
import './Contact.css'

function Contact() {
  return (
    <section className="contact" style={{ backgroundImage: `url(${contactBg})` }}>
      <div className="contact-overlay" aria-hidden="true"></div>
      <div className="contact-inner container">
        <h2>Siz bilan bog'lanishdan mamnunmiz!</h2>

        <div className="contact-info">
          <p className="contact-label">Manzilimiz:</p>
          <p className="contact-value">Toshkent Shahar, Birnarsa tumani, Birnarsa ko'cha 12-uy.</p>
        </div>
        <div className="contact-info">
          <p className="contact-label">Murojaat uchun telefon:</p>
          <p className="contact-phone">+998 (88) 413 00 00</p>
        </div>
        <div className="contact-info">
          <p className="contact-label">Ijtimoiy tarmoqlarda bizni toping:</p>
          <div className="contact-social">
            <a href="#instagram">
              <FaInstagram />
            </a>
            <a href="#facebook">
              <FaFacebookF />
            </a>
            <a href="#telegram">
              <FaTelegramPlane />
            </a>
          </div>
        </div>

        <button type="button" className="contact-btn">
          RO'YXATDAN O'TISH →
        </button>
      </div>

      <span className="contact-watermark" aria-hidden="true">san&bull;one</span>
    </section>
  )
}

export default Contact
