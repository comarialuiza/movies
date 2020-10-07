import React from 'react';

import Home from './pages/Home';
import { GlobalStyle } from './styles/global';

import { MovieProvider } from './context/MovieContext';

function App() {
  return (
    <MovieProvider>
      <Home />
      <GlobalStyle />
    </MovieProvider>
  );
}

export default App;
