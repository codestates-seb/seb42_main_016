import * as S from '../style/ModalStyle';
import {useSelector, useDispatch} from 'react-redux';
import {selectModal, closeModal, selectOption} from '../../modules/redux/modalSlice';
import useScroll from '../../hooks/useScroll';
import CloseIcon from '../../utils/CloseIcon';
import {useRef, useEffect} from 'react';
import {TypeOption} from '../../utils/ModalOption';

function Nickchange(){

	const modalRef = useRef();
	const {isOpen, option} = useSelector(selectModal);
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

	const clickOption = (e) => {
		dispatch(selectOption({...option, dogSpecies: e.target.innerText}));
	};

	return (
		<S.ModalWrap ref={modalRef}>
			<S.TopWrapper>
				<S.Title>닉네임 변경</S.Title>
				<div onClick={() => dispatch(closeModal())}>
					<CloseIcon />
				</div>
			</S.TopWrapper>
			<S.ModalForm>
				<S.input
					type="text"
					placeholder="변경학 닉네임."
					name="nickname"
					/>
			</S.ModalForm>
		</S.ModalWrap>
	);
}