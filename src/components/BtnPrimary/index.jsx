import React from 'react';
import styles from './BtnPrimary.module.css';

export function BtnPrimary({ className, divClassName, text, onClick }) {
  return (
    <button className={`${styles.btnPrimary} ${className}`} onClick={onClick}>
      <span className={divClassName}>{text}</span>
    </button>
  );
}