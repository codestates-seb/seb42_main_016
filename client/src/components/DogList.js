import * as S from './style/DogStyle';
import useFetch from '../hooks/useFetch';
import DogCard from './DogCard';
import AddCard from './AddCard';

function DogList() {
	const {data, setData} = useFetch('/mydog');

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
									<DogCard dog={dog} key={dog.id} data={data} setData={setData}>
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
