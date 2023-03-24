import * as S from '../style/MyInfoStyle';
import { MdNavigateNext } from 'react-icons/md';
// import {handleOpenNickModal} from '../modal/Nick';
import { useSelector } from 'react-redux';
import { selectUser } from '../../modules/redux/userSlice';

function MyUser() {
  const { user } = useSelector(selectUser);
  return (
    <S.UserContainer>
      <S.InfoTitle>{user}님의 마이페이지</S.InfoTitle>
      <S.InfoButtonBox>
        <S.InfoButton>
          닉네임 변경 <MdNavigateNext />
        </S.InfoButton>
        <S.InfoButton>
          비밀번호 변경 <MdNavigateNext />
        </S.InfoButton>
      </S.InfoButtonBox>
    </S.UserContainer>
  );
}

// onClick={handleOpenNickModal}

export default MyUser;
