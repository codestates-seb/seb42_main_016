import HairshopList from '../components/HairshopList';
import Location from '../components/Location';
import useAxiosGet from '../hooks/useAxiosGet';
import styled from 'styled-components';

const Nav = styled.nav`
	background-color: cornflowerblue;
	height: 50px;
`;

function Hairshop() {
	const data = useAxiosGet('/hairshop');

	return (
		<>
			<Nav />
			<Location />
			{data.map((shop) => {
				return <HairshopList shop={shop} key={shop.id} />;
			})}
		</>
	);
}

export default Hairshop;
