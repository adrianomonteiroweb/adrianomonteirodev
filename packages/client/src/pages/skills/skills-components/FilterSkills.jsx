export default function FilterSkills({ setTypeSkill }) {
  return (
    <div className='skills-filter-div'>
      <button className='filter-button' onClick={() => setTypeSkill('')}>
        All Skills
      </button>
      <button
        className='filter-button'
        onClick={() => setTypeSkill('Academic')}
      >
        Professionals
      </button>
      <button
        className='filter-button'
        onClick={() => setTypeSkill('Professional')}
      >
        Academics
      </button>
    </div>
  );
}
