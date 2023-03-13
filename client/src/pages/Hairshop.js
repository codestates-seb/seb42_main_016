import HairshopList from '../components/hairshop/HairshopList';
import Location from '../components/hairshop/Location';
import useFetch from '../hooks/useFetch';
import styled from 'styled-components';
import TopButton from '../components/stylebook/TopButton';
import {useEffect} from 'react';

const Nav = styled.nav`
	background-color: cornflowerblue;
	height: 50px;
`;

function Hairshop() {
	const data = useFetch('/hairshop?_size=15&_last=20');

	useEffect(() => {
		const onScroll = (e) => {
			const scrollHeight = e.target.documentElement.scrollHeight;
			const currentHeight = e.target.scrollTop + window.innerHeight;
			if (currentHeight + 1 >= scrollHeight) {
			}
		};

		window.addEventListener('scroll', onScroll);
		return () => {
			window.removeEventListener('scroll', onScroll);
		};
	}, []);

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
