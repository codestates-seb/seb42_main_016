import * as S from './style/EmptyStyle';

function Empty({ text, onClick }) {
  return (
    <>
      <S.EmptyContainer>
        <S.Empty onClick={onClick}>{text}</S.Empty>
      </S.EmptyContainer>
    </>
  );
}

export default Empty;
