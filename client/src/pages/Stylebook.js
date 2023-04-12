import { useRef, useState } from 'react';
import StylebookList from '../components/stylebook/StylebookList';
import * as S from '../components/style/SBStyle';
import { STYLEBOOK_ENDPOINT } from '../modules/endpoints';
import useInfiniteScroll from '../hooks/useInfiniteScroll';
import ScrollTopButton from '../components/ScrollTopButton';
import Header from '../components/Header';

function Stylebook() {
  const PER_PAGE = 9;

  const { data, lastRef } = useInfiniteScroll(STYLEBOOK_ENDPOINT, PER_PAGE);

  const scrollAreaRef = useRef(null);
  const [showButton, setShowButton] = useState(false);

  const handleScrollEvent = (e) => {
    if (e.target.scrollTop > 500) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  return (
    <S.StyleScrollArea onScroll={handleScrollEvent} ref={scrollAreaRef}>
      <Header />
      <S.CommentWrapper>
        <S.CommentStyle>
          <S.CommentTitle>강아지에게 어울리는 스타일을 찾아보세요</S.CommentTitle>
          <S.CommentSub>
            스타일북에는 전체 미용실의 리뷰 사진들이 모여있습니다. <br />
            마음에 드는 스타일에 좋아요를 누르고, 가위 아이콘을 눌러 해당 미용실로 바로
            이동해보세요.
          </S.CommentSub>
        </S.CommentStyle>
      </S.CommentWrapper>
      <S.StylebookWrap>
        <StylebookList data={data} />
        {showButton && <ScrollTopButton area={scrollAreaRef} />}
        <div ref={lastRef}></div>
      </S.StylebookWrap>
    </S.StyleScrollArea>
  );
}

export default Stylebook;
