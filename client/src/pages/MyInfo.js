import MyUser from '../components/myinfo/MyUser';
import MyDogContent from '../components/myinfo/MyDogContent';
import * as S from '../components/style/DogStyle';
import {useNavigate} from 'react-router-dom';
import MyReserveContent from '../components/myinfo/MyReserveContent';
import MyReviewContent from '../components/myinfo/MyReviewContent';
import Withdraw from '../components/myinfo/Withdraw';
import useScrollTop from '../hooks/useScrollTop';

function MyInfo() {
	const navigate = useNavigate();

	useScrollTop();

	return (
		<S.Container>
			<S.ContentBox>
				<S.Content>
					<MyUser />
					<MyReserveContent title="예약" text="예약 내역이 없습니다." onClick={() => navigate('/mypage/reserve')} />
					<MyReviewContent title="리뷰" text="작성한 리뷰가 없습니다." onClick={() => navigate('/mypage/review')} />
					<MyDogContent title="강아지" text="등록된 강아지가 없습니다." onClick={() => navigate('/mypage/mydog')} />
					<Withdraw />
				</S.Content>
			</S.ContentBox>
		</S.Container>
	);
}

export default MyInfo;
