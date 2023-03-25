import * as S from '../style/ListStyle';
import useGeolocation from '../../hooks/useGeolocation';
import { memo, useEffect } from 'react';
import { selectLocation, setLat, setLng } from '../../modules/redux/locationSlice';
import { useDispatch, useSelector } from 'react-redux';

function Location() {
  const dispatch = useDispatch();
  const location = useGeolocation();
  const { address } = useSelector(selectLocation);

  useEffect(() => {
    if (location.loaded) {
      const lat = JSON.stringify(location.coordinates.lat);
      const lng = JSON.stringify(location.coordinates.lng);
      dispatch(setLat(lat));
      dispatch(setLng(lng));
    }
  }, [location.loaded]);

  return (
    <>
      <S.LocationStyle>{address}</S.LocationStyle>
    </>
  );
}

export default memo(Location);
