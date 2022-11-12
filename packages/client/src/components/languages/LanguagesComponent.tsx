import React, { useState } from 'react';

import i18n from '../../i18next';

import './languagesComponent.css';

export default function LanguagesComponent() {
  const [language, setLanguage] = useState(i18n.language);

  function changeSelectedLanguage(event: React.MouseEvent<HTMLButtonElement>) {
    document.querySelector(`#${language}`)?.classList.remove('selected');

    const button: HTMLButtonElement = event.currentTarget;

    document.querySelector(`#${button.id}`)?.classList.add('selected');

    i18n.changeLanguage(button.id);

    setLanguage(button.id);
  }

  return (
    <div className='languages-div'>
      <button
        className='language-button selected'
        id='pt-BR'
        onClick={(event) => {
          changeSelectedLanguage(event);
        }}
      >
        BR
      </button>
      <button
        className='language-button'
        id='en-US'
        onClick={(event) => {
          changeSelectedLanguage(event);
        }}
      >
        ENG
      </button>
      <button
        className='language-button'
        id='es-ES'
        onClick={(event) => {
          changeSelectedLanguage(event);
        }}
      >
        ESP
      </button>
    </div>
  );
}
