import * as S from '../style/ModalStyle';
import { useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectModal, closeModal } from '../../modules/redux/modalSlice';
import { cancelReserve } from '../../modules/redux/reserveSlice';
import useScroll from '../../hooks/useScroll';
import { setSuccess } from '../../modules/redux/messageSlice';

function BookCancelModal() {
  const modalRef = useRef();
  const { isOpen, data } = useSelector(selectModal);
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

  const handleCancle = () => {
    dispatch(cancelReserve(data));
    dispatch(closeModal());
    dispatch(setSuccess('예약 취소 완료'));
  };

  return (
    <S.ConfirmContainer ref={modalRef}>
      <S.ConfirmContent>
        <S.ConfirmText>정말 예약을 취소하시겠습니까?</S.ConfirmText>
        <S.ButtonBox>
          <S.ConfirmButton bgcolor="white" onClick={clickCancle}>
            취소
          </S.ConfirmButton>
          <S.ConfirmButton color="white" border="none" hover="#6893dd" onClick={handleCancle}>
            확인
          </S.ConfirmButton>
        </S.ButtonBox>
      </S.ConfirmContent>
    </S.ConfirmContainer>
  );
}

export default BookCancelModal;
