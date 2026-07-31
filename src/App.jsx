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
  )
}

export default App
