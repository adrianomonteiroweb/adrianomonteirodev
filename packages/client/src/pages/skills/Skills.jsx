import { useState } from 'react';

import Card from './card-component/Card';
import FilterSkills from './skills-components/FilterSkills';
import skillsData from '../../data/skillsData.json';

export default function Skills() {
  const [typeSkill, setTypeSkill] = useState('');

  return (
    <div className='skills-div'>
      <h1>Adriano Monteiro Dev</h1>
      <h2>Junior Software Developer</h2>
      <FilterSkills setTypeSkill={setTypeSkill} />
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
