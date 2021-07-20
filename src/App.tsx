import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/global';

import { defaultTheme } from './styles/theme';
import Routes from './routes';

const App: React.FC = () => (
  <Router>
    <ThemeProvider theme={defaultTheme}>
      <Routes />
      <GlobalStyle />
    </ThemeProvider>
  </Router>
);

export default App;
