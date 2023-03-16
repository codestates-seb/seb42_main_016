import * as S from '../style/ModalStyle';
import {useDispatch} from 'react-redux';
import {closeModal} from '../../modules/redux/modalSlice';
import useScroll from '../../hooks/useScroll';
import CloseIcon from '../../utils/CloseIcon';
import {useRef} from 'react';
import {openModal} from '../../modules/redux/modalSlice';

function NickModal(){

	const modalRef = useRef();
	const dispatch = useDispatch();

	useScroll();

	// const handleOpenNickModal = () => {
	// 	dispatch(
	// 		openModal({
	// 			modalType: 'NickModal',
	// 			isOpen: true,
	// 		})
	// 	);
	// };

	return (
		<S.ModalWrap ref={modalRef}>
			<S.TopWrapper>
				<S.Title>닉네임 변경</S.Title>
				<div onClick={() => dispatch(closeModal())}>
					<CloseIcon />
				</div>
			</S.TopWrapper>
			<S.ModalForm>
			</S.ModalForm>
		</S.ModalWrap>
	);
}

export default NickModal;