// packages
import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// styled components
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from './styled-components/themes';
import { GlobalStyles } from './styled-components/GlobalStyles';
import { Container, Content } from './styled-components/styledComponents';
// components
import MenuComponent from './components/menu/MenuComponent';
// pages
import Skills from './pages/skills/Skills';
// style
import './App.css';
import { useTranslation } from 'react-i18next';

function App() {
  const { t } = useTranslation();
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
              <h1>{t('Under Development')}</h1>
              <Routes>
                <Route
                  path='/'
                  element={[
                    <MenuComponent changeTheme={changeTheme} />,
                    <Skills />,
                  ]}
                />
              </Routes>
            </div>
          </Router>
        </Content>
      </Container>
    </ThemeProvider>
  );
}

export default App;
