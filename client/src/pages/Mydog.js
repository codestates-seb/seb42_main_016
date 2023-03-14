import styled from 'styled-components';
import DogList from '../components/mydog/DogList';

const Nav = styled.nav`
	background-color: cornflowerblue;
	height: 50px;
`;

function Mydog() {
	return (
		<>
			<Nav />
			<DogList />
		</>
	);
}

export default Mydog;
