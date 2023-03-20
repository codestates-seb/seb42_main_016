import { HAIRSHOP_ENDPOINT } from '../../modules/endpoints';
import HairshopList from '../hairshop/HairshopList';
import useFetch from '../../hooks/useFetch';

function BestShopList() {
  const data = useFetch(`${HAIRSHOP_ENDPOINT}/top`);

  return (
    <>
      {data.map((shop, index) => (
        <HairshopList shop={shop} key={shop.hairShopId} last={index === data.length - 1} />
      ))}
    </>
  );
}

export default BestShopList;
