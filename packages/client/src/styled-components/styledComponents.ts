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
  button {
    color: ${(props) =>
      props.theme.body === '#1a1a1a' ? '#1a1a1a' : '#e9ebf2'};
    border-bottom: 1px solid
      ${(props) => (props.theme.body === '#1a1a1a' ? '#1a1a1a' : '#e9ebf2')};
  }
`;
