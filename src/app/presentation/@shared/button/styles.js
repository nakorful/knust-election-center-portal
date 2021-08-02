import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Button = styled(Link)`
  border-radius: 20px;
  padding: 12px;
  font-size: 1rem;
  outline: none;
  width: 70%;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  color: #fff;
  display: block;
  text-transform: uppercase;
  text-decoration: none;

  @media screen and (min-width: 600px) {
    width: 300px;
  }
`

export const PrimaryBtn = styled(Button)`
    background: linear-gradient(to left, rgb(107, 15, 0), rgba(132, 10, 5, .8))
`
