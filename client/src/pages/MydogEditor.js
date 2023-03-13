import styled from 'styled-components';
import * as S from '../components/style/DogStyle';
import DogForm from '../components/mydog/DogForm';
import {useSelector} from 'react-redux';
import {selectEdit} from '../modules/redux/editSlice';

const Nav = styled.nav`
	background-color: cornflowerblue;
	height: 50px;
`;

function MydogEditor() {
	const {edit} = useSelector(selectEdit);

	return (
		<>
			<Nav />
			<S.Container>
				<S.ContentBox>
					<S.Sidebar>사이드바</S.Sidebar>
					<S.Content>
						<S.TitleBox>
							<S.Title>{edit ? '강아지 수정' : '강아지 등록'}</S.Title>
						</S.TitleBox>
						<DogForm />
					</S.Content>
				</S.ContentBox>
			</S.Container>
		</>
	);
}

export default MydogEditor;
