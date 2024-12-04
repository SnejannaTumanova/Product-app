'use client';
import React from 'react';

const Navbar = ({ onNavigate }: { onNavigate: (page: string) => void }) => {
  return (
    <nav>
      <ul>
        <li>
          <button onClick={() => onNavigate('catalog')}>Каталог товаров</button>
        </li>
        <li>
          <button onClick={() => onNavigate('management')}>
            Менеджмент товаров
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
