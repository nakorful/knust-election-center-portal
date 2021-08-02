import styled from 'styled-components';

export const ElectionPageStyles = styled.div`
  padding-bottom: 50px;
  
    * {
      text-align: center;
    }
  
  header > h1 {
    background: linear-gradient(to bottom, rgb(107, 15, 0), rgb(132, 10, 5));
    color: white;
    padding: 60px 0;
  }
  
  button {
    padding: 15px;
    background: linear-gradient(to bottom, rgba(107, 15, 0, .9), rgba(132, 10, 5, .9));
    border: none;
    outline: none;
    color: white;
    width: 150px;
    border-radius: 50px;
    font-size: 1rem;
    cursor: pointer;
  }
`
