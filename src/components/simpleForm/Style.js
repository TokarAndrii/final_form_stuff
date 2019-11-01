import styled from "styled-components";

export default styled.div`
  h2 {
    margin: 24px 0;
  }
  .form {
    width: 400px;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    align-items: center;
  }

  .formRow {
    margin-top: 12px;
    width: 100%;
    text-align: left;
    padding: 4px;
  }

  .btnsRow {
    margin-top: 12px;
    width: 100%;
    text-align: center;
    padding: 4px;
  }

  .label {
    display: inline-block;
    padding: 4px 11px;
    padding-left: 0;
    font-weight: 600;
    margin-bottom: 6px;
  }

  button {
    margin-right: 8px;
    width: 47.95%;
  }

  pre {
    margin-top: 24px;
    text-align: left;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.1);
  }

  .sauceName {
    margin: 0 6px 0 24px;
  }

  .error {
    position: absolute;
    bottom: calc(100% + 10px);
    left: 50%;
    padding: 20px 60px 20px 20px;
    display: inline-block;
    padding: 8px 11px;
    font-size: 14px;
    color: #333;
    text-align: center;
    font-weight: 600;
    line-height: 1.2;
    width: 50%;
    background-color: #d9d9d9;
    border-radius: 5px;
    box-sizing: border-box;
    background-size: 42px;
    // box-shadow: 0 0 2px rgba(1, 1, 1, 0.56);
    transform: translateX(-50%);
    outline: none;
    transition: 0.3s;
  }

  .error::before {
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    content: "";
    display: inline-block;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 10px 10px 0 10px;
    border-color: #d9d9d9 transparent transparent transparent;
  }
`;
