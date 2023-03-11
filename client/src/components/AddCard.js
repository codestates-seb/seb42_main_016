import * as S from './style/CardStyle';
import AddButton from '../utils/AddButton';
import {useNavigate} from 'react-router-dom';

function AddCard() {
	const navigate = useNavigate();
	return (
		<S.Container>
			<S.CreateBox>
				<S.CreateButton onClick={() => navigate('mydog-edit')}>
					<AddButton />
				</S.CreateButton>
				<S.CreateText>강아지 추가하기</S.CreateText>
			</S.CreateBox>
		</S.Container>
	);
}

export default AddCard;
