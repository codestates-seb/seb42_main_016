import * as S from './style/FormStyle';
import {useRef, useState} from 'react';
import useNickname from '../hooks/useNickname';
import useEmail from '../hooks/useEmail';
import usePassword from '../hooks/usePassword';
import useConfirmPassword from '../hooks/useConfirmPassword';
import API from '../modules/API';
import {useNavigate} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {user} from '../modules/redux/userSlice';

function SignupForm() {
	const [value, setValue] = useState({
		nickname: '',
		email: '',
		password: '',
		confirmPassword: '',
	});

	const {nickname, email, password, confirmPassword} = value;
	const {validNicknameText, isValidNickname} = useNickname(nickname);
	const {validEmailText, isValidEmail} = useEmail(email);
	const {validPasswordText, isValidPassword} = usePassword(password);
	const {validConfirmPasswordText, isValidConfirmPassword} = useConfirmPassword(confirmPassword, password);
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
		const input = [isValidNickname, isValidEmail, isValidPassword, isValidConfirmPassword];

		for (let i = 0; i <= input.length; i++) {
			if (input[i]) {
				inputRef.current[i].focus();
				return;
			}
		}

		API.post('/members', {
			nickname,
			email,
			password,
		})
			.then((res) => {
				console.log('회원가입 성공', res.data);
				dispatch(user(res.data));
				navigate('/login');
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
								<S.Label>닉네임</S.Label>
							</S.LabelContainer>
							<S.Input
								type="text"
								placeholder="닉네임을 입력해주세요."
								name="nickname"
								value={nickname}
								onChange={onChange}
								valid={!isValidNickname}
								ref={(el) => (inputRef.current[0] = el)}
							/>
							<S.ValidText>{validNicknameText}</S.ValidText>
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
								ref={(el) => (inputRef.current[1] = el)}
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
								ref={(el) => (inputRef.current[2] = el)}
							/>
							<S.ValidText>{validPasswordText}</S.ValidText>
							<S.LabelContainer>
								<S.Label>비밀번호 확인</S.Label>
							</S.LabelContainer>
							<S.Input
								type="password"
								placeholder="비밀번호를 다시 입력해주세요."
								name="confirmPassword"
								value={confirmPassword}
								onChange={onChange}
								valid={!isValidConfirmPassword}
								ref={(el) => (inputRef.current[3] = el)}
							/>
							<S.ValidText>{validConfirmPasswordText}</S.ValidText>
							<S.Button type="submit" onClick={onSubmit} disabled={!(nickname.length && email.length && password.length && confirmPassword.length)}>
								<S.ButtonText>가입하기</S.ButtonText>
							</S.Button>
						</S.Form>
					</S.FormWrapper>
				</S.Border>
			</S.Container>
		</S.BgColor>
	);
}

export default SignupForm;
