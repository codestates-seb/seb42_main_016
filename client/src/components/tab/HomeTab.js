import {useParams} from 'react-router-dom';
import {useState} from 'react';
import useFetch from '../../hooks/useFetch';
import * as S from '../style/HomeStyle';
import img from '../../utils/img.jpeg';
import {useSelector, useDispatch} from 'react-redux';
import {selectLoading} from '../../modules/redux/loadingSlice';
import Loading from '../Loading';
import ClockIcon from '../../utils/ClockIcon';
import PhoneIcon from '../../utils/PhoneIcon';
import ReviewIcon from '../../utils/ReviewIcon';
import {IoHeartOutline} from 'react-icons/io5';
import {selectUser} from '../../modules/redux/userSlice';
import {openModal} from '../../modules/redux/modalSlice';

function HomeTab() {
	const {id} = useParams();
	const data = useFetch(`/hairshop/${id}`);
	const {loading} = useSelector(selectLoading);
	const [show, setShow] = useState(false);
	const {user} = useSelector(selectUser);
	const dispatch = useDispatch();

	const comment =
		'안녕하세요 1인샵 강아지미용실 입니다! 미용 중일 땐 확인이 늦어서 예약 확정이 늦어질 수 있습니다.안전하고 미용 스트레스없는 미용을 추구합니다. 이쁘고, 귀엽고, 아름답게 아이에게 맞는 스타일링을 해드립니다.안녕하세요 1인샵 강아지미용실 입니다! 미용 중일 땐 확인이 늦어서 예약 확정이 늦어질 수 있습니다.안전하고 미용 스트레스없는 미용을 추구합니다. 이쁘고, 귀엽고, 아름답게 아이에게 맞는 스타일링을 해드립니다.';

	if (loading) {
		return <Loading />;
	}

	const onLikeButtonClick = () => {
		if (!user) {
			dispatch(
				openModal({
					modalType: 'IsLoginModal',
					isOpen: true,
				})
			);
			return;
		}
		console.log(1);
	};

	return (
		<S.HomeContainer>
			<S.HomeContent>
				<S.ImgContainer>
					<S.HomeImg src={img} alt="img" />
				</S.ImgContainer>
				<S.TextContainer>
					<S.Info>
						<S.ShopName>
							{data.name}
							<IoHeartOutline className="likeButton" onClick={onLikeButtonClick} />
						</S.ShopName>
						<S.ShopAddress>{data.address}</S.ShopAddress>
						<S.InfoText>
							<IoHeartOutline />
							{data.like !== undefined ? data.like.toLocaleString() : data.like}
						</S.InfoText>
						<S.InfoText>
							<ReviewIcon /> {data.review !== undefined ? data.review.toLocaleString() : data.review}
						</S.InfoText>
						<S.InfoText>
							<ClockIcon />
							10:00 ~ 19:00
						</S.InfoText>
						<S.InfoText>
							<PhoneIcon />
							031-1234-5678
						</S.InfoText>
					</S.Info>
					<S.CommentBox>
						<S.CommentTitleBox>
							<S.CommentTitle>매장 소개</S.CommentTitle>
							<S.CommentButton onClick={() => setShow(!show)}>{show ? '접기' : '더보기'}</S.CommentButton>
						</S.CommentTitleBox>
						<S.CommentText className={show ? '' : 'hide'}>{show ? comment : `${comment.slice(0, 63)} ...`}</S.CommentText>
					</S.CommentBox>
				</S.TextContainer>
			</S.HomeContent>
		</S.HomeContainer>
	);
}

export default HomeTab;
