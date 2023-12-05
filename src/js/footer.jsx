import '../css/footer-style.css'
import GNlogo from '../Images/logos GN/logo-branco.webp'
import face from '../Images/Icons/face.svg'
import insta from '../Images/Icons/insta.svg'
import linkedin from '../Images/Icons/linkedin.svg'
import place from '../Images/Icons/place.png'


function footer() {
    return ( 
        <div className="footer-main">
            <div className='footer-container'>

                <div className='social-media'>

                    <img className='footer-logo' src={GNlogo} alt="" />

                    <div className='social'>
                        <a href="https://www.facebook.com/grupostar.aparelhosauditivos/" target="_blank"><img className='medialogo' src={face} alt="" /></a>
                        <a href="https://www.instagram.com/grupostar.aparelhosauditivos/" target="_blank"><img className='medialogo'src={insta} alt="" /> </a>
                        <a href="https://www.linkedin.com/company/grupostar-aparelhosauditivos/" target='_blank'><img className='medialogo'src={linkedin} alt="" /></a>
                    </div>

                </div>

                <div className='addresses'>

                        <div className='address12'>
                            <div>
                                <div className='all-addresses'>
                                    <div className='cityname'>GUARULHOS</div>
                                    <div>   
                                    <img className='placeicon' src={place} alt="" />
                                    <a className='linkmaps' href="https://www.google.com/maps/place/Grupo+Star+Aparelhos+Auditivos+-+ReSound/@-23.4630039,-46.5307703,15z/data=!4m6!3m5!1s0x94cef5576cef329d:0x8be1e806454bfa48!8m2!3d-23.4630039!4d-46.5307703!16s%2Fg%2F1ptx91t8b?entry=ttu" target='_blank'>Av. Salgado Filho, 252 - Centro - Sala 1801 - 18 andar</a>
                                    </div>
                                </div>

                                <div className='all-addresses'>
                                    <div className='cityname'>BRAGANÇA PAULISTA</div>
                                    <div>
                                    <img className='placeicon' src={place} alt="" />
                                    <a className='linkmaps' href="https://www.google.com/maps/place/Instituto+Salaroli+de+Otorrinolaringologia+e+Fonoaudiologia/@-22.9661214,-46.5879358,13z/data=!4m10!1m2!2m1!1sRua+Teixeira,+62+-+Tabo%C3%A3oInstituto+ISO!3m6!1s0x94cec9b99f7e0937:0xd0719c0981a62b34!8m2!3d-22.9703098!4d-46.5391839!15sCihSdWEgVGVpeGVpcmEsIDYyIC0gVGFib8OjbyBJbnN0aXR1dG8gSVNPkgEVb3RvbGFyeW5nb2xvZ3lfY2xpbmlj4AEA!16s%2Fg%2F11c5_p4jkv?entry=ttu" target='_blank'>Rua Teixeira, 62 - Taboão</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='address34'>
                                <div className='all-addresses'>
                                    <div className='cityname'>MOGI DAS CRUZES</div>
                                    <div>
                                        
                                    <img className='placeicon' src={place} alt="" />
                                    <a className='linkmaps' href="https://www.google.com/maps/place/Grupo+Star+-+Aparelhos+Auditivos+-+ReSound/@-23.5238317,-46.1986578,15z/data=!4m6!3m5!1s0x94cdd93afaa17955:0xed4e554dd3286e67!8m2!3d-23.5238317!4d-46.1986578!16s%2Fg%2F11gjst6s52?entry=ttu" target='_blank'>Rua João Cardoso de Siqueira Primo Nº 100 Vila Hélio</a>
                                    </div>
                                </div>

                                <div className='all-addresses'>
                                    <div className='cityname'>SÃO PAULO</div>
                                    <div>

                                    <img  className='placeicon' src={place} alt="" />
                                    <a className='linkmaps' href="https://www.google.com/maps/place/Grupo+Star+Aparelhos+Auditivos+-+ReSound/@-23.5921425,-46.60344,15z/data=!4m2!3m1!1s0x0:0x4466fe6ad6b5bad2?sa=X&ved=2ahUKEwj13Zr7wfiCAxWAqJUCHdf7Ck4Q_BJ6BAhEEAA" target='_blank'>Rua Agostinho Gomes, 2451 - Ipiranga - Sala 7 MK Consultórios</a>
                                    </div>
                                </div>
                        </div>

                </div>




            </div>
        </div>
     );
}

export default footer;