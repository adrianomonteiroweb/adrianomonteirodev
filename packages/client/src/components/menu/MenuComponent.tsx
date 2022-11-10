import LanguagesComponent from '../languages/LanguagesComponent';
import './menuComponent.css';

interface IProps {
  changeTheme: Function;
}

export default function MenuComponent({ changeTheme }: IProps) {
  return (
    <div className='menu'>
      <LanguagesComponent />
      <button type='button' onClick={() => changeTheme()}>
        Light & Dark Theme
      </button>
    </div>
  );
}
