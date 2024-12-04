'use client';
import React, { useState } from 'react';
import Navbar from './NavBar';
import ProductCatalog from './catalog/ProductCatalog';
import ProductManagement from './managment/ProductManagement';

const App = () => {
  const [currentPage, setCurrentPage] = useState<string>('catalog');

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <Navbar onNavigate={handleNavigate} />
      <div>
        {currentPage === 'catalog' ? <ProductCatalog /> : <ProductManagement />}
      </div>
    </div>
  );
};

export default App;
