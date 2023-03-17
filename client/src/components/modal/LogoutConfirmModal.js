import * as S from '../style/ModalStyle';
import {useRef, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {selectModal, closeModal} from '../../modules/redux/modalSlice';
import useScroll from '../../hooks/useScroll';

function LogoutConfirmModal() {
	const modalRef = useRef();
	const {isOpen} = useSelector(selectModal);
	const dispatch = useDispatch();

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

	const clickCancle = () => {
		dispatch(closeModal());
	};

	const onClickDelete = () => {
		localStorage.clear();
		// eslint-disable-next-line
		location.reload();
	};

	return (
		<S.ConfirmContainer ref={modalRef}>
			<S.ConfirmContent>
				<S.ConfirmText>정말로 로그아웃하시겠습니까?</S.ConfirmText>
				<S.ButtonBox>
					<S.ConfirmButton bgcolor="white" onClick={clickCancle}>
						취소
					</S.ConfirmButton>
					<S.ConfirmButton color="white" border="none" hover="#6893dd" onClick={onClickDelete}>
						로그아웃
					</S.ConfirmButton>
				</S.ButtonBox>
			</S.ConfirmContent>
		</S.ConfirmContainer>
	);
}

export default LogoutConfirmModal;
