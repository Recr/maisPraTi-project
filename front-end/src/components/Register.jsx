// 20/10 Ayumi: Falta a verificação dos dados inseridos (email, telefone, senha, altura) e conferir pq POST não estpa indo
/* Formato aceito no POSTMAN
{
    "username": "User User",
    "birthdate": "2000-10-10",
    "email": "mail@mail.com",
    "phone":"51999999999",
    "password": "12345678",
    "gender":"FEMALE",
    "height": "160"
  }*/

import { useState } from 'react';
import classes from './Register.module.css';
import axios from 'axios';

const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    birthdate: '',
    email: '',
    phone: '',
    password: '',
    gender: '',
    height: '',
  });

  const [verificationData, setVerificationData] = useState({
    passwordConfirmation: '',
    terms: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleVerificationChange = (e) => {
    const { name, value } = e.target;
    setVerificationData({
      ...verificationData,
      [name]: value,
    });
  };

  const handleCheckbox = (e) => {
    const { name, checked } = e.target;
    setVerificationData({
      ...verificationData,
      [name]: checked,
    });
  };

  //Verifica e-mail
  function validEmail(input) {
    if (formData.email === formData.passwordConfirmation)
      return input.match(/^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)$/);
    else return false;
  }
  //Remove caracteres especiais de entradas numéricas
  function justNumbers(input) {
    return input.replace(/[^0-9]/g, '');
  }

  //Armazena erros
  const validate = () => {

    //Objeto para armazenar erros
    let newErrors = {};

    if (!username) newErrors.username = 'Digite seu nome';
    if (!email) newErrors.email = 'Digite seu e-mail';
    if (!password) newErrors.password = 'Digite sua senha';
    if (!phone) newErrors.phone = 'Digite sua telefone';
    if (!mail || !password || !validEmail(mail)) newErrors.invalid = 'E-mail e/ou senha inválidos.';

    setErrors(newErrors);
    return newErrors;
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const newRecord = { ...formData };
    console.log(formData)
    console.log(newRecord)
    console.log(verificationData)

    const addRecords = async (newRecord) => {
      try {
        const response = await axios.post('http://localhost:8080/register', newRecord, {
        })
        console.log('Usuário registrado: ', response.data)
      } catch (error) {
        console.error('Erro ao registrar usuário:', error)
      }
    }
    addRecords(newRecord);
    setFormData({
      username: '',
      birthdate: '',
      email: '',
      phone: '',
      password: '',
      gender: '',
      height: '',
    });
    setVerificationData({
      passwordConfirmation: '',
      terms: '',
    })
  };


  return (
    <div className={classes.registerContainer}>
      <h1>Cadastro</h1>

      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>Informações básicas</legend>
          <div className={classes.inputGroup}>
            <div>
              <label>Nome*</label>
              <input
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className={classes.inputGroup}>
            <div>
              <label>E-mail*</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className={classes.inputGroup}>
            <div>
              <label>Telefone*</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="(00) 0000-0000"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label>Data de nascimento*</label>
              <div>
                <input
                  type="date"
                  id="bithdate"
                  name="birthdate"
                  value={formData.birthdate}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
          </div>

          <div className={classes.inputGroup}>
            <div>
              <label>Senha*</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label>Confirme a senha*</label>
              <input
                type="password"
                id="passwordConfirmation"
                name="passwordConfirmation"
                value={verificationData.passwordConfirmation}
                onChange={handleVerificationChange}
                required
              />
            </div>
          </div>
        </fieldset>

        <fieldset>
          <legend>Informações de saúde</legend>
          <div className={classes.inputGroup}>
            <div>
              <label>Gênero*</label>
              <select
                id="gender"
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                required
              >
                <option value="">Selecionar</option>
                <option value="MALE">Masculino</option>
                <option value="FEMALE">Feminino</option>
                <option value="OTHER">Outro</option>
              </select>
            </div>
            <div>
              <label>Altura (cm)</label>
              <input
                type="number"
                id="height"
                name="height"
                value={formData.height}
                onChange={handleChange}
              />
            </div>
          </div>

        </fieldset>

        <p>
          <span>Os campos indicados com (*) são obrigatórios.</span>
        </p>
        <div className={classes.inputGroup}>
          <input
            type="checkbox"
            id="terms"
            name="terms"
            checked={verificationData.terms}
            onChange={handleCheckbox}
            required
          />
          <span htmlFor="terms">
            Eu li e aceito os <a href="#">Termos de Uso</a> da plataforma.
          </span>
        </div>
        <button type="submit" className={classes.btnEnviar}>Enviar</button>
      </form>
    </div>
  );
};

export default Register;