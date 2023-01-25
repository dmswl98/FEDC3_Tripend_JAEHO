import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { useSigninForm } from '../../hooks/useSigninForm';
import '../../index.css';
import { userLoginButtonShowState } from '../../recoil/authState';
import {
  Fieldset,
  FormButton,
  FormFailedText,
  FormLogin,
  FormLoginText,
  FormSignupText,
  Input,
  LoginBlock,
  LoginTitle,
  LoginWrapper,
} from './style';

const Login = () => {
  const { email, password, handleEmail, handlePassword, isLoading, handleSubmit } = useSigninForm();

  const navigate = useNavigate();

  const setLoginButton = useSetRecoilState(userLoginButtonShowState);

  const handleClickSignUp = () => {
    navigate('/signup');
    setLoginButton(false);
  };

  return (
    <LoginBlock>
      <LoginWrapper>
        <FormLogin onSubmit={handleSubmit}>
          <LoginTitle>로그인</LoginTitle>
          <FormLoginText>Tripend에 오신 것을 환영해요!</FormLoginText>

          <Fieldset>
            <legend>이메일</legend>
            <Input type="text" onChange={handleEmail} placeholder="이메일을 입력해주세요." />
          </Fieldset>

          <Fieldset>
            <legend>비밀번호</legend>
            <Input
              type="password"
              onChange={handlePassword}
              placeholder="비밀번호를 입력해주세요."
            />
          </Fieldset>

          <FormButton type="submit" disabled={!email || !password}>
            로그인
          </FormButton>
          <FormFailedText style={isLoading ? { color: 'red' } : { display: 'none' }}>
            등록된 계정이 없습니다.
          </FormFailedText>

          <FormSignupText>
            아직 회원이 아니신가요?
            <span onClick={handleClickSignUp} style={{ color: 'red', cursor: 'pointer' }}>
              회원가입
            </span>
          </FormSignupText>
        </FormLogin>
      </LoginWrapper>
    </LoginBlock>
  );
};

export default Login;
