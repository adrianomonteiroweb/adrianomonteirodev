import LanguagesComponent from '../languages/LanguagesComponent';

import './menuComponent.css';

interface IProps {
  changeTheme: Function;
  theme: any;
}

export default function MenuComponent({ changeTheme, theme }: IProps) {
  return (
    <div className='menu'>
      <LanguagesComponent />
      <button
        className='button-selected'
        type='button'
        onClick={() => changeTheme()}
      >
        <img
          src={theme === 'Light' ? 'light-theme.png' : 'dark-theme.png'}
          alt={theme === 'Light' ? 'light-theme' : 'dark-theme'}
        />
      </button>
    </div>
  );
}
