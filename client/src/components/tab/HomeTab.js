import * as S from '../style/HomeStyle';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ClockIcon from '../../utils/ClockIcon';
import PhoneIcon from '../../utils/PhoneIcon';
import ReviewIcon from '../../utils/ReviewIcon';
import { IoHeartOutline, IoHeart } from 'react-icons/io5';
import useComment from '../../hooks/useComment';
import useShopLike from '../../hooks/useShopLike';
import { selectUser } from '../../modules/redux/userSlice';
import { openModal } from '../../modules/redux/modalSlice';
import { LOGINMODAL } from '../../modules/ModalContainer';
import { selectLike, setLikeId, setLikeCount } from '../../modules/redux/likeSlice';
import { selectShop } from '../../modules/redux/shopSlice';

function HomeTab() {
  const maxLen = 63;
  const hours = '10:00 ~ 20:00';
  const dispatch = useDispatch();
  const shop = useSelector(selectShop);
  const { likeId, likeCount } = useSelector(selectLike);
  const [like, setLike] = useState(likeId);
  const { user } = useSelector(selectUser);
  const { show, handleToggle, comment, getDisplayComment } = useComment(
    shop.hairShopDescription,
    maxLen,
  );
  const { onLikeButtonClick } = useShopLike(shop.hairShopId, like);

  useEffect(() => {
    if (shop) {
      dispatch(setLikeCount(shop.likeCount));
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

  const url = shop.hairShopImage
    ? shop.hairShopImage.replace('http', 'https')
    : '/assets/ShopImg.png';

  return (
    <S.HomeContainer>
      <S.HomeContent className="flex">
        <S.ImgContainer>
          <S.HomeImg src={url} alt="img" />
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
              {shop.hairShopPhone ? shop.hairShopPhone : '등록된 연락처가 없습니다.'}
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
