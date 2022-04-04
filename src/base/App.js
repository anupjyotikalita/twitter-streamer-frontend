import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from 'pages/homepage';
import ResourceNotFound from 'pages/resourceNotFound';

const App = () => (
  <React.Fragment>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="*" element={<ResourceNotFound />} />
    </Routes>
  </React.Fragment>
);

export default App;
