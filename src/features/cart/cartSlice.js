import { createSlice } from '@reduxjs/toolkit'
import { products } from '../../data/products'

const startItems = [products[2], products[3], products[1], products[4], products[7]].map(
  (p, i) => ({
    cartId: i + 1,
    id: p.id,
    name: p.name,
    price: p.price,
    image: p.image,
    atrikul: p.atrikul,
    qty: 1,
  })
)

const initialState = {
  items: startItems,
  discount: 10,
  delivery: 15000,
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action) {
      const product = action.payload
      const already = state.items.find(
        (item) => item.id === product.id && item.size === product.size
      )
      if (already) {
        already.qty += 1
      } else {
        state.items.push({
          cartId: Date.now(),
          id: product.id,
          name: product.name,
          price: product.price,
          image: product.image,
          atrikul: product.atrikul,
          size: product.size,
          qty: 1,
        })
      }
    },
    removeFromCart(state, action) {
      state.items = state.items.filter((item) => item.cartId !== action.payload)
    },
    incQty(state, action) {
      const item = state.items.find((item) => item.cartId === action.payload)
      if (item) item.qty += 1
    },
    decQty(state, action) {
      const item = state.items.find((item) => item.cartId === action.payload)
      if (item && item.qty > 1) item.qty -= 1
    },
    clearCart(state) {
      state.items = []
    },
  },
})

export const { addToCart, removeFromCart, incQty, decQty, clearCart } = cartSlice.actions

export default cartSlice.reducer
