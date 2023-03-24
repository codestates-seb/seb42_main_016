import * as S from '../style/ModalStyle';
import { useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectModal, closeModal, selectOption } from '../../modules/redux/modalSlice';
import useScroll from '../../hooks/useScroll';
import CloseIcon from '../../utils/CloseIcon';
import { TypeOption } from '../../utils/ModalOption';

function TypeModal() {
  const modalRef = useRef();
  const { isOpen, option } = useSelector(selectModal);
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
    dispatch(selectOption({ ...option, dogSpecies: e.target.innerText }));
  };

  return (
    <S.ModalWrap ref={modalRef}>
      <S.TopWrapper>
        <S.Title>견종 선택</S.Title>
        <div role="presentation" onClick={() => dispatch(closeModal())}>
          <CloseIcon />
        </div>
      </S.TopWrapper>
      <S.ModalForm>
        {TypeOption.map((item, idx) => {
          return (
            <S.ModalList className="option" key={idx} onClick={clickOption}>
              {item}
            </S.ModalList>
          );
        })}
      </S.ModalForm>
    </S.ModalWrap>
  );
}

export default TypeModal;
