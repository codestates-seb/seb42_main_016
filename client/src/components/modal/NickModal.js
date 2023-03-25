import * as S from '../style/ModalStyle';
import { useRef, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectModal, closeModal } from '../../modules/redux/modalSlice';
import useScroll from '../../hooks/useScroll';
import CloseIcon from '../../utils/CloseIcon';
import { selectUser, setNick } from '../../modules/redux/userSlice';
import useNickname from '../../hooks/useNickname';
import { MEMBERS_ENDPOINT } from '../../modules/endpoints';
import { setError } from '../../modules/redux/errorSlice';
import API from '../../modules/API';

function NickModal() {
  const modalRef = useRef();
  const { isOpen } = useSelector(selectModal);
  const dispatch = useDispatch();
  const { nick } = useSelector(selectUser);
  const [nickname, setNickname] = useState(nick);
  const { validNicknameText, isValidNickname } = useNickname(nickname);
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
      `${MEMBERS_ENDPOINT}/nickname`,
      { nickname },
      {
        headers: {
          Authorization: token,
          Refresh: refresh,
        },
      },
    )
      .then((res) => {
        console.log('변경완료', res.data);
        dispatch(setNick(res.data.nickname));
      })
      .catch((err) => {
        dispatch(setError('닉네임 변경에 실패했습니다.'));
        console.log(err);
      })
      .finally(() => {
        dispatch(closeModal());
      });
  };

  return (
    <S.ConfirmContainer ref={modalRef}>
      <S.TopWrapper>
        <S.Title>닉네임 변경</S.Title>
        <div role="presentation" onClick={() => dispatch(closeModal())}>
          <CloseIcon />
        </div>
      </S.TopWrapper>
      <S.EditContainer>
        <S.EditInput
          type="text"
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
          valid={!isValidNickname}
          placeholder="변경할 닉네임을 입력해주세요."
        />
        <S.EditValid>{validNicknameText}</S.EditValid>
      </S.EditContainer>
      <S.ButtonBox className="edit">
        <S.ConfirmButton
          color="white"
          border="none"
          hover="#6893dd"
          className="edit"
          onClick={clickEdit}
          disabled={!nickname.length}>
          변경하기
        </S.ConfirmButton>
      </S.ButtonBox>
    </S.ConfirmContainer>
  );
}

export default NickModal;
