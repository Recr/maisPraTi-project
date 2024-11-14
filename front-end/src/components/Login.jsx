// Login padrão para testes: E-mail: adm@adm.com, senha: 123456
// 20/10 Ayumi: falta autenticação pelo Google

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import classes from './Login.module.css';
import axios from 'axios';

const Login = () => {

  const [mail, setMail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);

  const navigate = useNavigate(); // Hook para redirecionamento


  //Remover caracteres especiais no CPF
  function validEmail(input) {
    return input.match(/^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)$/);
  }

  const validate = () =>{

    //Objeto para armazenar erros
    let newErrors = {};

    //Validação do campo nome
    if(!mail) newErrors.mail = 'Digite seu e-mail';
    
    //Validação da senha
    if(!password) newErrors.password='Digite sua senha';
    
    if(!mail || !password || !validEmail(mail)) newErrors.invalid='E-mail e/ou senha inválidos.';

    setErrors(newErrors);
    return newErrors;
  }

  const handleSubmit = (e) =>{
    e.preventDefault();
    const validateErrors = validate();

    console.log(errors);
    if(Object.keys(validateErrors).length===0 && validEmail(mail)){
      setErrors({})
      setLoggedIn(true);
      

      const credentials = axios.post('http://localhost:8080/login',{
        email: mail,
        password: password
      })
      //Resposta positiva
      .then(response => {
          console.log('Dados do livro solicitado: ', credentials.data)
          alert('Livro recuperado' + JSON.stringify(credentials.data))
      })
      //Resposta negativa
      .catch(error => {
          console.log('Erro ao recuperar o livro: ', error)
          alert('Erro ao recuperar os dados do livro')
      })

      console.log("Logged in");
      navigate('/user'); // Redireciona para a página UserPage
    }
    else{
        setErrors(validateErrors);
        setLoggedIn(false);
        console.log(validateErrors);
    }
  }

  return (
    <div className={classes.content}>
      <div className={classes.containerLogin}>
        <h1>Login</h1>
        <form>
          <div className={classes.inputGroup}>
            <label>E-mail</label>
            <input type="text" value={mail} onChange={(e)=> setMail(e.target.value)} id="mail" name="mail" required />
            {errors.mail && <p className={classes.loginError}>{errors.mail}</p>}
          </div>
          <div className={classes.inputGroup}>
            <label>Senha</label>
            <input type="password" value={password} onChange={(e)=> setPassword(e.target.value)} id="password" name="password" required />
            {errors.password && <p className={classes.loginError}>{errors.password}</p>}
            {loggedIn && <p className={classes.loginSuccess}>Login realizado com sucesso!</p>}
          </div>
          <button type="submit" className={classes.btnLogin} onClick={handleSubmit}>Acessar</button>
          {errors.invalid && <p className={classes.loginError}>{errors.invalid}</p>}
          <a href="#" className={classes.forgotPassword}>Esqueci minha senha</a>
          <button type="button" className={classes.btnGoogle}>Acesse com conta Google</button>
        </form>
        <div className={classes.signup}>
          <p>
            Ainda não tem conta? <a href="#">Faça o seu cadastro!</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;