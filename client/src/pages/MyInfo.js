import MyUser from '../components/myinfo/MyUser';
import MyContent from '../components/myinfo/MyContent';
import * as S from '../components/style/DogStyle';

function MyInfo() {
	return (
		<S.Container>
			<S.ContentBox>
				<S.Content>
					<MyUser />
					<MyContent />
				</S.Content>
			</S.ContentBox>
		</S.Container>
	);
}

export default MyInfo;
