import {useParams} from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import styled from 'styled-components';

const Nav = styled.nav`
	background-color: cornflowerblue;
	height: 50px;
`;

function HairshopDetail() {
	const {id} = useParams();
	const data = useFetch(`/hairshop/${id}`);
	console.log(data);

	return (
		<>
			<Nav />
			<h1>{id}번상세페이지</h1>
		</>
	);
}

export default HairshopDetail;
