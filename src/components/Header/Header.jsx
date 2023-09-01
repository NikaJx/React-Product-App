import React from 'react';

import { Container, Row } from 'reactstrap';
import { NavLink, useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useSelector } from 'react-redux';
import useAuth from '../../custoom-hooks/useAuth';

import logo from '../../assets/images/eco-logo.png';
import user__icon from '../../assets/images/user-icon.png';

const nav__link = [
    {
        path: 'home',
        display: 'Home'
    },
    {
        path: 'shop',
        display: 'Shop'
    },
    {
        path: 'cart',
        display: 'Cart'
    }
];

import './Header.css';

const Header = () => {
    const totalQuantity = useSelector(state => state.cart.totalQuantity);
    const navigate = useNavigate();
    const { currentUser } = useAuth();

    const navigateToCart = () => {
        navigate('/cart');
    }

    return (
        <header className='header'>
            <Container>
                <Row>
                    <div className="nav__wrapper">
                        <div className="logo">
                            <img src={logo} alt="logo" />
                            <div>
                               <Link to='/home'>
                                    <h1>Multimart</h1>
                               </Link>
                            </div>
                        </div>
                        <div className="navigation">
                            <ul className='menu'>
                                {
                                    nav__link.map((item, i) => (
                                        <li className="nav__item" key={i}>
                                             <NavLink to={item.path} 
                                                className={(navClass) => navClass.isActive ? 'nav__active' : ''}>
                                                 {item.display}
                                            </NavLink>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                        <div className="nav__icons">
                            <span className='fav__icon'>
                                <i className="ri-heart-line"></i>
                                <span className='badge'>1</span>
                            </span>
                            <span className='cart__icon' onClick={navigateToCart}>
                                <i className="ri-shopping-bag-line"></i>
                                <span className='badge'>{totalQuantity}</span>
                            </span>
                            <span>
                                <motion.img whileTap={{scale: 1.2}} 
                                    src={ currentUser ? currentUser.photoURL : user__icon} 
                                    alt="user" />
                                <p>{currentUser.displayName}</p>
                            </span>
                        </div>
                    </div>
                </Row>
            </Container>
        </header>
    );
}

export default Header;