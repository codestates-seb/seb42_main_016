import * as S from './style/CardStyle';
import {edit} from '../modules/redux/editSlice';
import {useDispatch} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import {openModal} from '../modules/redux/modalSlice';
import {deleteUrl, deleteId} from '../modules/redux/deleteSlice';

function DogCard({dog}) {
	const age = `${new Date().getFullYear() - dog.birth.slice(0, 4)}살`;
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const onNavigateEdit = () => {
		dispatch(edit(dog));
		navigate('/mydog-edit');
	};

	const handleOpenConfirmModal = () => {
		dispatch(
			openModal({
				modalType: 'DogConfirmModal',
				isOpen: true,
			})
		);
		dispatch(deleteUrl(`/mydog/${dog.id}`));
		dispatch(deleteId(dog.id));
	};

	return (
		<S.Container>
			<S.TextWrapper>
				<S.Name>{dog.name}</S.Name>
				<S.Detail>{age}</S.Detail>
				<S.Detail>{dog.weight}</S.Detail>
				<S.Detail>{dog.type}</S.Detail>
				<S.Detail>{dog.memo.length ? dog.memo : '특이사항 없음'}</S.Detail>
			</S.TextWrapper>
			<S.ButtonWrapper>
				<S.Button onClick={handleOpenConfirmModal}>삭제</S.Button>
				<S.Button onClick={onNavigateEdit}>수정</S.Button>
			</S.ButtonWrapper>
		</S.Container>
	);
}

export default DogCard;
