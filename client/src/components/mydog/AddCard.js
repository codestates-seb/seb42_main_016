import * as S from '../style/CardStyle';
import AddButton from '../../utils/AddButton';
import {useNavigate} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {cancleEdit} from '../../modules/redux/editSlice';
import {selectOption} from '../../modules/redux/modalSlice';

function AddCard() {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const onClick = () => {
		dispatch(cancleEdit());
		dispatch(selectOption({dogWeight: '', dogSpecies: ''}));
		navigate('edit');
	};

	return (
		<S.Container>
			<S.CreateBox>
				<S.CreateButton onClick={onClick}>
					<AddButton />
				</S.CreateButton>
				<S.CreateText>강아지 추가하기</S.CreateText>
			</S.CreateBox>
		</S.Container>
	);
}

export default AddCard;
