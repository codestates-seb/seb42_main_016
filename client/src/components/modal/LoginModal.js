import * as S from '../style/ModalStyle';
import {useRef, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {selectModal, closeModal} from '../../modules/redux/modalSlice';
import useScroll from '../../hooks/useScroll';
import CloseIcon from '../../utils/CloseIcon';
import {useNavigate} from 'react-router-dom';
import {LOGIN} from '../../modules/routes';

function LoginModal() {
	const modalRef = useRef();
	const {isOpen} = useSelector(selectModal);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	useScroll();

	useEffect(() => {
		document.addEventListener('mousedown', clickModalOutside);
		return () => {
			document.removeEventListener('mousedown', clickModalOutside);
		};
	});

	const clickModalOutside = (e) => {
		if (isOpen && !modalRef.current.contains(e.target)) {
			dispatch(closeModal());
		}
	};

	const clickLogin = () => {
		navigate(LOGIN);
		dispatch(closeModal());
	};

	return (
		<S.ConfirmContainer ref={modalRef}>
			<S.ConfirmContent>
				<div onClick={() => dispatch(closeModal())}>
					<CloseIcon />
				</div>
				<S.ConfirmText>로그인이 필요한 서비스 입니다.</S.ConfirmText>
				<S.ButtonBox>
					<S.ConfirmButton color="white" border="none" hover="#6893dd" onClick={clickLogin}>
						로그인 하기
					</S.ConfirmButton>
				</S.ButtonBox>
			</S.ConfirmContent>
		</S.ConfirmContainer>
	);
}

export default LoginModal;
