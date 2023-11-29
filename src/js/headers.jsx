import logo from '../Images/logos GN/Logo 1.png'; // import of logo 1
import phone from '../Images/Icons/icons8-phone-50.png';
import whats from '../Images/Icons/whats.png'
import "../css/headers-style.css"

function headers() {
    return ( 
        <div className='header-main'>

            
            <img src={logo} alt=""  className='logo' />


            {/* Needs to to insert the href */}
            <a id='link' href="">Consultas</a>
            <a id='link' href="">Produtos</a>
            <a id='link' href="">Blog</a>
            <a id='link' href="">Sobre nos</a>


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
        </div>
     );
}
export default headers;