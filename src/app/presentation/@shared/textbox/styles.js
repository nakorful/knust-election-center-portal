import styled from 'styled-components';

export const Textbox = styled.input`
  border-radius: 20px;
  border: 1.2px solid #aaa;
  padding: 12px;
  font-size: 1rem;
  outline: none;
  width: 70%;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  display: block;

  ::-webkit-input-placeholder {
    text-align: center;
  }

  :-moz-placeholder {
    text-align: center;
  }
  
  @media screen and (min-width: 600px) {
    width: 300px;
  }
`
