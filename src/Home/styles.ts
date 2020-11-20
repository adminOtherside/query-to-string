import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  background-color: white;
  padding: 10px;
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  height: 80vh;
  width: 80vw;
  padding-right: 2px;
  background-color: white;
  border-radius: 20px;
  box-shadow: 6px 6px 10px #cecece;
  border: solid #cecece 1px;
  text-align: left;

  div.textareas {
    display: flex;
    height: 60vh;
    width: 80vw;
    padding-top: 30px;
    padding-left: 3px;

    textarea {
      margin: auto;
      height: 60vh;
      width: 30vw;
      border: solid #cecece 1px;
      margin-left: 2px;
      margin-right: 2px;
      font-size: 14px;
      padding: 12px;
      &::placeholder {
        color: #cecece;
        text-align: center;
        font-size: 30px;
      }
    }

    textarea.result {
      margin: auto;
      height: 60vh;
      flex: 1;
      margin-right: 3px;
      border: solid #cecece 1px;
      font-size: 14px;
      padding: 12px;
      &::placeholder {
        color: #cecece;
        text-align: center;
        font-size: 30px;
      }
    }
  }
  div.buttons {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin-top: 40px;
    color: black;
    button {
      height: 60px;
      width: 200px;
      border-radius: 10px;
      border: none;
      cursor: pointer;
      background-color: rgba(173, 255, 47, 0.8);
      color: white;
      margin-right: 6px;

      &:hover {
        background-color: rgb(173, 255, 47);
      }
    }
    div {
      display: flex;
      align-items: center;
      margin-top: 6px;
      input {
        width: 30px;
        height: 30px;
        margin-right: 6px;
        outline: 3px;
      }
      span {
        font-size: 20px;
        margin-right: 6px;
      }
    }
  }

  h4 {
    color: #cecece;
    text-align: left;
    margin-left: 10px;
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
