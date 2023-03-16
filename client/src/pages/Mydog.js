import DogList from '../components/mydog/DogList';
import {useEffect} from 'react';

function Mydog() {
	useEffect(() => {
		if (window) window.scrollTo(0, 0);
	}, []);

	return (
		<>
			<DogList />
		</>
	);
}

export default Mydog;
