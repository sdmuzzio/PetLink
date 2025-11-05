import React from 'react';
import { useNavigate } from 'react-router-dom';
import BtnPrimaryLogin from '../../components/BtnPrimaryLogin';
import styles from './Register.module.css';

function Register() {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <div className={styles.panel}>
        <h1 className={styles.title}>Registrarse</h1>

        <input type="email" placeholder="Email" className={styles.input} />
        <input type="password" placeholder="Password" className={styles.input} />

        <BtnPrimaryLogin
          text="Registrarse"
          onClick={() => navigate('/inicio')}
        />

        <div className={styles.loginPrompt}>
          <span className={styles.loginText}>¿Ya tienes una cuenta?</span>
          <span
            className={styles.loginLink}
            onClick={() => navigate('/login')}
          >
            Iniciar Sesión
          </span>
        </div>
      </div>
    </div>
  );
}

export default Register;