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
`;
