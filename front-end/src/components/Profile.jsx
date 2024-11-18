// 17/11 falta fazer GET

import { useState } from 'react';
import classes from './Register.module.css';

const Profile = () => {
  const [formData, setFormData] = useState({
    name: '',
    birth_date: '',
    email: '',
    tellphone:'',
    password: '',
    passwordConfirmation:'',
    gender:'',
    height: '',
    register_date: '',
    terms: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleCheckbox = (e) => {
    const { name, checked } = e.target;
    setFormData({
      ...formData,
      [name]: checked,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Process formData
    console.log(formData);
  };

  return (
    <div className={classes.registerContainer}>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <div className={classes.inputGroup}>
            <div>
              <label>Nome*</label>
              <input
                type="text"
                id="nome"
                name="name"
                value={formData.name}
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
                id="telefone"
                name="telefone"
                placeholder="(00)0000-0000"
                value={formData.tellphone}
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
                    value={formData.birth_date}
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
                    value={formData.passwordConfirmation}
                    onChange={handleChange}
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
                    <option value="masculino">Masculino</option>
                    <option value="feminino">Feminino</option>
                    <option value="outro">Outro</option>
                </select>
                </div>
                <div>
                <label>Altura (cm)</label>
                <input
                    type="number"
                    id="altura"
                    name="altura"
                    value={formData.altura}
                    onChange={handleChange}
                />
                </div>
            </div>

        </fieldset>

        <button type="submit" className={classes.btnEnviar}>Enviar</button>
      </form>
    </div>
  );
};

export default Profile;