import * as S from '../style/ModalStyle';
import { useRef, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectModal, closeModal } from '../../modules/redux/modalSlice';
import useScroll from '../../hooks/useScroll';
import CloseIcon from '../../utils/CloseIcon';
import usePassword from '../../hooks/usePassword';
import useConfirmPassword from '../../hooks/useConfirmPassword';
import { MEMBERS_ENDPOINT } from '../../modules/endpoints';
import { logout } from '../../modules/redux/userSlice';
import API from '../../modules/API';
import { setError, setSuccess } from '../../modules/redux/messageSlice';

function PasswordModal() {
  const modalRef = useRef();
  const { isOpen } = useSelector(selectModal);
  const dispatch = useDispatch();
  const [value, setValue] = useState({
    prevPassword: '',
    password: '',
    confirmPassword: '',
  });

  const { prevPassword, password, confirmPassword } = value;
  const { validPrevPasswordText, isValidPrevPassword } = usePassword(prevPassword);
  const { validPasswordText, isValidPassword } = usePassword(password);
  const { validConfirmPasswordText, isValidConfirmPassword } = useConfirmPassword(
    confirmPassword,
    password,
  );
  const isNew = prevPassword !== password;
  const token = localStorage.getItem('accessToken');
  const refresh = localStorage.getItem('refresh');

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

  const clickEdit = () => {
    API.patch(
      `${MEMBERS_ENDPOINT}/password`,
      { prevPassword, password },
      {
        headers: {
          Authorization: token,
          Refresh: refresh,
        },
      },
    )
      .then(() => {
        dispatch(setSuccess('비밀번호 변경완료'));
        dispatch(logout());
      })
      .catch((err) => {
        dispatch(setError(err.response.data.message));
      })
      .finally(() => {
        dispatch(closeModal());
      });
  };

  const onChange = (e) => {
    const changeValue = {
      ...value,
      [e.target.name]: e.target.value,
    };
    setValue(changeValue);
  };

  return (
    <S.ConfirmContainer ref={modalRef} className="password">
      <S.TopWrapper>
        <S.Title>비밀번호 변경</S.Title>
        <div role="presentation" onClick={() => dispatch(closeModal())}>
          <CloseIcon />
        </div>
      </S.TopWrapper>
      <S.EditContainer className="password">
        <S.EditLabelContainer>
          <S.EditLabel>기존 비밀번호</S.EditLabel>
        </S.EditLabelContainer>
        <S.EditInput
          name="prevPassword"
          type="password"
          value={prevPassword}
          onChange={onChange}
          valid={!isValidPrevPassword}
          placeholder="기존 비밀번호를 입력해주세요."
        />
        <S.EditValid>{validPrevPasswordText}</S.EditValid>
        <S.EditLabelContainer>
          <S.EditLabel>새로운 비밀번호</S.EditLabel>
        </S.EditLabelContainer>
        <S.EditInput
          name="password"
          type="password"
          value={password}
          onChange={onChange}
          valid={!isValidPassword}
          placeholder="새로운 비밀번호를 입력해주세요."
        />
        <S.EditValid>{validPasswordText}</S.EditValid>
        <S.EditLabelContainer>
          <S.EditLabel>비밀번호 확인</S.EditLabel>
        </S.EditLabelContainer>
        <S.EditInput
          name="confirmPassword"
          type="password"
          value={confirmPassword}
          onChange={onChange}
          valid={!isValidConfirmPassword}
          placeholder="비밀번호를 다시 입력해주세요."
        />
        <S.EditValid>{validConfirmPasswordText}</S.EditValid>
      </S.EditContainer>
      <S.ButtonBox className="edit">
        <S.ConfirmButton
          color="white"
          border="none"
          hover="#6893dd"
          className="edit"
          onClick={clickEdit}
          disabled={!(prevPassword.length && password.length && confirmPassword.length && isNew)}>
          변경하기
        </S.ConfirmButton>
      </S.ButtonBox>
    </S.ConfirmContainer>
  );
}

export default PasswordModal;
