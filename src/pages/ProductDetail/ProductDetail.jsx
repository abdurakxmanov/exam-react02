import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import Navbar from '../../components/Navbar/Navbar'
import { getProductById } from '../../data/products'
import { addToCart } from '../../features/cart/cartSlice'
import navySlipon from '../../assets/images/navy-slipon.png'
import navySuedeLoafer from '../../assets/images/navy-suede-loafer.png'
import navyLoaferCloth from '../../assets/images/navy-loafer-cloth.png'
import blackSneakerSide from '../../assets/images/black-sneaker-side.png'
import './ProductDetail.css'

const thumbs = [navySlipon, navySuedeLoafer, navyLoaferCloth, blackSneakerSide]
const colors = ['#7a6a5a', '#1c1c1c', '#a05a2c', '#d9d3c9']
const sizes = [37, 38, 39, 40, 41, 42, 43, 44, 45, 46]
const availableSizes = [39, 40, 41, 42, 43, 44, 45]

function ProductDetail() {
  const { id } = useParams()
  const dispatch = useDispatch()
  const product = getProductById(id)

  const [mainImage, setMainImage] = useState(thumbs[0])
  const [activeColor, setActiveColor] = useState(0)
  const [activeSize, setActiveSize] = useState(39)

  if (!product) {
    return (
      <div>
        <Navbar />
        <p className="pd-not-found container">Mahsulot topilmadi</p>
      </div>
    )
  }

  function handleAddToCart() {
    dispatch(addToCart({ ...product, size: activeSize }))
  }

  return (
    <div className="pd-page">
      <Navbar />

      <div className="container pd-container">
        <div className="pd-thumbs">
          {thumbs.map((thumb, index) => (
            <button
              type="button"
              key={index}
              className={mainImage === thumb ? 'pd-thumb pd-thumb-active' : 'pd-thumb'}
              onClick={() => setMainImage(thumb)}
            >
              <img src={thumb} alt="mahsulot" />
            </button>
          ))}
        </div>

        <div className="pd-main-img">
          <img src={mainImage} alt="Maxsulot nomi" />
        </div>

        <div className="pd-info">
          <h1>Maxsulot nomi</h1>

          <p className="pd-label">Rangi</p>
          <div className="pd-colors">
            {colors.map((color, index) => (
              <span
                key={index}
                className={index === activeColor ? 'pd-color pd-color-active' : 'pd-color'}
                style={{ backgroundColor: color }}
                onClick={() => setActiveColor(index)}
              ></span>
            ))}
          </div>

          <p className="pd-label">Narxi</p>
          <div className="pd-price">
            <span className="pd-price-current">{product.price.toLocaleString()}</span>
            <span className="pd-price-old">{product.oldPrice.toLocaleString()}</span>
          </div>

          <p className="pd-label">O'lchamlar</p>
          <div className="pd-sizes">
            {sizes.map((size) => {
              const active = size === activeSize
              const available = availableSizes.includes(size)
              return (
                <button
                  type="button"
                  key={size}
                  disabled={!available}
                  className={active ? 'pd-size pd-size-active' : 'pd-size'}
                  onClick={() => setActiveSize(size)}
                >
                  {size}
                </button>
              )
            })}
          </div>

          <button type="button" className="pd-cart-btn" onClick={handleAddToCart}>
            Savatga
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail
