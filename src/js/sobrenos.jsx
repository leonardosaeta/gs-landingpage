import React, { useState } from 'react'
import '../css/sobrenos-style.css'
import people from '../Images/people/pessoas.webp'
import { Link } from 'react-scroll';


const Sobrenos = ()=> {

        const [click, setClick] = useState(false)
        const handleClick = () => setClick(!click)
    
        const closeMenu = () => setClick(false)

    return ( 
        <div className="sobrenos-main" id='sobrenos-main'>
               <div className='sobrenos-container'>
                    <img src={people} alt="" className='people-fig'/>



                    <div className='info-div'>


                    <p className='information'>
                        <h2>Experimente ouvir, conectar-se e se comunicar melhor do que nunca</h2>
                        As pessoas com perda de audição estão no centro do que fazemos. Em um mundo sempre mais inteligente, 
                        pensamos grande e desafiamos a norma para que possamos transformar vidas através do poder do som. Uma vida que permite que você ouça mais, 
                        faça mais e seja mais do que você jamais pensou ser possível.
                        <br /><br />
                        As soluções inovadoras de audição da ReSound combinam o pensamento e o design
                        originais com a tecnologia sólida - tudo baseado em uma visão audiológica 
                        profunda e compreensão dos usuários de aparelhos auditivos. Ao combinar 
                        nossa experiência nos pilares da tecnologia Smart Hearing, as pessoas 
                        com perda de audição podem experimentar, conectar-se e se comunicar melhor do 
                        que nunca.
                    </p>

                    <div className='button-div'>
                        <Link className='register-button'  to="register-main" spy={true} smooth={true} offset={-100} duration={500}  onClick={closeMenu}>Agende uma consulta ainda hoje!</Link>
                    </div>

                    </div>

               </div>
        </div>
     );
}

export default Sobrenos;