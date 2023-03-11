import * as S from './style/DogStyle';
import useAxiosGet from '../hooks/useAxiosGet';
import DogCard from './DogCard';
import AddCard from './AddCard';

function DogList() {
	const data = useAxiosGet('/mydog');

	return (
		<S.Container>
			<S.ContentBox>
				<S.Sidebar>사이드바</S.Sidebar>
				<S.Content>
					<S.TitleBox>
						<S.Title>강아지 정보</S.Title>
					</S.TitleBox>
					<S.CardFlex>
						{data &&
							data.map((dog) => {
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
