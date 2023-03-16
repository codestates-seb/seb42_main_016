import DogList from '../components/mydog/DogList';
import useScrollTop from '../hooks/useScrollTop';

function Mydog() {
	useScrollTop();

	return (
		<>
			<DogList />
		</>
	);
}

export default Mydog;
