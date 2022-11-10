import i18n from '../../i18next';

import './languagesComponent.css';

export default function LanguagesComponent() {
  return (
    <div className='languages-div'>
      <button
        className='language-button selected'
        onClick={() => i18n.changeLanguage('pt-BR')}
      >
        BR
      </button>
      <button
        className='language-button'
        onClick={() => i18n.changeLanguage('en-US')}
      >
        ENG
      </button>
      <button
        className='language-button'
        onClick={() => i18n.changeLanguage('es-ES')}
      >
        ESP
      </button>
    </div>
  );
}
