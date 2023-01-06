import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import axiosFunction from '../../utils/functions';
import secondaryData from '../../data/skillsData.json';

import Card from './card-component/Card';
import FilterSkills from './skills-components/FilterSkills';

import './skills.css';

export default function Skills() {
  const { t } = useTranslation();
  const [typeSkill, setTypeSkill] = useState('All Skills');
  const [skillsData, setSkillsData] = useState([]);

  async function fetch() {
    const fetchResult = await axiosFunction('skills');

    setSkillsData(fetchResult);
  }

  useEffect(() => {
    fetch();

    skillsData.length === 0 && setSkillsData(secondaryData);
  });

  return (
    <div className='skills-div'>
      <h1>Adriano Monteiro Dev</h1>
      <h2>{t('Junior Full Stack Software Developer')}</h2>
      <FilterSkills typeSkill={typeSkill} setTypeSkill={setTypeSkill} />
      <div className='cards-skills-div'>
        {skillsData
          .filter(({ type }) => type !== typeSkill)
          .map(({ skill, time_experience, type, at }, index) => (
            <Card
              key={index}
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
