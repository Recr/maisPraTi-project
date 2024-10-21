// Login padrão para testes: CPF 999.999.999-99, senha: 123456
// 20/10 Ayumi: falta autenticação pelo Google

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import classes from './Login.module.css';

const Login = () => {

  const [cpf, setCpf] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);

  const navigate = useNavigate(); // Hook para redirecionamento


  //Remover caracteres especiais no CPF
  function justNumbers(input) {
    return input.replace(/[^0-9]/g,'');
  }

  const validate = () =>{

    //Objeto para armazenar erros
    let newErrors = {};

    //Validação do campo nome
    if(!cpf) newErrors.cpf = 'Digite seu CPF';
    
    //Validação da senha
    if(!password) newErrors.password='Digite sua senha';
    
    if((cpf && password) && justNumbers(cpf) != "99999999999" || password != "123456") newErrors.invalid='CPF e/ou senha inválidos.';

    setErrors(newErrors);
    return newErrors;
  }

  const handleSubmit = (e) =>{
    e.preventDefault();
    const validateErrors = validate();

    if(Object.keys(validateErrors).length===0 && justNumbers(cpf) == "99999999999" && password == "123456"){
      setErrors({})
      setLoggedIn(true);
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
            <label>CPF</label>
            <input type="text" value={cpf} onChange={(e)=> setCpf(e.target.value)} id="cpf" name="cpf" required />
            {errors.cpf && <p className={classes.loginError}>{errors.cpf}</p>}
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