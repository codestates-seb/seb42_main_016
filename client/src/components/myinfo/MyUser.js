import * as S from '../style/MyInfoStyle';
import {MdNavigateNext} from 'react-icons/md';

function MyUser() {
	return (
		<S.UserContainer>
			<S.InfoTitle>김코딩님의 마이페이지</S.InfoTitle>
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

export default MyUser;
