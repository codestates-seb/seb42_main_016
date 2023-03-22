import * as S from '../style/ListStyle';
import useGeolocation from '../../hooks/useGeolocation';
import { memo } from 'react';

function Location() {
  const location = useGeolocation();
  const defaultLat = '37.501364';
  const defaultLng = '127.038221';
  const lat = location.loaded ? JSON.stringify(location.coordinates.lat) : defaultLat;
  const lng = location.loaded ? JSON.stringify(location.coordinates.lng) : defaultLng;

  console.log('lat:', lat, 'lng:', lng);

  return (
    <>
      <S.LocationStyle>강남구 역삼동</S.LocationStyle>
    </>
  );
}

export default memo(Location);
