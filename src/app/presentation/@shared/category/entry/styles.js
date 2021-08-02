import styled from 'styled-components';

export const EntryStyles = styled.div`
  position: relative;
  margin-bottom: 70px;
  
  .wrapper {
    display: flex;
    align-items: center;
    margin-left: 200px;
  }
  
  .wrapper > :last-child {
    margin-left: 100px;
  }
  
  .wrapper > div:nth-child(2) {
    width: 200px;
    height: 300px;
  }
  
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
`
