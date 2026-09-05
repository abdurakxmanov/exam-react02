import { FiArrowLeft, FiArrowRight } from 'react-icons/fi'
import { categories } from '../../data/products'
import './Categories.css'

function Categories() {
  return (
    <section className="categories container">
      <div className="categories-head">
        <h2>Mahsulotlarimiz turlari</h2>
        <p>Kompaniyamiz tomonidan ishlab chiqariladigan poyabzal turlari</p>
      </div>

      <div className="categories-row">
        <button type="button" className="categories-arrow">
          <FiArrowLeft />
        </button>

        <div className="categories-list">
          {categories.map((cat) => (
            <div key={cat.id} className="categories-item">
              <div className="categories-item-img">
                <img src={cat.image} alt={cat.title} />
              </div>
              <p>{cat.title}</p>
            </div>
          ))}
        </div>

        <button type="button" className="categories-arrow categories-arrow-active">
          <FiArrowRight />
        </button>
      </div>

      <button type="button" className="categories-btn">
        KATALOGGA O'TISH →
      </button>
    </section>
  )
}

export default Categories
