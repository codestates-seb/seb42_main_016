import * as S from '../style/SBStyle';
import StylebookItem from './StylebookItem';

function StylebookList({ data }) {
  return (
    <S.Container>
      {data.map((style) => (
        <StylebookItem
          key={style.id}
          id={style.id}
          src={`https://source.unsplash.com/random/${style.id}`}
        />
      ))}
    </S.Container>
  );
}

export default StylebookList;
