import React from 'react';
import styles from './BtnSecondary.module.css';

export function BtnSecondary({ className, divClassName, text, onClick }) {
  return (
    <button className={`${styles.btnSecondary} ${className}`} onClick={onClick}>
      <span className={divClassName}>{text}</span>
    </button>
  );
}