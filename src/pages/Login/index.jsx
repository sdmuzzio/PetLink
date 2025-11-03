import React from 'react';
import { ScrollRestoration, useNavigate } from 'react-router-dom';
import BtnPrimaryLogin from '../../components/BtnPrimaryLogin';
import styles from './Login.module.css';
import image13 from '../../assets/images/image-13.png';

function Login() {
  const navigate = useNavigate();

  return ( 
    <div className={styles.container}>
      <div className={styles.panel}>
        {/* GATO ENCIMA DEL INPUT EMAIL */}
        <div className={styles.imageWrapper}>
          <img src={image13} alt="Gato" className={styles.catImage} />
        </div>

        <h1 className={styles.title}>Iniciar Sesión</h1>

        <input type="email" placeholder="Email" className={styles.input} />
        <input type="password" placeholder="Password" className={styles.input} />

        <BtnPrimaryLogin
          text="Iniciar Sesión"
          onClick={() => navigate('/feed')}
        />

        <div className={styles.links}>
          <div className={styles.linkLine}>
            <span className={styles.linkText}>¿No tienes una cuenta?</span>{' '}
            <span
              className={styles.link}
              onClick={() => navigate('/register')}
            >
              Nueva Cuenta
            </span>
          </div>

          <div className={styles.linkLine}>
            <span
              className={styles.link}
              onClick={() => navigate('/forgot')}
            >
              ¿Olvidaste tu Contraseña?
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;