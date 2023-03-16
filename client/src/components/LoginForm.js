import * as S from './style/FormStyle';
import {useRef, useState} from 'react';
import useEmail from '../hooks/useEmail';
import usePassword from '../hooks/usePassword';
import {useNavigate} from 'react-router-dom';
import API from '../modules/API';
import {useDispatch} from 'react-redux';
import {login} from '../modules/redux/userSlice';
import {HOME, SIGNUP} from '../modules/routes';
import {LOGIN_ENDPOINT} from '../modules/endpoints';

function LoginForm() {
	const [value, setValue] = useState({
		email: '',
		password: '',
	});

	const {email, password} = value;
	const {validEmailText, isValidEmail} = useEmail(email);
	const {validPasswordText, isValidPassword} = usePassword(password);
	const inputRef = useRef([]);
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const onChange = (e) => {
		const changeValue = {
			...value,
			[e.target.name]: e.target.value,
		};
		setValue(changeValue);
	};

	const onSubmit = (e) => {
		e.preventDefault();
		if (!email.length || isValidEmail) {
			inputRef.current[0].focus();
			return;
		}
		if (!password.length || isValidPassword) {
			inputRef.current[1].focus();
			return;
		}

		API.post(LOGIN_ENDPOINT, {
			email,
			password,
		})
			.then((res) => {
				console.log('로그인 성공!', res);
				localStorage.setItem('accessToken', res.headers.authorization);
				localStorage.setItem('refresh', res.headers.refresh);
				dispatch(login(email));
				navigate(HOME);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	return (
		<S.BgColor>
			<S.Container>
				<S.Border>
					<S.FormWrapper>
						<S.Logo onClick={() => navigate('/')}>UDog</S.Logo>
						<S.Form>
							<S.LabelContainer>
								<S.Label>이메일</S.Label>
							</S.LabelContainer>
							<S.Input
								type="email"
								placeholder="이메일을 입력해주세요."
								name="email"
								value={email}
								onChange={onChange}
								valid={!isValidEmail}
								ref={(el) => (inputRef.current[0] = el)}
							/>
							<S.ValidText>{validEmailText}</S.ValidText>
							<S.LabelContainer>
								<S.Label>비밀번호</S.Label>
							</S.LabelContainer>
							<S.Input
								type="password"
								placeholder="비밀번호를 입력해주세요."
								name="password"
								value={password}
								onChange={onChange}
								valid={!isValidPassword}
								ref={(el) => (inputRef.current[1] = el)}
							/>
							<S.ValidText>{validPasswordText}</S.ValidText>
							<S.Button type="submit" onClick={onSubmit}>
								<S.ButtonText>로그인</S.ButtonText>
							</S.Button>
							<S.IsMember onClick={() => navigate(SIGNUP)}>회원이 아니신가요?</S.IsMember>
						</S.Form>
					</S.FormWrapper>
				</S.Border>
			</S.Container>
		</S.BgColor>
	);
}

export default LoginForm;
