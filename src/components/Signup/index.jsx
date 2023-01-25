import useSignupForm from '../../hooks/useSignupForm';
import { USER_PLACEHOLDER } from '../../utils/constants/auth';
import {
  FieldSet,
  FormSigninText,
  SignupDescription,
  Input,
  InputWrapper,
  SignupButton,
  SignupContainer,
  SignupTitle,
  SignupWrapper,
  SignupForm,
  ErrorMessage,
} from './style';

const Signup = () => {
  const { navigate, formik } = useSignupForm();

  return (
    <SignupContainer>
      <SignupWrapper>
        <SignupForm onSubmit={formik.handleSubmit}>
          <SignupTitle>회원가입</SignupTitle>
          <SignupDescription>Tripend에 오신 것을 환영해요!</SignupDescription>

          <FieldSet className="form-el">
            <legend>이름</legend>
            <Input
              id="userName"
              name="userName"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.userName}
              placeholder={USER_PLACEHOLDER.USER_NAME}
            />
          </FieldSet>
          {formik.touched.userName && formik.errors.userName ? (
            <ErrorMessage>{formik.errors.userName}</ErrorMessage>
          ) : null}

          <FieldSet className="form-el">
            <legend>나이</legend>
            <Input
              id="userAge"
              name="userAge"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.userAge}
              placeholder={USER_PLACEHOLDER.USER_AGE}
            />
          </FieldSet>
          {formik.touched.userAge && formik.errors.userAge ? (
            <ErrorMessage>{formik.errors.userAge}</ErrorMessage>
          ) : null}

          <FieldSet className="form-el">
            <legend>성별</legend>
            <InputWrapper>
              <Input
                id="userGenderMale"
                name="userGender"
                type="radio"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value="남"
              />
              <label htmlFor="userGenderMale">남</label>

              <Input
                id="userGenderFemale"
                name="userGender"
                type="radio"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value="여"
              />
              <label htmlFor="userGenderFemale">여</label>
            </InputWrapper>
          </FieldSet>
          {formik.touched.userGender && formik.errors.userGender ? (
            <ErrorMessage>{formik.errors.userGender}</ErrorMessage>
          ) : null}

          <FieldSet className="form-el">
            <legend>아이디</legend>
            <Input
              id="userId"
              name="userId"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.userId}
              placeholder={USER_PLACEHOLDER.USER_ID}
            />
          </FieldSet>
          {formik.touched.userId && formik.errors.userId ? (
            <ErrorMessage>{formik.errors.userId}</ErrorMessage>
          ) : null}

          <FieldSet className="form-el">
            <legend>비밀번호</legend>
            <Input
              id="userPassword"
              name="userPassword"
              type="password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.userPassword}
              placeholder={USER_PLACEHOLDER.USER_PASSWORD}
            />
          </FieldSet>
          {formik.touched.userPassword && formik.errors.userPassword ? (
            <ErrorMessage>{formik.errors.userPassword}</ErrorMessage>
          ) : null}

          <FieldSet className="form-el">
            <legend>비밀번호 확인</legend>
            <Input
              id="userPasswordConfirm"
              name="userPasswordConfirm"
              type="password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.userPasswordConfirm}
              placeholder={USER_PLACEHOLDER.USER_PASSWORD}
            />
          </FieldSet>
          {formik.touched.userPasswordConfirm && formik.errors.userPasswordConfirm ? (
            <ErrorMessage>{formik.errors.userPasswordConfirm}</ErrorMessage>
          ) : null}
          <SignupButton type="submit">가입하기</SignupButton>
          <FormSigninText>
            이미 회원이신가요?
            <span onClick={() => navigate('/')} style={{ color: 'red', cursor: 'pointer' }}>
              로그인
            </span>
          </FormSigninText>
        </SignupForm>
      </SignupWrapper>
    </SignupContainer>
  );
};

export default Signup;
