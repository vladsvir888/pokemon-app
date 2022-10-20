import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

import routes from '../../routes';

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        {routes.map(route => 
          <Route key={route.element} path={route.path} element={route.element} />
        )}
      </Routes>
      <Footer />
    </>
  );
}

export default App;