import { useState, useEffect } from 'react';
import toast from 'react-hot-toast';

function useGeolocation() {
  const [location, setLocation] = useState({
    loaded: false,
    coordinates: { lat: 0, lng: 0 },
  });

  const defaultLocation = {
    loaded: true,
    coordinates: { lat: 37.5044953, lng: 127.0491212 },
  };

  const onSuccess = (location) => {
    setLocation({
      loaded: true,
      coordinates: {
        lat: location.coords.latitude,
        lng: location.coords.longitude,
      },
    });
    toast.dismiss();
    toast.success('위치 정보를 성공적으로 가져왔습니다.');
  };

  const onError = () => {
    setLocation(defaultLocation);
    toast.dismiss();
    toast.error('위치 정보를 가져오지 못했습니다.');
  };

  useEffect(() => {
    if (!('geolocation' in navigator)) {
      onError({
        code: 0,
        message: 'Geolocation not supported',
      });
    } else if (!location.loaded) {
      toast.loading('위치 정보를 가져오는 중입니다.');
    }
    navigator.geolocation.getCurrentPosition(onSuccess, onError);
  }, []);

  return location;
}

export default useGeolocation;
