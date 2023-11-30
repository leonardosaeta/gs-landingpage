import '../css/register-style.css'

function register() {
    return ( 
        <div className="register-main" id='register-main'>


            <div className='information-try'>
            As pessoas com perda de audição estão no centro do que fazemos. Em um mundo sempre
            mais inteligente, pensamos grande e desafiamos a norma para que possamos transformar
            vidas através do poder do som.Uma vida que permite que você ouça mais, 
            faça mais e seja mais do que você jamais pensou ser possível. <br /> <br />

            As soluções inovadoras de audição da ReSound combinam o pensamento e o design originais 
            com a tecnologia sólida - tudo baseado em uma visão audiológica profunda e compreensão 
            dos usuários de aparelhos auditivos. Ao combinar nossa experiência nos pilares da tecnologia 
            Smart Hearing, as pessoas com perda de audição podem experimentar, conectar-se e se comunicar
             melhor do que nunca.
            </div>

            <div className='register-form'>  

            Preencha o formulário abaixo paragarantir seu TESTE GRÁTIS hoje <br /> <br />


            <form action="">

            <label for="Nome">Nome:</label>
            <br />
            <input type="text" id="username" name="Nome" required/>
            <br />

            <label for="Telefone">Telefone:</label>
            <br />
            <input type="text" id="username" name="Telefone" required/>
            <br />

            <label for="E-mail">E-mail:</label>
            <br />
            <input type="text" id="username" name="E-mail" required/>
            <br />

            <div className='special-container'>

                <button type='submit' className='submit-button'>Enviar</button>

            </div>

            </form>


            

            </div>

        
        </div>
     );
}

export default register;