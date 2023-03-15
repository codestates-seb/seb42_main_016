import * as S from '../style/HomeStyle';
import img from '../../utils/img.jpeg';
import {useSelector} from 'react-redux';
import {selectLoading} from '../../modules/redux/loadingSlice';
import Loading from '../Loading';
import ClockIcon from '../../utils/ClockIcon';
import PhoneIcon from '../../utils/PhoneIcon';
import ReviewIcon from '../../utils/ReviewIcon';
import {IoHeartOutline, IoHeart} from 'react-icons/io5';
import {selectLike} from '../../modules/redux/likeSlice';
import useComment from '../../hooks/useComment';
import useShopLike from '../../hooks/useShopLike';

function HomeTab({data}) {
	const {loading} = useSelector(selectLoading);
	const {like} = useSelector(selectLike);
	const {show, handleToggle, comment, getDisplayComment} = useComment(data.hairShopDescription);
	const {onLikeButtonClick} = useShopLike(data.hairShopId);

	if (loading) {
		return <Loading />;
	}

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
						{data && comment ? (
							<>
								<S.CommentTitleBox>
									<S.CommentTitle>매장 소개</S.CommentTitle>
									{comment.length > 62 && <S.CommentButton onClick={handleToggle}>{show ? '접기' : '더보기'}</S.CommentButton>}
								</S.CommentTitleBox>
								<S.CommentText className={show ? '' : 'hide'}>{getDisplayComment(comment)}</S.CommentText>
							</>
						) : null}
					</S.CommentBox>
				</S.TextContainer>
			</S.HomeContent>
		</S.HomeContainer>
	);
}

export default HomeTab;
