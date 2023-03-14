import * as S from '../style/DogStyle';
import DogCard from './DogCard';
import AddCard from './AddCard';
import {asyncUpFetch, selectDog} from '../../modules/redux/dogSlice';
import {useSelector, useDispatch} from 'react-redux';
import {useEffect} from 'react';
import MypageSidebar from '../mypage/MypageSidebar';

function DogList() {
	const dispatch = useDispatch();
	const dogs = useSelector(selectDog);

	useEffect(() => {
		dispatch(asyncUpFetch());
	}, [dispatch]);

	return (
		<S.Container>
			<S.ContentBox>
				<MypageSidebar />
				<S.Content>
					<S.TitleBox>
						<S.Title>강아지 정보</S.Title>
					</S.TitleBox>
					<S.CardFlex>
						{dogs &&
							dogs.map((dog) => {
								return (
									<DogCard dog={dog} key={dog.id}>
										{dog.name}
									</DogCard>
								);
							})}
						<AddCard />
					</S.CardFlex>
				</S.Content>
			</S.ContentBox>
		</S.Container>
	);
}

export default DogList;
