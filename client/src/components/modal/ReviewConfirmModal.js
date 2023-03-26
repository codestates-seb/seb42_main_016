import * as S from '../style/ModalStyle';
import { useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectModal, closeModal } from '../../modules/redux/modalSlice';
import { deleteReview } from '../../modules/redux/reviewsSlice';
import useScroll from '../../hooks/useScroll';

function ReviewConfirmModal() {
  const modalRef = useRef();
  const { isOpen, data } = useSelector(selectModal);
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteReview(data));
    dispatch(closeModal());
  };
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
    dispatch(handleDelete());
  };

  return (
    <S.ConfirmContainer ref={modalRef}>
      <S.ConfirmContent>
        <S.ConfirmText>정말 삭제하시겠습니까?</S.ConfirmText>
        <S.ButtonBox>
          <S.ConfirmButton bgcolor="white" onClick={clickCancle}>
            취소
          </S.ConfirmButton>
          <S.ConfirmButton color="white" border="none" hover="#6893dd" onClick={onClickDelete}>
            삭제하기
          </S.ConfirmButton>
        </S.ButtonBox>
      </S.ConfirmContent>
    </S.ConfirmContainer>
  );
}

export default ReviewConfirmModal;
