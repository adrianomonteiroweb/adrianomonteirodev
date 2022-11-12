import { useTranslation } from 'react-i18next';

import './filterSkills.css';

function changeSelectedSkill(event, typeSkill, setTypeSkill) {
  document.querySelector(`#${typeSkill}`)?.classList.remove('button-selected');

  const button = event.currentTarget;

  document.querySelector(`#${button.id}`)?.classList.add('button-selected');

  setTypeSkill(button.id);
}

export default function FilterSkills({ typeSkill, setTypeSkill }) {
  const { t } = useTranslation();

  return (
    <div className='skills-filter-div'>
      <button
        className='filter-button button-selected'
        id='All Skills'
        onClick={(event) => changeSelectedSkill(event, typeSkill, setTypeSkill)}
      >
        {t('All Skills')}
      </button>
      <button
        className='filter-button'
        id='Academic'
        onClick={(event) => changeSelectedSkill(event, typeSkill, setTypeSkill)}
      >
        {t('Professionals')}
      </button>
      <button
        className='filter-button'
        id='Professional'
        onClick={(event) => changeSelectedSkill(event, typeSkill, setTypeSkill)}
      >
        {t('Academics')}
      </button>
    </div>
  );
}
