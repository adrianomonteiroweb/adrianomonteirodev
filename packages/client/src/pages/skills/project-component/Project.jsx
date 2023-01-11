import { useTranslation } from 'react-i18next';

import { statusProjectFunction } from '../../../utils/functions';

import './project.css';

export default function Project({
  title,
  description,
  uri,
  repository,
  image,
  tags,
  status,
  index,
}) {
  const { t } = useTranslation();

  function descriptionFunction(index) {
    const disabled = document.querySelector(
      `.description-div-${index}.disabled`
    );

    disabled
      ? disabled.classList.remove('disabled')
      : document
          .querySelector(`.description-div-${index}`)
          .classList.add('disabled');
  }

  return (
    <div className='project-div'>
      <div className='status-div'>
        <span className='status-span'>{statusProjectFunction(status)}</span>
      </div>
      <div className='image-div'>
        <img src={image} alt={title} />
      </div>
      <div className='content-div'>
        <h4>{title}</h4>
        <button onClick={() => descriptionFunction(index)}>
          {t('Description')}
        </button>
        <div className={`description-div-${index} disabled`}>
          <p>{description}</p>
        </div>
      </div>
      <div className='tags-div'>
        {tags.map((tag, index) => (
          <span key={index}>{tag}</span>
        ))}
      </div>
      <a href={uri}>{t('Online')}</a>
      <a href={repository}>{t('Repository')}</a>
    </div>
  );
}
