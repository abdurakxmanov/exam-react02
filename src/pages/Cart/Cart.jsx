import { useSelector, useDispatch } from 'react-redux'
import { FiMinus, FiPlus, FiX } from 'react-icons/fi'
import Navbar from '../../components/Navbar/Navbar'
import { incQty, decQty, removeFromCart } from '../../features/cart/cartSlice'
import './Cart.css'

function Cart() {
  const dispatch = useDispatch()
  const { items, discount, delivery } = useSelector((state) => state.cart)

  const subtotal = items.reduce((sum, item) => sum + item.price * item.qty, 0)
  const discountValue = Math.round((subtotal * discount) / 100)
  const total = subtotal - discountValue + delivery

  return (
    <div className="cart-page">
      <Navbar />

      <div className="container cart-container">
        <h1>Savatda {items.length} ta tovar bor</h1>

        <div className="cart-layout">
          <div className="cart-list">
            {items.map((item) => (
              <div className="cart-row" key={item.cartId}>
                <div className="cart-row-img">
                  <img src={item.image} alt={item.name} />
                </div>

                <div className="cart-row-info">
                  <p className="cart-row-name">{item.name}</p>
                  <p className="cart-row-atrikul">Atrikul: {item.atrikul}</p>
                </div>

                <div className="cart-row-qty">
                  <button type="button" onClick={() => dispatch(decQty(item.cartId))}>
                    <FiMinus />
                  </button>
                  <span>{item.qty}</span>
                  <button type="button" onClick={() => dispatch(incQty(item.cartId))}>
                    <FiPlus />
                  </button>
                </div>

                <p className="cart-row-price">{(item.price * item.qty).toLocaleString()}</p>

                <button
                  type="button"
                  className="cart-row-remove"
                  onClick={() => dispatch(removeFromCart(item.cartId))}
                >
                  <FiX />
                </button>
              </div>
            ))}

            {items.length === 0 && <p className="cart-empty">Savatingiz bo'sh</p>}
          </div>

          <div className="cart-summary">
            <p className="cart-summary-logo">san+one</p>

            <div className="cart-summary-row">
              <span>Narxi:</span>
              <span>{subtotal.toLocaleString()} so'm</span>
            </div>
            <div className="cart-summary-row">
              <span>Chegirma:</span>
              <span>- {discount} %</span>
            </div>
            <div className="cart-summary-row">
              <span>Yetkazib berish:</span>
              <span>{delivery.toLocaleString()} so'm</span>
            </div>

            <hr />

            <div className="cart-summary-total">
              <span>Jami:</span>
              <span>{total.toLocaleString()} so'm</span>
            </div>

            <button type="button" className="cart-summary-btn">
              BUYURTMANI TASDIQLASH
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
