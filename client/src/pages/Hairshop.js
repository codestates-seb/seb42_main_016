import HairshopList from '../components/hairshop/HairshopList';
import Location from '../components/hairshop/Location';
import useInfiniteScroll from '../hooks/useInfiniteScroll';
import * as S from '../components/style/ListStyle';
import { useRef, useState } from 'react';
import ScrollTopButton from '../components/ScrollTopButton';
import { HAIRSHOP_ENDPOINT } from '../modules/endpoints';
import Header from '../components/Header';

function Hairshop() {
  const PER_PAGE = 3;
  const { data, loading, handleScroll } = useInfiniteScroll(
    HAIRSHOP_ENDPOINT,
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
    <S.ScrollArea onScroll={handleScrollEvent} ref={scrollAreaRef}>
      <Header />
      <Location />
      {data.map((shop) => {
        return <HairshopList shop={shop} key={shop.hairShopId} />;
      })}
      {loading && <div>Loading...</div>}
      {showButton && <ScrollTopButton area={scrollAreaRef} />}
    </S.ScrollArea>
  );
}

export default Hairshop;
