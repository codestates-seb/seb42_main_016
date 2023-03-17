import React from 'react';
import StylebookList from '../components/stylebook/StylebookList';
import * as S from '../components/style/SBStyle';
import { REVIEW_ENDPOINT } from '../modules/endpoints';
import { useRef, useState } from 'react';
import useInfiniteScroll from '../hooks/useInfiniteScroll';
import ScrollTopButton from '../components/ScrollTopButton';

function Stylebook() {
  const PER_PAGE = 6;
  const { data, loading, handleScroll } = useInfiniteScroll(REVIEW_ENDPOINT, PER_PAGE);
  const scrollAreaRef = useRef(null);
  const [showButton, setShowButton] = useState(false);

  const handleScrollEvent = (e) => {
    if (e.target.scrollTop > 500) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
    handleScroll(e);
  };

  return (
    <S.ScrollArea onScroll={handleScrollEvent} ref={scrollAreaRef}>
      <S.StylebookWrap>
        <StylebookList data={data} />
      </S.StylebookWrap>
      {loading && <div>Loading...</div>}
      {showButton && <ScrollTopButton area={scrollAreaRef} />}
    </S.ScrollArea>
  );
}

export default Stylebook;
