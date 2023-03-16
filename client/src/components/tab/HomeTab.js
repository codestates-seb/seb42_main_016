import {useState} from 'react';
import * as S from '../style/HomeStyle';
import img from '../../utils/img.jpeg';
import {useSelector, useDispatch} from 'react-redux';
import {selectLoading} from '../../modules/redux/loadingSlice';
import Loading from '../Loading';
import ClockIcon from '../../utils/ClockIcon';
import PhoneIcon from '../../utils/PhoneIcon';
import ReviewIcon from '../../utils/ReviewIcon';
import {IoHeartOutline, IoHeart} from 'react-icons/io5';
import {selectUser} from '../../modules/redux/userSlice';
import {openModal} from '../../modules/redux/modalSlice';
import {selectLike, setLike} from '../../modules/redux/likeSlice';

function HomeTab({data}) {
	const {loading} = useSelector(selectLoading);
	const [show, setShow] = useState(false);
	const {user} = useSelector(selectUser);
	const {like} = useSelector(selectLike);
	const dispatch = useDispatch();

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
		dispatch(setLike(!like));
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
							{data.hairShopName}
							{like ? <IoHeart className="fill" onClick={onLikeButtonClick} /> : <IoHeartOutline className="outline" onClick={onLikeButtonClick} />}
						</S.ShopName>
						<S.ShopAddress>{data.hairShopAddress}</S.ShopAddress>
						<S.InfoText>
							<IoHeartOutline />
							{data && data.likeCount ? data.likeCount.toLocaleString() : data.likeCount}
						</S.InfoText>
						<S.InfoText>
							<ReviewIcon /> {data && data.reviewCount ? data.reviewCount.toLocaleString() : data.reviewCount}
						</S.InfoText>
						<S.InfoText>
							<ClockIcon />
							10:00 ~ 19:00
						</S.InfoText>
						<S.InfoText>
							<PhoneIcon />
							{data.hairShopPhone}
						</S.InfoText>
					</S.Info>
					<S.CommentBox>
						<S.CommentTitleBox>
							<S.CommentTitle>매장 소개</S.CommentTitle>
							<S.CommentButton onClick={() => setShow(!show)}>{show ? '접기' : '더보기'}</S.CommentButton>
						</S.CommentTitleBox>
						<S.CommentText className={show ? '' : 'hide'}>
							{data && data.hairShopDescription ? (show ? data.hairShopDescription : `${data.hairShopDescription.slice(0, 63)} ...`) : ''}
						</S.CommentText>
					</S.CommentBox>
				</S.TextContainer>
			</S.HomeContent>
		</S.HomeContainer>
	);
}

export default HomeTab;
