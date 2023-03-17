import { useRef, useState } from 'react';
import StylebookList from '../components/stylebook/StylebookList';
import * as S from '../components/style/SBStyle';
import { STYLEBOOK_ENDPOINT } from '../modules/endpoints';
import useInfiniteScroll from '../hooks/useInfiniteScroll';
import ScrollTopButton from '../components/ScrollTopButton';
import Header from '../components/Header';

function Stylebook() {
  const PER_PAGE = 6;
  const { data, loading, handleScroll } = useInfiniteScroll(
    STYLEBOOK_ENDPOINT,
    PER_PAGE
  );
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
    <S.StyleScrollArea onScroll={handleScrollEvent} ref={scrollAreaRef}>
      <Header />
      <S.StylebookWrap>
        <StylebookList data={data} />
        {loading && <div>Loading...</div>}
        {showButton && <ScrollTopButton area={scrollAreaRef} />}
      </S.StylebookWrap>
    </S.StyleScrollArea>
  );
}

export default Stylebook;
