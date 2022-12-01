import React from 'react';
import CartWidget from '../CartWidget/CartWidget';
import logo from '../../assets/images/logoipsum.svg'; 
import './NavBar.css'

const Navbar = () => {

    return (
        <nav className='navbar navbar-expand-lg styleNav'  >
            <div className='container-fluid'>
                <a className='navbar-brand' >
                    <img src={logo} alt="logo"  width={121} height={80} />
                
                </a>
                <div className='nav linkmodi '>
                    <ul className='navbar-nav me-auto mb-2 mb-lg-0 linkmodi'>
                        <li className='nav-item linkmodi'>
                            <a className='nav-link linkmodi'>Productos</a>
                        </li>
                        <li className='nav-item linkmodi'>
                            <a className='nav-link '  >Nosotros</a>
                        </li>
                        <li className='nav-item'>
                            <a className='nav-link '  >Contacto</a>
                        </li>
                    </ul>
                    <CartWidget />
                </div>
            </div>
        </nav>
    );
}

export default Navbar;