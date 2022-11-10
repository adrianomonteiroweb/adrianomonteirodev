import './languagesComponent.css';

export default function LanguagesComponent() {
  return (
    <div className='languages-div'>
      <button className='language-button selected'>BR</button>
      <button className='language-button'>ENG</button>
      <button className='language-button'>ESP</button>
    </div>
  );
}
