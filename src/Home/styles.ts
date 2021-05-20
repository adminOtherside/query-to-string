import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background-color: white;
  padding: 10px;

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 200px;
    height: 200px;
    background-color: #2ecc40;
    margin: 8px;
    border: 2px lightgray solid;
    border-radius: 16px;
    filter: brightness(0.8);
    cursor: pointer;
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
    color: white;

    &:hover {
      filter: brightness(1);
    }
    &:active {
      color: white;
    }
  }
`;
