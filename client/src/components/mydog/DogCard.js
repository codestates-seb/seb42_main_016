import * as S from '../style/CardStyle';
import {edit} from '../../modules/redux/editSlice';
import {useDispatch} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import {openModal} from '../../modules/redux/modalSlice';
import {setUrl, setId} from '../../modules/redux/setSlice';

function DogCard({dog}) {
	const age = `${new Date().getFullYear() - dog.dogBirthDate.slice(0, 4)}살`;
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const onNavigateEdit = () => {
		dispatch(edit(dog));
		navigate('edit');
	};

	const handleOpenConfirmModal = () => {
		dispatch(
			openModal({
				modalType: 'DogConfirmModal',
				isOpen: true,
			})
		);
		dispatch(setUrl(`/my-dogs/${dog.id}`));
		dispatch(setId(dog.id));
	};

	return (
		<S.Container>
			<S.TextWrapper>
				<S.Name>{dog.dogName}</S.Name>
				<S.Detail>{age}</S.Detail>
				<S.Detail>{dog.dogWeight}</S.Detail>
				<S.Detail>{dog.dogSpecies}</S.Detail>
				<S.Detail>{dog.dogDescription ? dog.memo : '특이사항 없음'}</S.Detail>
			</S.TextWrapper>
			<S.ButtonWrapper>
				<S.Button onClick={handleOpenConfirmModal}>삭제</S.Button>
				<S.Button onClick={onNavigateEdit}>수정</S.Button>
			</S.ButtonWrapper>
		</S.Container>
	);
}

export default DogCard;
