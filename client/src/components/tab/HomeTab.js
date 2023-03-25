import * as S from '../style/HomeStyle';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ClockIcon from '../../utils/ClockIcon';
import PhoneIcon from '../../utils/PhoneIcon';
import ReviewIcon from '../../utils/ReviewIcon';
import { IoHeartOutline, IoHeart } from 'react-icons/io5';
import useComment from '../../hooks/useComment';
import useShopLike from '../../hooks/useShopLike';
import { selectShop } from '../../modules/redux/shopSlice';
import { selectUser } from '../../modules/redux/userSlice';
import { openModal } from '../../modules/redux/modalSlice';
import { LOGINMODAL } from '../../modules/ModalContainer';
import useFetch from '../../hooks/useFetch';
import { HAIRSHOP_ENDPOINT } from '../../modules/endpoints';
import { useParams } from 'react-router-dom';
import { selectLike, setLikeId } from '../../modules/redux/likeSlice';

function HomeTab() {
  const maxLen = 63;
  const hours = '10:00 ~ 20:00';
  const dispatch = useDispatch();
  const { id } = useParams();
  const { likeCount } = useSelector(selectShop);
  const { likeId } = useSelector(selectLike);
  const shop = useFetch(`${HAIRSHOP_ENDPOINT}/${id}`);
  const [like, setLike] = useState(likeId);
  const { user } = useSelector(selectUser);
  const { show, handleToggle, comment, getDisplayComment } = useComment(
    shop.hairShopDescription,
    maxLen,
  );
  const { onLikeButtonClick } = useShopLike(shop.hairShopId, like);

  useEffect(() => {
    if (shop) {
      dispatch(setLikeId(shop.hairShopLikeId));
      setLike(shop.hairShopLikeId);
    }
  }, [shop]);

  const handleLikeClick = () => {
    if (!user) {
      dispatch(
        openModal({
          modalType: LOGINMODAL,
          isOpen: true,
        }),
      );
      return;
    }

    setLike(!like);
    onLikeButtonClick();
  };

  return (
    <S.HomeContainer>
      <S.HomeContent>
        <S.ImgContainer>
          <S.HomeImg src={shop.hairShopImage} alt="img" />
        </S.ImgContainer>
        <S.TextContainer>
          <S.Info>
            <S.ShopName>
              {shop.hairShopName}
              {like ? (
                <IoHeart className="fill" onClick={handleLikeClick} />
              ) : (
                <IoHeartOutline className="outline" onClick={handleLikeClick} />
              )}
            </S.ShopName>
            <S.ShopAddress>{shop.hairShopAddress}</S.ShopAddress>
            <S.InfoText>
              <IoHeartOutline />
              {likeCount ? likeCount.toLocaleString() : likeCount}
            </S.InfoText>
            <S.InfoText>
              <ReviewIcon /> {shop?.reviewCount?.toLocaleString() ?? shop?.reviewCount}
            </S.InfoText>
            <S.InfoText>
              <ClockIcon /> {hours}
            </S.InfoText>
            <S.InfoText>
              <PhoneIcon />
              {shop.hairShopPhone}
            </S.InfoText>
          </S.Info>
          <S.CommentBox>
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
                {comment ? getDisplayComment(comment) : '소개말이 없습니다.'}
              </S.CommentText>
            </>
          </S.CommentBox>
        </S.TextContainer>
      </S.HomeContent>
    </S.HomeContainer>
  );
}

export default HomeTab;
