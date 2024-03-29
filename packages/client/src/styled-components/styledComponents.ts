import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${(props) => props.theme.body};
`;

export const Content = styled.div`
  color: ${(props) => props.theme.fontColor};
  background-color: ${(props) =>
    props.theme.body === '#1a1a1a' ? '#e9ebf2' : '#1a1a1a'};
  .link.active {
    color: ${(props) =>
      props.theme.fontColor === '#000000' ? '#ffffff' : '#000000'};
  }
  .about-me-div p {
    color: ${(props) => props.theme.fontColor};
  }
  .theme-button {
    color: ${(props) =>
      props.theme.fontColor === '#000000' ? '#ffffff' : '#000000'};
  }
  .bar-div {
    background-color: ${(props) => props.theme.bar};
  }
  .card {
    background-color: ${(props) =>
      props.theme.body === '#1a1a1a' ? '#1a1a1a' : '#e9ebf2'};
    color: ${(props) =>
      props.theme.body === '#1a1a1a' ? '#e9ebf2' : '#1a1a1a'};
  }
  .button-selected {
    color: ${(props) =>
      props.theme.body === '#1a1a1a' ? '#1a1a1a' : '#e9ebf2'};
  }
  .skills-div h1,
  .skills-div h2 {
    color: ${(props) =>
      props.theme.body === '#1a1a1a' ? '#1a1a1a' : '#e9ebf2'};
  }
  .languages-div .language-button {
    color: ${(props) =>
      props.theme.body === '#1a1a1a' ? '#9C9B9B' : '#e9ebf2'};
  }
  .skills-filter-div button {
    color: ${(props) =>
      props.theme.body === '#1a1a1a' ? '#1a1a1a' : '#e9ebf2'};
  }
  .language-button.selected {
    border-bottom: 1px solid
      ${(props) => (props.theme.body === '#1a1a1a' ? '#1a1a1a' : '#e9ebf2')};
  }
  .project-div {
    background-color: ${(props) =>
      props.theme.body === '#1a1a1a' ? '#1a1a1a' : '#e9ebf2'};
  }
  .content-div h4,
  .content-div p,
  .project-div .tags-div,
  .project-div a {
    color: ${(props) =>
      props.theme.body === '#1a1a1a' ? '#e9ebf2' : '#1a1a1a'};
  }
  .project-div .status-div {
    background-color: ${(props) =>
      props.theme.body === '#1a1a1a' ? 'white' : '#696969'};
  }
  .project-div .status-span {
    color: ${(props) =>
      props.theme.body === '#1a1a1a' ? '#1a1a1a' : '#e9ebf2'};
  }
`;
