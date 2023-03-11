import * as S from './style/CardStyle';
import {edit} from '../modules/redux/editSlice';
import {useDispatch} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import useAxios from '../hooks/useAxios';

function DogCard({dog, data, setData}) {
	const age = `${new Date().getFullYear() - dog.birth.slice(0, 4)}살`;
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const {DELETE} = useAxios();

	const onNavigateEdit = () => {
		dispatch(edit(dog));
		navigate('/mydog-edit');
	};

	const handleOpenConfirmModal = () => {
		DELETE(`/mydog/${dog.id}`);
		setData(
			data.filter((data) => {
				return data.id !== dog.id;
			})
		);
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
