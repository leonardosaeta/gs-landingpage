import logo from '../Images/logos GN/Logo 1.png'; // import of logo 1
import phone from '../Images/Icons/icons8-phone-50.png';
import whats from '../Images/Icons/whats.png'
import "../css/headers-style.css"
import { FaBars, FaTimes } from 'react-icons/fa'
import { Link } from 'react-scroll';


import React, { useState } from 'react'


const  Headers = () => {
    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    const closeMenu = () => setClick(false)
    return ( 


        <div className='header-main'>
        <nav className='nav-main'>
            <img src={logo} alt=""  className='logo' />


            <div className='hamburger' onClick={handleClick}>
                    {click ? (<FaTimes size={30} style={{ color: '#ffffff' }} />)
                        : (<FaBars size={30} style={{ color: '#ffffff' }} />)}

            </div>


                <Link id='link'  to="register-main" spy={true} smooth={true} offset={-100} duration={500}  onClick={closeMenu}>Consultas</Link>
                <Link id='link' to="product-main" spy={true} smooth={true} offset={-200} duration={500}  onClick={closeMenu}>Produtos</Link>
                <Link id='link' to="blog-main" spy={true} smooth={true} offset={-200} duration={500}  onClick={closeMenu}>Blog</Link>
                <Link id='link' to="sobrenos-main" spy={true} smooth={true} offset={-200} duration={500}  onClick={closeMenu}>Sobre nos</Link>   


            <div className='contact'>
                <div>
                    <img className='phoneIMG' src={phone} alt="" />
                    (11) 3428-4706 
                </div>

                <div>
                    <img className='phoneWhats' src={whats} alt="" />
                    (11) 94576-8268
                </div>
            </div>
        </nav>
        </div>
     );
}
export default Headers;