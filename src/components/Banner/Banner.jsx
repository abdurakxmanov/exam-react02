import { Link } from 'react-router-dom'
import heroShoe from '../../assets/images/hero-shoe.png'
import './Banner.css'

function Banner() {
  return (
    <section className="banner">
      {/* Decorative background circles */}
      <div className="banner-circle circle-peach" aria-hidden="true"></div>
      <div className="banner-circle circle-yellow" aria-hidden="true"></div>
      <div className="banner-circle circle-small-peach" aria-hidden="true"></div>

      <div className="banner-inner container">
        <div className="banner-text">
          <h1>
            Yozgi mavsum uchun
            <span>yangi ko'rinish</span>
          </h1>
          <p>
            Yangicha uslub va ko'rinishda ishlab chiqilgan,
            yangi poyabzallarimiz bilan yoz faslini yanada yorqinroq,
            yanada qulayroq o'tkazasiz!
          </p>
          <div className="banner-buttons">
            <button type="button" className="btn-white">
              KO'RISH
            </button>
            <Link to="/product/3" className="btn-outline">
              Ro'yhatdan o'tish &rarr;
            </Link>
          </div>
        </div>

        <div className="banner-image-wrapper">
          <img src={heroShoe} alt="san-one poyabzal" className="banner-shoe-img" />
        </div>
      </div>
    </section>
  )
}

export default Banner
