import React, { useContext, useRef, useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import logo_glassify from '../Assets/logo_glassify.png';
import cart_icon from '../Assets/cart_icon.png';
import { ShopContext } from '../../Context/ShopContext';
import nav_dropdown from '../Assets/nav_dropdown.png';

const Navbar = () => {
  let [menu, setMenu] = useState('shop');
  const { getTotalCartItems } = useContext(ShopContext);
  const menuRef = useRef();

  const dropdown_toggle = (e) => {
    menuRef.current.classList.toggle('nav-menu-visible');
    e.target.classList.toggle('open');
  };

  const isLoggedIn = localStorage.getItem('auth-token');

  return (
    <div className='nav'>
      <Link to='/' onClick={() => setMenu('shop')} style={{ textDecoration: 'none' }} className='nav-logo'>
        <img src={logo_glassify} alt='logo' />
      </Link>
      <img onClick={dropdown_toggle} className='nav-dropdown' src={nav_dropdown} alt='' />
      <ul ref={menuRef} className='nav-menu'>
        <li onClick={() => setMenu('home')}>
          <Link to='/' style={{ textDecoration: 'none' }}>Home</Link>
          {menu === 'home' ? <hr /> : <></>}
        </li>
        <li onClick={() => setMenu('sunglasses')}>
          <Link to='/sunglasses' style={{ textDecoration: 'none' }}>Occhiali da sole</Link>
          {menu === 'sunglasses' ? <hr /> : <></>}
        </li>
        <li onClick={() => setMenu('eyewear')}>
          <Link to='/eyewear' style={{ textDecoration: 'none' }}>Occhiali da vista</Link>
          {menu === 'eyewear' ? <hr /> : <></>}
        </li>
      </ul>
      <div className='nav-login-cart'>
        {isLoggedIn ? (
          <>
            <button onClick={() => { localStorage.removeItem('auth-token'); window.location.replace('/'); }}>Logout</button>
            <Link to='/cart'>
              <img src={cart_icon} alt='cart' />
            </Link>
            <div className='nav-cart-count'>{getTotalCartItems()}</div>
          </>
        ) : (
          <Link to='/login' style={{ textDecoration: 'none' }}>
            <button>Login</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
