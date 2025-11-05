import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './NavBar.module.css';
import home from './home.png';
//import userImage from './user-image.png';
import BtnOfertas from '../../components/UI/Buttons/BtnOfertas';
import BtnPropuestas from '../../components/UI/Buttons/BtnPropuestas';

function NavBar() {
  const navigate = useNavigate();

  return (
    <nav className={styles.navbar}>
      {/* Logo / Home */}
      <div className={styles.homeContainer} onClick={() => navigate('/')}>
        <img src={home} alt="Home" className={styles.homeImage} />
      </div>

      {/* Título */}
      <h2 className={styles.title}>Mis Chats</h2>

      {/* Botones */}
      <div className={styles.buttons}>
        <BtnOfertas
          className={styles.btnOfertas}
          propiedad1="predeterminado"
          onClick={() => navigate('/ofertas')}
        />
        <BtnPropuestas
          className={styles.btnPropuestas}
          propiedad1="predeterminado"
          onClick={() => navigate('/propuestas')}
        />
      </div>

      {/* Perfil */}
      <img
        src={userImage}
        alt="Perfil"
        className={styles.userImage}
        onClick={() => navigate('/perfil')}
      />
    </nav>
  );
}

export default NavBar;