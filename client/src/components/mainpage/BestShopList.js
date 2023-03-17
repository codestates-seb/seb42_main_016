import { HAIRSHOP_ENDPOINT } from '../../modules/endpoints';
import HairshopList from '../hairshop/HairshopList';
import useInfiniteScroll from '../../hooks/useInfiniteScroll';

function BestShopList() {
  const PER_PAGE = 10;
  const { data } = useInfiniteScroll(HAIRSHOP_ENDPOINT, PER_PAGE);

  return (
    <>
      {data.map((shop, index) => (
        <HairshopList
          shop={shop}
          key={shop.hairShopId}
          last={index === data.length - 1}
        />
      ))}
    </>
  );
}

export default BestShopList;
