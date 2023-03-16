import { useSelector } from 'react-redux';
import { selectModal } from './redux/modalSlice';
import WeightModal from '../components/modal/WeightModal';
import TypeModal from '../components/modal/TypeModal';
import DogConfirmModal from '../components/modal/DogConfirmModal';
import * as S from '../components/style/ModalStyle';
import LoginModal from '../components/modal/LoginModal';

export const WEIGHTMODAL = 'WeightModal';
export const TYPEMODAL = 'TypeModal';
export const DOGCONFIRMMODAL = 'DogConfirmModal';
export const LOGINMODAL = 'LoginModal';

const MODAL_TYPES = {
  WeightModal: WEIGHTMODAL,
  TypeModal: TYPEMODAL,
  DogConfirmModal: DOGCONFIRMMODAL,
  LoginModal: LOGINMODAL,
};

const MODAL_COMPONENTS = [
  {
    type: MODAL_TYPES.WeightModal,
    component: <WeightModal />,
  },
  {
    type: MODAL_TYPES.TypeModal,
    component: <TypeModal />,
  },
  {
    type: MODAL_TYPES.DogConfirmModal,
    component: <DogConfirmModal />,
  },
  {
    type: MODAL_TYPES.LoginModal,
    component: <LoginModal />,
  },
];

function ModalContainer() {
  const { modalType, isOpen } = useSelector(selectModal);
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
