import * as S from '../style/SBStyle';
import StylebookItem from '../stylebook/StylebookItem';

export default function BestStyleList() {
  const styles = [...Array(3).keys()];
  return (
    <S.Container>
      {styles.map((style) => (
        <StylebookItem
          key={style}
          src={`https://source.unsplash.com/random/${style}`}
        />
      ))}
    </S.Container>
  );
}
