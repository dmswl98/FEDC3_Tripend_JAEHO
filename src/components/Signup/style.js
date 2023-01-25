import styled from '@emotion/styled';

export const SignupContainer = styled.div`
  width: 100%;
  height: calc(100vh - 80px);
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--background-color);
`;

export const SignupWrapper = styled.div`
  width: 430px;
`;

export const SignupForm = styled.div`
  padding: 0 30px;
`;

export const SignupTitle = styled.div`
  font-size: 28px;
  font-weight: 700;
`;

export const SignupDescription = styled.p`
  font-size: 14px;
  margin-bottom: 20px;
  color: var(--font-input-color);
`;

export const FieldSet = styled.fieldset`
  margin-top: 12px;
  border-radius: 4px;
  border: 1px solid;
  overflow: hidden;
  border: 2px solid #dee2e6;
  font-size: 13px;

  &:focus {
    border-color: #8dd3bb;
  }
`;

export const Input = styled.input`
  width: 100%;
  outline: none;
  font-size: 14px;
  background-color: var(--background-color);

  ::placeholder {
    color: var(--font-input-color);
  }
`;

export const InputWrapper = styled.div`
  width: 100px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FormSigninText = styled.p`
  text-align: center;
  font-size: 14px;

  span {
    display: inline-block;
    margin-left: 10px;
    font-weight: 700;
  }
`;

export const ErrorMessage = styled.span`
  display: inline-block;
  font-size: 13px;
  margin-left: 5px;
  color: #e63946;
`;

export const SignupButton = styled.button`
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
