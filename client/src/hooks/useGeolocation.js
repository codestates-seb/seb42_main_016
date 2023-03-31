import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectLocation } from '../modules/redux/locationSlice';
import { setError, setSuccess } from '../modules/redux/messageSlice';

function useGeolocation() {
  const [location, setLocation] = useState({
    loaded: false,
    coordinates: { lat: 0, lng: 0 },
  });

  const defaultLocation = {
    loaded: true,
    coordinates: { lat: 37.5044953, lng: 127.0491212 },
  };

  const dispatch = useDispatch();
  const { lat, lng } = useSelector(selectLocation);

  const onSuccess = (location) => {
    setLocation({
      loaded: true,
      coordinates: {
        lat: location.coords.latitude,
        lng: location.coords.longitude,
      },
    });
    dispatch(setSuccess('위치 정보를 성공적으로 가져왔습니다.'));
  };

  const onError = () => {
    setLocation(defaultLocation);
    dispatch(setError('위치 정보를 성공적으로 못했습니다.'));
  };

  useEffect(() => {
    if (lat || lng) {
      return;
    }

    if (!('geolocation' in navigator)) {
      onError({
        code: 0,
        message: 'Geolocation not supported',
      });
    }
    navigator.geolocation.getCurrentPosition(onSuccess, onError);
  }, []);

  return location;
}

export default useGeolocation;
