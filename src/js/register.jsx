import '../css/register-style.css';
import userIMG from '../Images/Icons/user.png'
import userDetailed from '../Images/Icons/userDetailed.png'
import userColor from '../Images/Icons/icons8-user-64.png'

function register() {
    return ( 
        <div className="register-main" id='register-main'>

        
            <div className='container'>



            <p className='information-try'>
                <h2>
                Desperte seus sentidos com uma experiência sonora de alto nível
                </h2>


                <p>Bem-vindo ao melhor da audição. Desenvolvido com fundamentos auditivos modernos e fáceis de usar que oferecem clareza no som para a vida cotidiana. Eles 
                    lhe dão confiança para evoluir as suas experiências e ouvir melhor todos os dias.</p>
          
            </p>

            <div className='register-form'>

            <div className='first-info'>
            <img src={userColor} alt="" className='userIMG'/>  

                Preencha o formulário abaixo paragarantir seu TESTE GRÁTIS hoje <br /> <br />

            </div>
            

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

           

        
        </div>
     );
}

export default register;