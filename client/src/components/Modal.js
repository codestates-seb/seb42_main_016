import * as S from './style/ModalStyle';
import {useRef, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {selectModal, closeModal} from '../modules/redux/modalSlice';
import useScroll from '../hooks/useScroll';

function Modal() {
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

	return (
		<S.ModalWrap ref={modalRef}>
			<S.CloseButton onClick={() => dispatch(closeModal())}>X</S.CloseButton>
			<S.Contents>
				<h1>This is a Modal Dialog</h1>
				<S.ModalForm>
					<div>This is a Modal Dialog</div>
					<div>This is a Modal Dialog</div>
					<div>This is a Modal Dialog</div>
					<div>This is a Modal Dialog</div>
					<div>This is a Modal Dialog</div>
					<div>This is a Modal Dialog</div>
					<div>This is a Modal Dialog</div>
					<div>This is a Modal Dialog</div>
					<div>This is a Modal Dialog</div>
					<div>This is a Modal Dialog</div>
					<div>This is a Modal Dialog</div>
					<div>This is a Modal Dialog</div>
					<div>This is a Modal Dialog</div>
					<div>This is a Modal Dialog</div>
					<div>This is a Modal Dialog</div>
					<div>This is a Modal Dialog</div>
					<div>This is a Modal Dialog</div>
					<div>This is a Modal Dialog</div>
					<div>This is a Modal Dialog</div>
					<div>This is a Modal Dialog</div>
					<div>This is a Modal Dialog</div>
				</S.ModalForm>
				<S.Button onClick={() => dispatch(closeModal())}>Close</S.Button>
			</S.Contents>
		</S.ModalWrap>
	);
}

export default Modal;
