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
  )
}

export default Navbar
