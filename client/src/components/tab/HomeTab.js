import {useParams} from 'react-router-dom';
import useFetch from '../../hooks/useFetch';

function HomTab() {
	const {id} = useParams();
	const data = useFetch(`/hairshop/${id}`);
	console.log(id, data);
	return (
		<div>
			<h1>{data.name}</h1>
		</div>
	);
}

export default HomTab;
