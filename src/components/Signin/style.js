import styled from '@emotion/styled';

const LoginBlock = styled.div`
  width: 100%;
  height: calc(100vh - 80px);
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--background-color);
`;

const LoginWrapper = styled.div`
  width: 430px;
`;

const FormLogin = styled.form`
  padding: 0 30px;
  h3 {
    font-size: 1.5rem;
    margin-right: 200px;
  }

  div {
    display: flex;
    justify-content: flex-end;
    width: fit-content;
  }
`;

const LoginTitle = styled.div`
  font-size: 28px;
  font-weight: 700;
`;

const FormLoginText = styled.p`
  font-size: 14px;
  margin-bottom: 20px;
  color: var(--font-input-color);
`;

const Fieldset = styled.fieldset`
  margin-top: 12px;
  border-radius: 4px;
  border: 1px solid;
  overflow: hidden;
  border: 2px solid #dee2e6;
  font-size: 13px;
`;

const Input = styled.input`
  width: 100%;
  outline: none;
  font-size: 14px;
  background-color: var(--background-color);
`;

const FormSignupText = styled.p`
  text-align: center;
  font-size: 14px;

  span {
    display: inline-block;
    margin-left: 10px;
    font-weight: 700;
  }
`;

const FormFailedText = styled.p`
  text-align: center;
  font-size: 13px;
  margin-left: 5px;
  color: #e63946;
`;

const FormButton = styled.button`
  width: 100%;
  padding: 0.8rem;
  border: 1px solid #dee2e6;
  border-radius: 5px;
  outline: none;
  font-size: 1rem;
  font-weight: 700;
  margin-top: 1rem;
  text-align: center;
  background-color: #8dd3bb;
  cursor: pointer;

  &:focus {
    color: #495057;
    border-color: #80bdff;
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
  }

  &:hover {
    background-color: #55d4a9;
  }
`;

export {
  LoginTitle,
  LoginBlock,
  LoginWrapper,
  Input,
  FormSignupText,
  FormLoginText,
  FormFailedText,
  FormLogin,
  FormButton,
  Fieldset,
};
