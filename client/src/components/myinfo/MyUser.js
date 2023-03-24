import * as S from '../style/MyInfoStyle';
import { MdNavigateNext } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { openModal } from '../../modules/redux/modalSlice';
import { NICKMODAL } from '../../modules/ModalContainer';
import { MEMBERS_ENDPOINT } from '../../modules/endpoints';
import useAuth from '../../hooks/useAuth';
import { selectUser, setNick } from '../../modules/redux/userSlice';
import { useEffect } from 'react';

function MyUser() {
  const dispatch = useDispatch();
  const data = useAuth(MEMBERS_ENDPOINT);
  const { nick } = useSelector(selectUser);

  useEffect(() => {
    dispatch(setNick(data.nickname));
  }, [data]);

  const onClickNick = () => {
    dispatch(
      openModal({
        modalType: NICKMODAL,
        isOpen: true,
      }),
    );
  };

  return (
    <S.UserContainer>
      <S.InfoTitle>{nick}님의 마이페이지</S.InfoTitle>
      <S.InfoButtonBox>
        <S.InfoButton onClick={onClickNick}>
          닉네임 변경 <MdNavigateNext />
        </S.InfoButton>
        <S.InfoButton>
          비밀번호 변경 <MdNavigateNext />
        </S.InfoButton>
      </S.InfoButtonBox>
    </S.UserContainer>
  );
}

export default MyUser;
