import { useTranslation } from 'react-i18next';

import './filterSkills.css';

export default function FilterSkills({ setTypeSkill }) {
  const { t } = useTranslation();

  return (
    <div className='skills-filter-div'>
      <button className='filter-button' onClick={() => setTypeSkill('')}>
        {t('All Skills')}
      </button>
      <button
        className='filter-button'
        onClick={() => setTypeSkill('Academic')}
      >
        {t('Professionals')}
      </button>
      <button
        className='filter-button'
        onClick={() => setTypeSkill('Professional')}
      >
        {t('Academics')}
      </button>
    </div>
  );
}
