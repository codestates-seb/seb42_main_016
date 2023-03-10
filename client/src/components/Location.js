import * as S from './style/ListStyle';
import useGeolocation from '../hooks/useGeolocation';

function Location() {
	const location = useGeolocation();
	const lat = location.loaded ? JSON.stringify(location.coordinates.lat) : 'Location data not available yet.';
	const lng = location.loaded ? JSON.stringify(location.coordinates.lng) : 'Location data not available yet.';

	console.log('lat:', lat, 'lng:', lng);

	return (
		<>
			<S.LocationStyle>강남구 역삼동</S.LocationStyle>
		</>
	);
}

export default Location;
