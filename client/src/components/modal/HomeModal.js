import * as S from '../style/ModalStyle';
import { useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectModal, closeModal } from '../../modules/redux/modalSlice';
import useScroll from '../../hooks/useScroll';
import CloseIcon from '../../utils/CloseIcon';
import { useNavigate } from 'react-router-dom';
import { HOME } from '../../modules/routes';

function HomeModal() {
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
      dispatch(closeModal());
    }
  };

  const clickHome = () => {
    navigate(HOME);
    dispatch(closeModal());
  };

  return (
    <S.ConfirmContainer ref={modalRef}>
      <S.ConfirmContent>
        <div
          role="button"
          tabIndex="0"
          aria-label="Close"
          onClick={() => dispatch(closeModal())}
          onKeyDown={(event) => {
            if (event.key === 'Enter' || event.key === ' ') {
              dispatch(closeModal());
            }
          }}>
          <CloseIcon />
        </div>
        <S.ConfirmText>그동안 이용해주셔서 감사합니다.</S.ConfirmText>
        <S.ButtonBox>
          <S.ConfirmButton color="white" border="none" hover="#6893dd" onClick={clickHome}>
            홈으로 가기
          </S.ConfirmButton>
        </S.ButtonBox>
      </S.ConfirmContent>
    </S.ConfirmContainer>
  );
}

export default HomeModal;
