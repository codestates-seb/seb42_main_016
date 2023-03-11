import {useSelector} from 'react-redux';
import {selectModal} from './redux/modalSlice';
import Modal from '../components/Modal';
import * as S from '../components/style/ModalStyle';

const MODAL_TYPES = {
	// LoginModal: 'LoginModal',
	BasicModal: 'BasicModal',
};

const MODAL_COMPONENTS = [
	// {
	// 	type: MODAL_TYPES.LoginModal,
	// 	component: <FirstModal />,
	// },
	{
		type: MODAL_TYPES.BasicModal,
		component: <Modal />,
	},
];

function ModalContainer() {
	// modal type을 string 형태로 받습니다.
	const {modalType, isOpen} = useSelector(selectModal);
	if (!isOpen) return;

	const findModal = MODAL_COMPONENTS.find((modal) => {
		return modal.type === modalType;
	});

	const renderModal = () => {
		return findModal.component;
	};

	return <S.Overlay>{renderModal()}</S.Overlay>;
}

export default ModalContainer;
