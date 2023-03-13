import HairshopList from '../components/hairshop/HairshopList';
import Location from '../components/hairshop/Location';
import styled from 'styled-components';
import TopButton from '../components/stylebook/TopButton';
import useInfiniteScroll from '../hooks/useInfiniteScroll';

const Nav = styled.nav`
	background-color: cornflowerblue;
	height: 50px;
`;

function Hairshop() {
	const PER_PAGE = 15;
	const url = '/hairshop';
	const {data, loading, handleScroll} = useInfiniteScroll(url, PER_PAGE);

	return (
		<div style={{height: '100vh', overflowY: 'scroll'}} onScroll={handleScroll}>
			<Nav />
			<Location />
			{data.map((shop) => {
				return <HairshopList shop={shop} key={shop.id} />;
			})}
			{loading && <div>Loading...</div>}
			<TopButton />
		</div>
	);
}

export default Hairshop;
