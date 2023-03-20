import * as S from '../style/SBStyle';
import StylebookItem from '../stylebook/StylebookItem';
import { STYLEBOOK_ENDPOINT } from '../../modules/endpoints';
import useFetch from '../../hooks/useFetch';

export default function BestStyleList() {
  const data = useFetch(`${STYLEBOOK_ENDPOINT}/top`);

  return (
    <S.Container>
      {data &&
        data.map((style) => (
          <StylebookItem
            key={style.reviewId}
            style={style}
            src={`https://source.unsplash.com/random/${style.reviewId}`}
          />
        ))}
    </S.Container>
  );
}
