import * as S from '../style/ModalStyle';
import { useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectModal, closeModal } from '../../modules/redux/modalSlice';
import useScroll from '../../hooks/useScroll';
import useAxios from '../../hooks/useAxios';
import { MEMBERS_ENDPOINT } from '../../modules/endpoints';

function WithdrawConfirmModal() {
  const modalRef = useRef();
  const { isOpen } = useSelector(selectModal);
  const dispatch = useDispatch();
  const { DELETE } = useAxios();

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
    DELETE(MEMBERS_ENDPOINT);
  };

  return (
    <S.ConfirmContainer ref={modalRef}>
      <S.ConfirmContent>
        <S.ConfirmText>정말 탈퇴하시겠습니까?</S.ConfirmText>
        <S.ButtonBox>
          <S.ConfirmButton bgcolor="white" onClick={clickCancle}>
            취소
          </S.ConfirmButton>
          <S.ConfirmButton color="white" border="none" hover="#6893dd" onClick={onClickDelete}>
            탈퇴하기
          </S.ConfirmButton>
        </S.ButtonBox>
      </S.ConfirmContent>
    </S.ConfirmContainer>
  );
}

export default WithdrawConfirmModal;
