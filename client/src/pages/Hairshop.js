import HairshopList from '../components/hairshop/HairshopList';
import Location from '../components/hairshop/Location';
import * as S from '../components/style/ListStyle';
import { useRef, useState } from 'react';
import ScrollTopButton from '../components/ScrollTopButton';
import { HAIRSHOP_ENDPOINT } from '../modules/endpoints';
import Header from '../components/Header';
import useShopScroll from '../hooks/useShopScroll';

function Hairshop() {
  const PER_PAGE = 10;
  const scrollAreaRef = useRef(null);
  const [showButton, setShowButton] = useState(false);
  const { data, handleScroll } = useShopScroll(HAIRSHOP_ENDPOINT, PER_PAGE);

  const handleScrollEvent = (e) => {
    if (e.target.scrollTop > 500) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
    handleScroll(e);
  };

  const reduceShops = data.reduce((acc, shop) => {
    if (!acc.find((item) => item.hairShopId === shop.hairShopId)) {
      acc.push(shop);
    }
    return acc;
  }, []);

  return (
    <S.ScrollArea onScroll={handleScrollEvent} ref={scrollAreaRef}>
      <Header />
      <Location />
      {reduceShops.map((shop, index) => {
        return <HairshopList shop={shop} key={index} last={index === shop.length - 1} />;
      })}
      {showButton && <ScrollTopButton area={scrollAreaRef} />}
    </S.ScrollArea>
  );
}

export default Hairshop;
