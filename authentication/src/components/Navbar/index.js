import styles from './index.css'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { NavLink } from 'react-router-dom'


function Navbar(){
    return<div className='navbar'>
        <div className='header'>Header</div>
        <div className='s_p'>
        <div >
        <NavLink to="/" className='signup'>
              Signup
            </NavLink>
        </div>
        <div>
        <NavLink to="/Profile" className='profile'>Profile</NavLink>
        </div>
        </div>
    </div>
}
export default Navbar;