import './card.css';

export default function Card({ skill, time_experience, type, at }) {
  return (
    <div className='card'>
      <h3>{skill}</h3>
      <div className='tags'>
        <h3>{time_experience} meses</h3>
        <span className={`types ${type}`}>{type}</span>
        <span className={`at ${at}`}>{at}</span>
      </div>
    </div>
  );
}
