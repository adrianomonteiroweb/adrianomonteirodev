import { useTranslation } from 'react-i18next';

import './card.css';

export default function Card({ skill, time_experience, type, at }) {
  const { t } = useTranslation();
  return (
    <div className='card'>
      <div className='skill'>
        <h3>{skill}</h3>
        <h3>
          {time_experience} {t('months')}
        </h3>
      </div>
      <div className='tags'>
        <span className={`types ${type}`}>{t(type)}</span>
        <span className={`at ${at}`}>{at}</span>
      </div>
    </div>
  );
}
