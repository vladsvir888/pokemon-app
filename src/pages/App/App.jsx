import React from 'react';
import { Routes, Route } from 'react-router-dom';

import routes from '../../routes/routes';

import PageLayout from '../PageLayout';
import ErrorPage from '../ErrorPage';

const App = () => {
  return (
    <>
      <Routes>
        <Route element={<PageLayout />}>
          {routes.map(route => 
            <Route key={route.element} path={route.path} element={route.element} />
          )}
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}

export default App;
