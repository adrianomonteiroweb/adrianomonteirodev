import Card from './card-component/Card';
import FilterSkills from './skills-components/FilterSkills';
import skillsData from '../../data/skillsData.json';

export default function Skills() {
  return (
    <div className='skills-div'>
      <h1>Adriano Monteiro Dev</h1>
      <h2>Junior Software Developer</h2>
      <FilterSkills />
      <div className='cards-skills-div'>
        {skillsData.map(({ skill, time_experience, types, at }) => (
          <Card
            skill={skill}
            time_experience={time_experience}
            types={types}
            at={at}
          />
        ))}
      </div>
    </div>
  );
}
