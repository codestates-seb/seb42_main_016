import useFetch from '../../hooks/useFetch';
import { HAIRSHOP_ENDPOINT } from '../../modules/endpoints';
import HairshopList from '../hairshop/HairshopList';

function BestShopList() {
  const maxLen = 10;
  const data = useFetch(HAIRSHOP_ENDPOINT);
  const filteredData = data?.filter(({ hairShopId }) => hairShopId <= maxLen);
  console.log(filteredData);

  return (
    <>
      {filteredData.map((shop, index) => (
        <HairshopList
          shop={shop}
          key={shop.hairShopId}
          last={index === filteredData.length - 1}
        />
      ))}
    </>
  );
}

export default BestShopList;
