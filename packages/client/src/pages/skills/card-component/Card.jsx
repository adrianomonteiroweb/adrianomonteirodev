import './card.css';

export default function Card({ skill, time_experience, type, at }) {
  return (
    <div className='card'>
      <div className='skill'>
        <h3>{skill}</h3>
        <h3>{time_experience} meses</h3>
      </div>
      <div className='tags'>
        <span className={`types ${type}`}>{type}</span>
        <span className={`at ${at}`}>{at}</span>
      </div>
    </div>
  );
}
