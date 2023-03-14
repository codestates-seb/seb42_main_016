import * as S from '../components/style/DogStyle';
import DogForm from '../components/mydog/DogForm';
import {useSelector} from 'react-redux';
import {selectEdit} from '../modules/redux/editSlice';

function MydogEditor() {
	const {edit} = useSelector(selectEdit);

	return (
		<>
			<S.Container>
				<S.Content>
					<S.TitleBox>
						<S.Title>{edit ? '강아지 수정' : '강아지 등록'}</S.Title>
					</S.TitleBox>
					<DogForm />
				</S.Content>
			</S.Container>
		</>
	);
}

export default MydogEditor;
