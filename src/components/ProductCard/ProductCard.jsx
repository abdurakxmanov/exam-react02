import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { FiShare2 } from 'react-icons/fi'
import { addToCart } from '../../features/cart/cartSlice'
import './ProductCard.css'

function ProductCard({ product }) {
  const dispatch = useDispatch()

  function handleAddToCart() {
    dispatch(addToCart(product))
  }

  return (
    <div className="product-card">
      <Link to={`/product/${product.id}`} className="product-card-img">
        <img src={product.image} alt={product.name} />
      </Link>

      <div className="product-card-body">
        <p className="product-card-name">{product.name}</p>

        <div className="product-card-price-row">
          <div>
            <span className="product-card-price">{product.price.toLocaleString()}</span>
            <span className="product-card-old-price">
              {product.oldPrice.toLocaleString()}
            </span>
          </div>
          <button type="button" className="product-card-share">
            <FiShare2 />
          </button>
        </div>

        <div className="product-card-buttons">
          <button type="button" className="btn-buy">
            Sotib olish
          </button>
          <button type="button" className="btn-cart" onClick={handleAddToCart}>
            Savatga
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
