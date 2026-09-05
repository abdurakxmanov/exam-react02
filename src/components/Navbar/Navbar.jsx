<<<<<<< HEAD
import { Link, useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { FiSearch, FiShoppingCart, FiUser } from 'react-icons/fi'
import './Navbar.css'

function Navbar() {
  const location = useLocation()
  const isHome = location.pathname === '/'
  const items = useSelector((state) => state.cart.items)
  const cartCount = items.reduce((sum, item) => sum + item.qty, 0)

  return (
    <header className={isHome ? 'navbar navbar-home' : 'navbar'}>
      <div className="navbar-inner container">
        <Link to="/" className="navbar-logo">
          san<span>•</span>one
        </Link>

        {!isHome && (
          <nav className="navbar-links">
            <Link to="/">KATALOG</Link>
            <a href="#biz-haqimizda">BIZ HAQIMIZDA</a>
          </nav>
        )}

        <div className="navbar-right">
          <div className="navbar-search">
            <input type="text" placeholder="" />
            <button type="button" aria-label="Qidirish">
              <FiSearch />
            </button>
          </div>

          <div className="navbar-actions">
            <button className="navbar-lang" type="button">
              UZ
            </button>
            <Link to="/cart" className="navbar-action-btn navbar-cart" aria-label="Savat">
              <FiShoppingCart />
              {cartCount > 0 && <span className="navbar-cart-count">{cartCount}</span>}
            </Link>
            <button className="navbar-action-btn navbar-user" type="button" aria-label="Profil">
              <FiUser />
            </button>
          </div>
        </div>
      </div>
    </header>
=======
import "./Navbar.css"
import { Link } from 'react-router'

const Navbar = () => {
  return (
    <div className='Card-list'>
        <nav>Logo</nav>
        <ul>
            <li>
                <Link to="/addUser">adduser</Link>
            </li>
        </ul>
        <ul>
            <li>
                <Link to="/userList">userlist</Link>
            </li>
        </ul>
    </div>
>>>>>>> e9144a0f0b953b0935e9cdc7fbf4c3c3d69ba711
  )
}

export default Navbar
