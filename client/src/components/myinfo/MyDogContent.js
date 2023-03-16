import * as S from '../style/MyInfoStyle';
import {MdNavigateNext} from 'react-icons/md';
import Empty from '../Empty';
import DogCard from '../mydog/DogCard';
import {useDispatch, useSelector} from 'react-redux';
import {useEffect} from 'react';
import {asyncUpFetch, selectDog} from '../../modules/redux/dogSlice';

function MyDogContent({title, text, onClick}) {
	const dispatch = useDispatch();
	const data = useSelector(selectDog);

	useEffect(() => {
		dispatch(asyncUpFetch());
	}, [dispatch]);

	const filteredData = data ? data.filter((dog) => dog.id === 1) : null;

	return (
		<>
			<S.ContentTitleContainer>
				<S.ContentTitle>{title}</S.ContentTitle>
				<S.MoreButton onClick={onClick}>
					더보기 <MdNavigateNext />
				</S.MoreButton>
			</S.ContentTitleContainer>
			<S.MyInfoContent>
				{filteredData ? (
					filteredData.map((dog) => {
						return <DogCard dog={dog} key={dog.id} />;
					})
				) : (
					<Empty text={text} />
				)}
			</S.MyInfoContent>
		</>
	);
}

export default MyDogContent;
