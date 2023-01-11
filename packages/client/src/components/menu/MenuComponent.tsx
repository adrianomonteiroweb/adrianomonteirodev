import LanguagesComponent from '../languages/LanguagesComponent';

import './menuComponent.css';

interface IProps {
  changeTheme: Function;
  theme: any;
}

function hover(element: any, theme: string) {
  element.setAttribute(
    'src',
    theme === 'Light' ? 'light-theme-color.png' : 'dark-theme-color.png'
  );
}

function unhover(element: any, theme: string) {
  element.setAttribute(
    'src',
    theme === 'Light' ? 'light-theme.png' : 'dark-theme.png'
  );
}

export default function MenuComponent({ changeTheme, theme }: IProps) {
  const themeIcon = document.querySelector('#theme-icon');

  themeIcon?.addEventListener('mouseover', () => {
    hover(themeIcon, theme);
  });

  themeIcon?.addEventListener('mouseout', () => {
    unhover(themeIcon, theme);
  });

  return (
    <div className='menu'>
      <LanguagesComponent />
      <div className='theme-div'>
        <button
          className='button-selected'
          type='button'
          onClick={() => changeTheme()}
        >
          <img
            id='theme-icon'
            src={theme === 'Light' ? 'light-theme.png' : 'dark-theme.png'}
            alt={theme === 'Light' ? 'light-theme' : 'dark-theme'}
          />
        </button>
        <span>{theme === 'Light' ? 'Dark Theme' : 'Light Theme'}</span>
      </div>
    </div>
  );
}
