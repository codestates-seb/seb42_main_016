import * as S from '../style/SBStyle';
import StylebookItem from '../stylebook/StylebookItem';
import useInfiniteScroll from '../../hooks/useInfiniteScroll';
import { STYLEBOOK_ENDPOINT } from '../../modules/endpoints';

export default function BestStyleList() {
  const PER_PAGE = 3;
  const { data } = useInfiniteScroll(STYLEBOOK_ENDPOINT, PER_PAGE);

  return (
    <S.Container>
      {data.map((style) => (
        <StylebookItem
          key={style.reviewId}
          style={style}
          src={`https://source.unsplash.com/random/${style.reviewId}`}
        />
      ))}
    </S.Container>
  );
}
