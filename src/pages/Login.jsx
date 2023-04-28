import { useEffect, useState } from "react";
import Home from './Home'   
import styles from './Login.module.css';


function Login( {childToParent} ) {
    function handleSubmit(e) {
        e.preventDefault();
        loginVerification()
    }

    function loginVerification() {
        if(login === 'Matheus' && password === '123')  
        {
            const validation = true;
        }
    }

    const [login, setLogin] = useState();
    const [password, setPassword] = useState();

 return(
    <div className={styles.lgn_form}>
        <form onSubmit={handleSubmit} className={styles.teste}> 
            <h1 className={styles.form_title}> Formulário de Login: </h1>
            <div>
                <label htmlFor="Login" className={styles.lgn_pass_label} > Login: </label>
                <input type="text" className={styles.lgn_pass_input_buttons} placeholder="Digite o seu Login: " onChange={(e) => setLogin(e.target.value)}/>
            </div>
            <div>
                <label htmlFor="Password" className={styles.lgn_pass_label} > Senha: </label>
                <input type="password" className={styles.lgn_pass_input_buttons}  placeholder="Digite a sua Senha: " onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div>
                <input type="submit" value ="Cadastrar" className={styles.submit_button}/>
            </div>
        </form>
    </div>
    )
}

export default Login;
