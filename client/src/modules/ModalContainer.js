import { useSelector } from 'react-redux';
import { selectModal } from './redux/modalSlice';
import WeightModal from '../components/modal/WeightModal';
import TypeModal from '../components/modal/TypeModal';
import DogConfirmModal from '../components/modal/DogConfirmModal';
import * as S from '../components/style/ModalStyle';
import LoginModal from '../components/modal/LoginModal';
import HomeModal from '../components/modal/HomeModal';
import WithdrawConfirmModal from '../components/modal/WithdrawConfirmModal';
import LogoutConfirmModal from '../components/modal/LogoutConfirmModal';
import ReviewModal from '../components/modal/ReviewModal';
import ReviewEditModal from '../components/modal/ReviewEditModal';
import BookConfirmModal from '../components/modal/BookConfirmModal';
import ReviewConfirmModal from '../components/modal/ReviewConfirmModal';
import BookCancelModal from '../components/modal/BookCancelModal';
import NickModal from '../components/modal/NickModal';
import PasswordModal from '../components/modal/PasswordModal';

export const WEIGHTMODAL = 'WeightModal';
export const TYPEMODAL = 'TypeModal';
export const DOGCONFIRMMODAL = 'DogConfirmModal';
export const LOGINMODAL = 'LoginModal';
export const HOMEMODAL = 'HomeModal';
export const WITHDRAWCONFIRMMODAL = 'WithdrawConfirmModal';
export const LOGOUTCONFIRMMODAL = 'LogoutConfirmModal';
export const REVIEWMODAL = 'ReveiwModal';
export const REVIEWEDITMODAL = 'ReviewEditModal';
export const BOOKCONFIRMMODAL = 'BookConfirmModal';
export const REVIEWCONFIRMMODAL = 'ReviewConfirmModal';
export const BOOKCANCELMODAL = 'BookCancelModal';
export const NICKMODAL = 'NickModal';
export const PASSWORDMODAL = 'PasswordModal';

const MODAL_TYPES = {
  WeightModal: WEIGHTMODAL,
  TypeModal: TYPEMODAL,
  DogConfirmModal: DOGCONFIRMMODAL,
  LoginModal: LOGINMODAL,
  HomeModal: HOMEMODAL,
  WithdrawConfirmModal: WITHDRAWCONFIRMMODAL,
  LogoutConfirmModal: LOGOUTCONFIRMMODAL,
  ReviewModal: REVIEWMODAL,
  ReviewEditModal: REVIEWEDITMODAL,
  BookConfirmModal: BOOKCONFIRMMODAL,
  ReviewConfirmModal: REVIEWCONFIRMMODAL,
  BookCancelModal: BOOKCANCELMODAL,
  NickModal: NICKMODAL,
  PasswordModal: PASSWORDMODAL,
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
  {
    type: MODAL_TYPES.HomeModal,
    component: <HomeModal />,
  },
  {
    type: MODAL_TYPES.WithdrawConfirmModal,
    component: <WithdrawConfirmModal />,
  },
  {
    type: MODAL_TYPES.LogoutConfirmModal,
    component: <LogoutConfirmModal />,
  },
  {
    type: MODAL_TYPES.ReviewModal,
    component: <ReviewModal />,
  },
  {
    type: MODAL_TYPES.ReviewEditModal,
    component: <ReviewEditModal />,
  },
  {
    type: MODAL_TYPES.BookConfirmModal,
    component: <BookConfirmModal />,
  },
  {
    type: MODAL_TYPES.ReviewConfirmModal,
    component: <ReviewConfirmModal />,
  },
  {
    type: MODAL_TYPES.BookCancelModal,
    component: <BookCancelModal />,
  },
  {
    type: MODAL_TYPES.NickModal,
    component: <NickModal />,
  },
  {
    type: MODAL_TYPES.PasswordModal,
    component: <PasswordModal />,
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
