import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  background-color: white;
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  height: 80vh;
  width: 60vw;
  padding-right: 2px;
  background-color: white;
  border-radius: 20px;
  box-shadow: 6px 6px 10px #cecece;
  border: solid #cecece 1px;

  text-align: left;

  textarea {
    margin: auto;
    height: 60vh;
    width: 50vw;
    border: solid #cecece 1px;
    &::placeholder {
      color: #cecece;
      text-align: center;
      margin-top: 30px;
      font-size: 30px;
    }
  }

  button {
    height: 60px;
    width: 200px;
    border-radius: 10px;
    border: none;
    cursor: pointer;
    background-color: rgba(173, 255, 47, 0.8);
    margin-bottom: 30px;
    color: white;

    &:hover {
      background-color: rgb(173, 255, 47);
    }
  }
  h4 {
    color: #cecece;
    text-align: left;
    margin-left: 10px;
  }
  p.result {
    padding: 10px;
    color: #cecece;
    font-size: 12px;
    text-align: left;
    overflow: hidden;
  }

  span.succsess {
    position: absolute;
    margin: auto;
    top: 20px;
    color: rgb(132, 222, 2);
    font-size: 30px;
  }
  span.support {
    position: absolute;
    top: 10px;
    right: 10px;
    color: green;
    font-size: 10px;
  }
  span.notsupport {
    position: absolute;
    right: 10px;
    top: 10px;
    color: red;
  }
`;
