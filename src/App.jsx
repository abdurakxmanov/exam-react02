<<<<<<< HEAD
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import ProductDetail from './pages/ProductDetail/ProductDetail'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/product/:id" element={<ProductDetail />} />
    </Routes>
=======
import Navbar from './components/Navbar/Navbar.jsx'
import Banner from './components/Banner/Banner.jsx'
import AddUser from './router/addUser/addUser.jsx'
import UserList from './router/userList/userList.jsx'
import { Route, Routes } from 'react-router'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Banner/>  
      <Routes>
        <Route path="/addUser" element={<AddUser/>}/>
        <Route path="/userList" element={<UserList/>}/>
      </Routes>
    </div>
>>>>>>> e9144a0f0b953b0935e9cdc7fbf4c3c3d69ba711
  )
}

export default App
