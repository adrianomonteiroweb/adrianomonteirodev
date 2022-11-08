import FilterSkills from './skills-components/FilterSkills';

export default function Skills() {
  return (
    <div className='skills-div'>
      <h1>Adriano Monteiro Dev</h1>
      <h2>Junior Software Developer</h2>
      <FilterSkills />
      <div className='cards-skills-div'>
        <div className='card'>
          <h3>ReactJS</h3>
        </div>
        <div className='card'>
          <h3>NodeJS</h3>
        </div>
      </div>
    </div>
  );
}
