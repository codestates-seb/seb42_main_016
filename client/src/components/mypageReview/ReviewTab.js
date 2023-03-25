import * as S from '../style/ReviewStyle';
import { WRITEREVIEW, READREVIEW, MYPAGE, MYREVIEW } from '../../modules/routes';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ReviewTab() {
  const [selected, setSelected] = useState(true);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === `${MYPAGE}/${MYREVIEW}`) {
      setSelected(true);
    }
  }, [location]);

  const handleClick = () => {
    setSelected(false);
  };

  return (
    <S.TabWrap>
      <S.NavLinkReview to={WRITEREVIEW} className={selected ? 'active' : ''}>
        <div>
          <span>작성 가능한 리뷰</span>
        </div>
      </S.NavLinkReview>
      <S.NavLinkReview to={READREVIEW} onClick={handleClick}>
        <div>
          <span>작성한 리뷰</span>
        </div>
      </S.NavLinkReview>
    </S.TabWrap>
  );
}
