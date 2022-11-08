import './card.css';

export default function Card({ skill, time_experience, types, at }) {
  return (
    <div className='card'>
      <h3>{skill}</h3>
      <h3>{time_experience} meses</h3>
      <div className='tags'>
        {types.map((type) => (
          <span className={`types ${type}`}>{type}</span>
        ))}
        {at.map((at) => (
          <span className={`at ${at}`}>{at}</span>
        ))}
      </div>
    </div>
  );
}
