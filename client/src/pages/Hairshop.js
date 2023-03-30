import HairshopList from '../components/hairshop/HairshopList';
import Location from '../components/hairshop/Location';
import * as S from '../components/style/ListStyle';
import { useRef, useState, useEffect } from 'react';
import ScrollTopButton from '../components/ScrollTopButton';
import { HAIRSHOP_ENDPOINT } from '../modules/endpoints';
import Header from '../components/Header';
import useShopScroll from '../hooks/useShopScroll';
import { useSelector, useDispatch } from 'react-redux';
import { selectLoading } from '../modules/redux/loadingSlice';
import Loading from '../components/Loading';
import { selectScroll, setList } from '../modules/redux/scrollSlice';

function Hairshop() {
  const scrollAreaRef = useRef(null);
  const [showButton, setShowButton] = useState(false);
  const { scroll, list } = useSelector(selectScroll);
  const PER_PAGE = list.length ? list.length : 10;
  const { data, handleScroll } = useShopScroll(HAIRSHOP_ENDPOINT, PER_PAGE);
  const { loading } = useSelector(selectLoading);
  const dispatch = useDispatch();

  const handleScrollEvent = (e) => {
    if (e.target.scrollTop > 500) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
    handleScroll(e);
  };

  useEffect(() => {
    dispatch(setList(data));
    setTimeout(() => {
      scrollAreaRef.current.scrollTo({
        top: scroll,
        behavior: 'smooth',
      });
    }, 100);
  }, [data]);

  const mapList = list ? list : data;

  return (
    <S.ScrollArea onScroll={handleScrollEvent} ref={scrollAreaRef}>
      <Header />
      <Location />
      {mapList.map((shop, index) => {
        return <HairshopList shop={shop} key={shop.hairShopId} last={index === shop.length - 1} />;
      })}
      {showButton && <ScrollTopButton area={scrollAreaRef} />}
      {loading && <Loading />}
    </S.ScrollArea>
  );
}

export default Hairshop;
