import '../css/products-style.css'
import product1 from '../Images/products/resoundMultiMic.webp'
import product2 from '../Images/products/Tranmisso2v.webp'
import product3 from '../Images/products/resoundPaperClip.webp'
import product4 from '../Images/products/resoundRemoteControl.webp'

function products() {
    return ( 

        <div className='product-main' id='product-main'>


        <div className='testingcentering'>




        <div className='products'>

            <div className='products1'>
                <div className='productContainer'>
                    <img  src={product1} alt="" />
                    <p>O Grupo Star Multi Mic é uma solução pequena e flexível que permite ouvir até
                         25 metros de distância sem barreiras, sem necessidade de um acessório 
                         intermidiário.</p>
                </div>


                <div className='productContainer'>
                    <img  src={product2} alt="" />
                    <p>O Transmissor de TV 2 fará com que seus aparelhos 
                        auditivos funcionem como fones de ouvido sem fio.</p>
                </div>

            </div>

            <div className='products2'>
                <div className='productContainer'>
                    <img src={product3} alt="" />
                    <p> O ReSound Phone Clip + transmite chamadas de telefone claras e áudio diretamente para 
                        seus aparelhos auditivos. Não é maior do que uma caixa de fósforos, o ReSound Phone Clip 
                        + é muito útil e fácil de configurar e usar. </p>
                </div>

                <div className='productContainer'>
                    <img src={product4} alt="" />
                    <p>
                    O ReSound Remote Control 2 é fácil de configurar e usar.
                     Vai tornar-se rapidamente uma parte valiosa de sua vida diária.
                    </p>
                </div>
           
            </div>
        </div>

        <div className='products-text'>
            <h1>Conexão inigualável</h1>
            <p>Transforme sua experiência auditiva mais enriquecedora com os acessórios Wireless. Com os acessórios de conectividade faça de seus aparelhos auditivos fones de ouvido.</p>
        </div>


        </div>
            
        </div>
     );
}

export default products;