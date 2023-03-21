import * as S from '../style/ShopRevewStyle';
import img from '../../utils/sample.jpeg';
import moment from 'moment/moment';
import 'moment/locale/ko';

function ShopReview({ item, last }) {
  const now = moment().toDate();
  const displayCreatedAt = () => {
    let startTime = moment(item.createdAt).toDate();
    let diffTime = parseInt(now - startTime);

    if (diffTime < 60000) {
      return moment(startTime).locale('ko').format('방금 전');
    } else if (diffTime < 86400000 * 7 * 1000) {
      return moment(startTime).locale('ko').fromNow();
    } else {
      return moment(startTime).locale('ko').format('YYYY년 MM월 DD일');
    }
  };

  return (
    <S.Container last={last}>
      <S.Content>
        <S.ReviewWrapper>
          <S.ImgReview>
            <img src={img} alt="review" />
          </S.ImgReview>
          <S.TextWrapper>
            <S.TextReview>{item.reviewText}</S.TextReview>
            <S.ReviewDate>{displayCreatedAt()}</S.ReviewDate>
          </S.TextWrapper>
        </S.ReviewWrapper>
      </S.Content>
    </S.Container>
  );
}

export default ShopReview;
