import { useState } from 'react'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import ProductCard from '../ProductCard/ProductCard'
import './ProductSection.css'

function ProductSection({ title, subtitle, products, dots = 5 }) {
  const [activeDot, setActiveDot] = useState(0)

  return (
    <section className="product-section container">
      <div className="product-section-head">
        <h2>{title}</h2>
        <p>{subtitle}</p>
      </div>

      <div className="product-section-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <div className="product-section-nav">
        <button type="button" onClick={() => setActiveDot((d) => Math.max(d - 1, 0))}>
          <FiChevronLeft />
        </button>

        {Array.from({ length: dots }).map((_, i) => (
          <span
            key={i}
            className={i === activeDot ? 'dot dot-active' : 'dot'}
            onClick={() => setActiveDot(i)}
          ></span>
        ))}

        <button
          type="button"
          onClick={() => setActiveDot((d) => Math.min(d + 1, dots - 1))}
        >
          <FiChevronRight />
        </button>
      </div>
    </section>
  )
}

export default ProductSection
