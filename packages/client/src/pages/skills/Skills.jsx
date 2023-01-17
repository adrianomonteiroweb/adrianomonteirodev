import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import axiosFunction, { filterProjectsBySkills } from '../../utils/functions';
import secondaryData from '../../data/skillsData.json';
import secondaryProjectData from '../../data/projectsData.json';

import Card from './card-component/Card';
import FilterSkills from './skills-components/FilterSkills';
import ContactsComponent from '../../components/contacts/ContactsComponent';

import './skills.css';
import Project from './project-component/Project';

export default function Skills() {
  const { t } = useTranslation();
  const [typeSkill, setTypeSkill] = useState('All Skills');
  const [skillsData, setSkillsData] = useState([]);
  const [projects, setProjects] = useState(secondaryProjectData);
  const [filterProjects, setFilterProjects] = useState(['']);

  async function fetch() {
    const fetchResult = await axiosFunction('skills');

    setSkillsData(fetchResult);
  }

  function addTagsSkills(e) {
    if (e.keyCode !== 13) return;

    const valueInput = document.querySelector('#filter-input').value;

    const spanSkill = document.createElement('span');
    spanSkill.className = 'skill';
    spanSkill.innerText = valueInput;
    spanSkill.id = valueInput;

    document.querySelector('.filter-skills-div').appendChild(spanSkill);

    const deleteDiv = document.createElement('div');
    deleteDiv.className = 'delete';
    deleteDiv.addEventListener('click', (e) => {
      document.querySelector(`#${e.target.parentNode.id}`).remove();
      setFilterProjects([
        ...filterProjects.filter(
          (project) => project !== e.target.parentNode.id
        ),
      ]);
    });

    document.querySelector(`#${valueInput}`).appendChild(deleteDiv);

    document.querySelector('#filter-input').value = '';

    setFilterProjects([...filterProjects, valueInput]);
  }

  useEffect(() => {
    fetch();

    skillsData.length === 0 && setSkillsData(secondaryData);
  }, []);

  useEffect(() => {
    setProjects(filterProjectsBySkills(secondaryProjectData, filterProjects));
  }, [filterProjects]);

  return (
    <div className='skills-div'>
      <img
        src={
          localStorage.getItem('themePreference') === 'Dark'
            ? 'logo-dark.png'
            : 'logo-light.png'
        }
        alt={
          localStorage.getItem('themePreference') === 'Dark'
            ? 'logo-dark'
            : 'logo-light'
        }
      />
      <ContactsComponent />
      <h2>{t('Junior Full Stack Software Developer')}</h2>
      <FilterSkills typeSkill={typeSkill} setTypeSkill={setTypeSkill} />
      <div className='cards-skills-div'>
        {skillsData.map(({ skill, time_experience, type, at }, index) => (
          <Card
            key={index}
            skill={skill}
            time_experience={time_experience}
            type={type}
            at={at}
          />
        ))}
      </div>
      <div className='filter-projects-div'>
        <p>{t("Enter a skill to filter and press 'Enter'")}</p>
        <input
          id='filter-input'
          type='text'
          placeholder='Add Skill for Filter'
          onKeyUp={(e) => addTagsSkills(e)}
        />
        <div className='filter-skills-div'></div>
      </div>
      <div className='cards-projects-div'>
        {projects.map(
          (
            { title, description, uri, repository, image, tags, status },
            index
          ) => (
            <Project
              key={index}
              title={title}
              description={description}
              uri={uri}
              repository={repository}
              image={image}
              tags={tags}
              status={status}
              index={index}
            />
          )
        )}
      </div>
    </div>
  );
}
