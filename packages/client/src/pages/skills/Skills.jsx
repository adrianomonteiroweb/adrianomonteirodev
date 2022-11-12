import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import Card from './card-component/Card';
import FilterSkills from './skills-components/FilterSkills';
import skillsData from '../../data/skillsData.json';

import './skills.css';

export default function Skills() {
  const { t } = useTranslation();
  const [typeSkill, setTypeSkill] = useState('All Skills');

  return (
    <div className='skills-div'>
      <h1>Adriano Monteiro Dev</h1>
      <h2>{t('Junior Full Stack Software Developer')}</h2>
      <FilterSkills typeSkill={typeSkill} setTypeSkill={setTypeSkill} />
      <div className='cards-skills-div'>
        {skillsData
          .filter(({ type }) => type !== typeSkill)
          .map(({ skill, time_experience, type, at }) => (
            <Card
              skill={skill}
              time_experience={time_experience}
              type={type}
              at={at}
            />
          ))}
      </div>
    </div>
  );
}
