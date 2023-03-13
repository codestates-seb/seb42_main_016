import HairshopList from '../components/hairshop/HairshopList';
import Location from '../components/hairshop/Location';
import useFetch from '../hooks/useFetch';
import styled from 'styled-components';
import TopButton from '../components/stylebook/TopButton';

const Nav = styled.nav`
	background-color: cornflowerblue;
	height: 50px;
`;

function Hairshop() {
	const data = useFetch('/hairshop');

	return (
		<>
			<Nav />
			<Location />
			{data.map((shop) => {
				return <HairshopList shop={shop} key={shop.id} />;
			})}
			<TopButton />
		</>
	);
}

export default Hairshop;
