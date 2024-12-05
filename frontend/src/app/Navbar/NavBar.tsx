'use client';
import React from 'react';
import styles from './Navbar.module.css';

const Navbar = ({ onNavigate }: { onNavigate: (page: string) => void }) => {
  return (
    <nav className={styles.nav}>
      <button className={styles.catalog} onClick={() => onNavigate('catalog')}>
        Каталог товаров
      </button>

      <button
        className={styles.managment}
        onClick={() => onNavigate('management')}
      >
        Менеджмент товаров
      </button>
    </nav>
  );
};

export default Navbar;
