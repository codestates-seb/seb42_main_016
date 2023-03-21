import * as S from '../style/HomeStyle';
import ShopReview from '../hairshopreview/ShopReview';
import useFetch from '../../hooks/useFetch';
import { REVIEW_ENDPOINT } from '../../modules/endpoints';
import TopButton from '../stylebook/TopButton';
import Pagenation from '../hairshopreview/Pagenation';
import { useSelector } from 'react-redux';
import { selectShop } from '../../modules/redux/shopSlice';
import Empty from '../Empty';

function ReviewTab() {
  const shop = useSelector(selectShop);
  const data = useFetch(REVIEW_ENDPOINT);
  const minLen = 9;

  console.log(shop.reviewCount);

  return (
    <S.HomeContainer>
      <S.HomeContent>
        {shop.reviewCount ? (
          <>
            <S.CountText>리뷰 {shop.reviewCount} 개</S.CountText>
            {data.map((item, index) => (
              <ShopReview key={item.reviewId} item={item} last={index === data.length - 1} />
            ))}
          </>
        ) : (
          <Empty text="작성된 리뷰가 없습니다." />
        )}
      </S.HomeContent>
      {shop.reviewCount > minLen ? <Pagenation /> : ''}
      <TopButton />
    </S.HomeContainer>
  );
}

export default ReviewTab;
