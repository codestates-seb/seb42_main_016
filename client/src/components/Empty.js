import * as S from './style/EmptyStyle';

function Empty({text}) {
	return (
		<>
			<S.EmptyContainer>
				<S.Empty>{text}</S.Empty>
			</S.EmptyContainer>
		</>
	);
}

export default Empty;
