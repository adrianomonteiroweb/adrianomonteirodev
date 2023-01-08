import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import './filterSkills.css';

export default function FilterSkills({ typeSkill, setTypeSkill }) {
  const { t } = useTranslation();

  function changeSelectedSkill(event, typeSkill, setTypeSkill) {
    document
      .querySelector(`[name="${typeSkill}"]`)
      ?.classList.remove('filter-selected');

    const button = event.currentTarget;

    document
      .querySelector(`[name="${button.name}"]`)
      ?.classList.add('filter-selected');

    setTypeSkill(button.name);
    localStorage.setItem('filterPreference', typeSkill);
  }

  useEffect(() => {
    document
      .querySelector(`[name="${typeSkill}"]`)
      ?.classList.add('filter-selected');
  }, []);

  return (
    <div className='skills-filter-div'>
      <button
        className='filter-button'
        name='All Skills'
        onClick={(event) => changeSelectedSkill(event, typeSkill, setTypeSkill)}
      >
        {t('All Skills')}
      </button>
      <button
        className='filter-button'
        name='Academic'
        onClick={(event) => changeSelectedSkill(event, typeSkill, setTypeSkill)}
      >
        {t('Professionals')}
      </button>
      <button
        className='filter-button'
        name='Professional'
        onClick={(event) => changeSelectedSkill(event, typeSkill, setTypeSkill)}
      >
        {t('Academics')}
      </button>
    </div>
  );
}
