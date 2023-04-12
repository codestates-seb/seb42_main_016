import * as S from '../style/SBStyle';
import StylebookItem from '../stylebook/StylebookItem';
import { STYLEBOOK_ENDPOINT } from '../../modules/endpoints';
import useFetch from '../../hooks/useFetch';
import Empty from '../Empty';
import { useNavigate } from 'react-router-dom';
import { STYLEBOOK } from '../../modules/routes';

export default function BestStyleList() {
  const data = useFetch(`${STYLEBOOK_ENDPOINT}/top`);
  const navigate = useNavigate();

  return (
    <S.StylebookWrap>
      <S.Container>
        {data ? (
          data.map((style) => (
            <StylebookItem key={style.reviewId} style={style} src={style.reviewImage} />
          ))
        ) : (
          <Empty
            text={'지난 24시간 동안 등록된 좋아요가 없습니다. 스타일 좋아요를 눌러주세요.'}
            onClick={() => navigate(STYLEBOOK)}
          />
        )}
      </S.Container>
    </S.StylebookWrap>
  );
}
