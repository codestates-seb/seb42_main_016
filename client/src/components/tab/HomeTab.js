import * as S from '../style/HomeStyle';
import img from '../../utils/img.jpeg';
import { useSelector } from 'react-redux';
import { selectLoading } from '../../modules/redux/loadingSlice';
import Loading from '../Loading';
import ClockIcon from '../../utils/ClockIcon';
import PhoneIcon from '../../utils/PhoneIcon';
import ReviewIcon from '../../utils/ReviewIcon';
import { IoHeartOutline, IoHeart } from 'react-icons/io5';
import { selectLike } from '../../modules/redux/likeSlice';
import useComment from '../../hooks/useComment';
import useShopLike from '../../hooks/useShopLike';
import { selectShop } from '../../modules/redux/shopSlice';

function HomeTab() {
  const maxLen = 63;
  const { loading } = useSelector(selectLoading);
  const { like } = useSelector(selectLike);
  const shop = useSelector(selectShop);
  const { show, handleToggle, comment, getDisplayComment } = useComment(
    shop.hairShopDescription,
    maxLen,
  );
  const { onLikeButtonClick } = useShopLike(shop.hairShopId);

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
              {shop.hairShopName}
              {like ? (
                <IoHeart className="fill" onClick={onLikeButtonClick} />
              ) : (
                <IoHeartOutline className="outline" onClick={onLikeButtonClick} />
              )}
            </S.ShopName>
            <S.ShopAddress>{shop.hairShopAddress}</S.ShopAddress>
            <S.InfoText>
              <IoHeartOutline />
              {shop?.likeCount?.toLocaleString() ?? shop?.likeCount}
            </S.InfoText>
            <S.InfoText>
              <ReviewIcon /> {shop?.reviewCount?.toLocaleString() ?? shop?.reviewCount}
            </S.InfoText>
            <S.InfoText>
              <ClockIcon />
              10:00 ~ 19:00
            </S.InfoText>
            <S.InfoText>
              <PhoneIcon />
              {shop.hairShopPhone}
            </S.InfoText>
          </S.Info>
          <S.CommentBox>
            {shop && comment ? (
              <>
                <S.CommentTitleBox>
                  <S.CommentTitle>매장 소개</S.CommentTitle>
                  {comment.length > maxLen && (
                    <S.CommentButton onClick={handleToggle}>
                      {show ? '접기' : '더보기'}
                    </S.CommentButton>
                  )}
                </S.CommentTitleBox>
                <S.CommentText className={show ? '' : 'hide'}>
                  {getDisplayComment(comment)}
                </S.CommentText>
              </>
            ) : null}
          </S.CommentBox>
        </S.TextContainer>
      </S.HomeContent>
    </S.HomeContainer>
  );
}

export default HomeTab;
