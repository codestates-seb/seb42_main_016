import HairshopList from '../components/hairshop/HairshopList';
import Location from '../components/hairshop/Location';
import * as S from '../components/style/ListStyle';
import { useRef, useState } from 'react';
import ScrollTopButton from '../components/ScrollTopButton';
import { HAIRSHOP_ENDPOINT } from '../modules/endpoints';
import Header from '../components/Header';
import useShopScroll from '../hooks/useShopScroll';
import { useSelector } from 'react-redux';
import { selectLoading } from '../modules/redux/loadingSlice';
import Loading from '../components/Loading';

function Hairshop() {
  const scrollAreaRef = useRef(null);
  const [showButton, setShowButton] = useState(false);
  const PER_PAGE = 10;
  const { data, lastShopRef } = useShopScroll(HAIRSHOP_ENDPOINT, PER_PAGE);
  const { loading } = useSelector(selectLoading);

  const handleScrollEvent = (e) => {
    if (e.target.scrollTop > 500) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  return (
    <S.ScrollArea onScroll={handleScrollEvent} ref={scrollAreaRef}>
      <Header />
      <Location />
      {data.map((shop, index) => {
        return <HairshopList shop={shop} key={shop.hairShopId} last={index === shop.length - 1} />;
      })}
      <div ref={lastShopRef}></div>
      {showButton && <ScrollTopButton area={scrollAreaRef} />}
      {loading && <Loading />}
    </S.ScrollArea>
  );
}

export default Hairshop;
