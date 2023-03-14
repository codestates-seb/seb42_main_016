import HairshopList from '../components/hairshop/HairshopList';
import Location from '../components/hairshop/Location';
import styled from 'styled-components';
import useInfiniteScroll from '../hooks/useInfiniteScroll';
import * as S from '../components/style/ListStyle';
import {useRef, useState} from 'react';
import ScrollTopButton from '../components/ScrollTopButton';

const Nav = styled.nav`
	background-color: cornflowerblue;
	height: 50px;
`;

function Hairshop() {
	const PER_PAGE = 15;
	const url = '/hairshop';
	const {data, loading, handleScroll} = useInfiniteScroll(url, PER_PAGE);
	const scrollAreaRef = useRef(null);
	const [showButton, setShowButton] = useState(false);

	const handleScrollEvent = (e) => {
		if (e.target.scrollTop > 500) {
			setShowButton(true);
		} else {
			setShowButton(false);
		}
		handleScroll(e);
	};

	return (
		<S.ScrollArea onScroll={handleScrollEvent} ref={scrollAreaRef}>
			<Nav />
			<Location />
			{data.map((shop) => {
				return <HairshopList shop={shop} key={shop.id} />;
			})}
			{loading && <div>Loading...</div>}
			{showButton && <ScrollTopButton area={scrollAreaRef} />}
		</S.ScrollArea>
	);
}

export default Hairshop;
