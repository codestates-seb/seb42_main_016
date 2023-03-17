import * as S from '../style/SBStyle';
import StylebookItem from './StylebookItem';

function StylebookList({ data }) {
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

export default StylebookList;
