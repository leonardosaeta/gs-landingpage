import logo from '../Images/logos GN/Logo 1.png'; // import of logo 1
import whitelogo from '../Images/logos GN/logo-branco.webp'
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
                    {click ? (<FaTimes size={30} style={{ color: '#44D7E9' }} />)
                        : (<FaBars size={30} style={{ color: '#44D7E9' }} />)}

            </div>  
            <div className={click ? "nav-menu active" : "nav-menu"}>
                <Link id='link'  to="register-main" spy={true} smooth={true} offset={-100} duration={500}  onClick={closeMenu}>Consultas</Link>
                <Link id='link' to="product-main" spy={true} smooth={true} offset={-200} duration={500}  onClick={closeMenu}>Produtos</Link>
                <Link id='link' to="blog-main" spy={true} smooth={true} offset={-200} duration={500}  onClick={closeMenu}>Blog</Link>
                <Link id='link' to="sobrenos-main" spy={true} smooth={true} offset={-200} duration={500}  onClick={closeMenu}>Sobre nos</Link>   
            </div>              
            <div className='contact'>
                <div>
                    <img className='phoneIMG' src={phone} alt="" />
                    <a className='phonenumber' href="tel:(11)3428-4706">(11) 3428-4706</a>
                </div>

                <div>
                    <img className='phoneWhats' src={whats} alt="" />
                    <a className='phonenumber' href="https://api.whatsapp.com/send?phone=5511945768268" target='_blank'>(11) 94576-8268</a>
                </div>
            </div>


            <img className='whitelogo-header' src={whitelogo} alt="" />
        </nav>
        </div>
     );
}
export default Headers;