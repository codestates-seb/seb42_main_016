import * as S from '../style/ListStyle';
import useGeolocation from '../../hooks/useGeolocation';
import { memo, useEffect } from 'react';
import { selectLocation, setLat, setLng } from '../../modules/redux/locationSlice';
import { useDispatch, useSelector } from 'react-redux';

function Location() {
  const dispatch = useDispatch();
  const location = useGeolocation();
  const { address } = useSelector(selectLocation);
  const lat = JSON.stringify(location.coordinates.lat);
  const lng = JSON.stringify(location.coordinates.lng);

  useEffect(() => {
    if (location.loaded && (lat || lng)) {
      dispatch(setLat(lat));
      dispatch(setLng(lng));
    }
  }, [location, lat, lng]);

  return (
    <>
      <S.LocationStyle>{address}</S.LocationStyle>
    </>
  );
}

export default memo(Location);
