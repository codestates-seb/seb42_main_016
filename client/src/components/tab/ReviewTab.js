import * as S from '../style/HomeStyle';
import HairshopReview from '../hairshopreview/HairshopReview';

function ReviewTab() {
  return (
    <S.HomeContainer>
      <S.HomeContent>
        <HairshopReview />
      </S.HomeContent>
    </S.HomeContainer>
  );
}

export default ReviewTab;
