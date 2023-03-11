import * as S from './style/CardStyle';

function DogCard({dog}) {
	const age = `${new Date().getFullYear() - dog.birth.slice(0, 4)}살`;

	return (
		<S.Container>
			<S.TextWrapper>
				<S.Name>{dog.name}</S.Name>
				<S.Detail>나이 : {age}</S.Detail>
				<S.Detail>몸무게 : {dog.weight}</S.Detail>
				<S.Detail>견종 : {dog.type}</S.Detail>
				<S.Detail>특이사항 : {dog.memo.length ? dog.memo : '없음'}</S.Detail>
			</S.TextWrapper>
			<S.ButtonWrapper>
				<S.Button>삭제</S.Button>
				<S.Button>수정</S.Button>
			</S.ButtonWrapper>
		</S.Container>
	);
}

export default DogCard;
