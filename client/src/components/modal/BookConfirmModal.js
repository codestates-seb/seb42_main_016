import * as S from '../style/ModalStyle';
import { useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectModal, closeModal } from '../../modules/redux/modalSlice';
import useScroll from '../../hooks/useScroll';
import { HOME, MYRESERVE, MYPAGE } from '../../modules/routes';
import { useNavigate } from 'react-router-dom';

function BookConfirmModal() {
  const modalRef = useRef();
  const { isOpen } = useSelector(selectModal);
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
      window.location.reload();
      dispatch(closeModal());
    }
  };

  const clickHome = () => {
    navigate(HOME);
    dispatch(closeModal());
  };

  const clikeMypage = () => {
    navigate(`${MYPAGE}/${MYRESERVE}`);
    dispatch(closeModal());
  };

  return (
    <S.ConfirmContainer ref={modalRef}>
      <S.ConfirmContent>
        <S.ConfirmText>예약이 완료되었습니다.</S.ConfirmText>
        <S.ButtonBox>
          <S.ConfirmButton bgcolor="white" onClick={clickHome}>
            홈으로
          </S.ConfirmButton>
          <S.ConfirmButton color="white" border="none" hover="#6893dd" onClick={clikeMypage}>
            예약내역 확인
          </S.ConfirmButton>
        </S.ButtonBox>
      </S.ConfirmContent>
    </S.ConfirmContainer>
  );
}

export default BookConfirmModal;
