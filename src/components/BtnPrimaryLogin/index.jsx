import React, { useState } from 'react';
import styles from './BtnPrimaryLogin.module.css';

function BtnPrimaryLogin({ text = "Iniciar Sesión", onClick, disabled = false }) {
  const [pressed, setPressed] = useState(false);

  return (
    <button
      className={`
        ${styles.btn}
        ${pressed ? styles.pressed : ''}
        ${disabled ? styles.disabled : ''}
      `}
      onMouseDown={() => !disabled && setPressed(true)}
      onMouseUp={() => setPressed(false)}
      onMouseLeave={() => setPressed(false)}
      onClick={onClick}
      disabled={disabled}
    >
      <span className={styles.label}>{text}</span>
      {pressed && <div className={styles.ripple} />}
    </button>
  );
}

export default BtnPrimaryLogin;