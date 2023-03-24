import * as S from '../style/ListStyle';
import useGeolocation from '../../hooks/useGeolocation';
import { memo, useEffect } from 'react';
import { selectLocation, setLat, setLng } from '../../modules/redux/locationSlice';
import { useDispatch, useSelector } from 'react-redux';

function Location() {
  const dispatch = useDispatch();
  const location = useGeolocation();
  const { address } = useSelector(selectLocation);
  const defaultLat = '37.5044953';
  const defaultLng = '127.0491212';
  const lat = location.loaded ? JSON.stringify(location.coordinates.lat) : defaultLat;
  const lng = location.loaded ? JSON.stringify(location.coordinates.lng) : defaultLng;

  useEffect(() => {
    if (location.loaded) {
      dispatch(setLat(lat));
      dispatch(setLng(lng));
    } else {
      dispatch(setLat(defaultLat));
      dispatch(setLng(defaultLng));
    }
  }, [location.loaded]);

  return (
    <>
      <S.LocationStyle>{address}</S.LocationStyle>
    </>
  );
}

export default memo(Location);
