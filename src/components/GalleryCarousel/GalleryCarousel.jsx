import { useState } from 'react'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import { mostViewed } from '../../data/products'
import './GalleryCarousel.css'

function GalleryCarousel() {
  const [start, setStart] = useState(0)
  const visible = mostViewed.slice(start, start + 3)

  function prev() {
    setStart((s) => Math.max(s - 1, 0))
  }

  function next() {
    setStart((s) => Math.min(s + 1, mostViewed.length - 3))
  }

  return (
    <section className="gallery container">
      <div className="gallery-head">
        <h2>Eng ko'p ko'rilgan mahsulotlar</h2>
        <p>Mijozlarimiz tanlovlariga eng loyiq bo'lgan mahsulotlarimiz</p>
      </div>

      <div className="gallery-images">
        {visible.map((item, index) => (
          <div key={item.id} className={index === 2 ? 'gallery-img gallery-img-tall' : 'gallery-img'}>
            <img src={item.image} alt="mahsulot" />
          </div>
        ))}
      </div>

      <div className="gallery-nav">
        <button type="button" onClick={prev}>
          <FiChevronLeft />
        </button>
        <button type="button" className="gallery-nav-active" onClick={next}>
          <FiChevronRight />
        </button>
        {mostViewed.map((_, i) => (
          <span key={i} className={i === start ? 'dot dot-active' : 'dot'}></span>
        ))}
      </div>
    </section>
  )
}

export default GalleryCarousel
