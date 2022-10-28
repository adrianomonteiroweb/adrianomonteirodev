import { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from './styled-components/themes';
import { GlobalStyles } from './styled-components/GlobalStyles';
import { Container, Content } from './styled-components/styledComponents';

import './App.css';
import MenuComponent from './components/menu/MenuComponent';

function App() {
  const [theme, setTheme] = useState('Light');

  function changeTheme() {
    theme === 'Light' ? setTheme('Dark') : setTheme('Light');
  }

  return (
    <ThemeProvider theme={theme === 'Light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      <Container>
        <Content className='content'>
          <Router>
            <div className='App'>
              <MenuComponent changeTheme={changeTheme} />
              <h1>Adriano Monteiro Dev</h1>
              <h2>Junior Software Developer</h2>
            </div>
          </Router>
        </Content>
      </Container>
    </ThemeProvider>
  );
}

export default App;
