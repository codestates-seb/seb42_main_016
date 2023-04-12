import { HAIRSHOP_ENDPOINT } from '../../modules/endpoints';
import HairshopList from '../hairshop/HairshopList';
import useFetch from '../../hooks/useFetch';
import Empty from '../Empty';
import { useNavigate } from 'react-router-dom';
import { HAIRSHOP } from '../../modules/routes';

function BestShopList() {
  const data = useFetch(`${HAIRSHOP_ENDPOINT}/top`);
  const navigate = useNavigate();

  return (
    <>
      {data.length ? (
        data.map((shop, index) => (
          <HairshopList shop={shop} key={shop.hairShopId} last={index === data.length - 1} />
        ))
      ) : (
        <Empty
          text={'지난 24시간 동안 등록된 좋아요가 없습니다. 미용실 좋아요를 눌러주세요.'}
          onClick={() => navigate(HAIRSHOP)}
        />
      )}
    </>
  );
}

export default BestShopList;
