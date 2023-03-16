import * as S from '../style/MyInfoStyle';
import {MdNavigateNext} from 'react-icons/md';
import Empty from '../Empty';

function MyReserveContent({title, text, onClick, data}) {
	const filteredData = data ? data.filter((reserve) => reserve.id === 2) : null;

	return (
		<>
			<S.ContentTitleContainer>
				<S.ContentTitle>{title}</S.ContentTitle>
				<S.MoreButton onClick={onClick}>
					더보기 <MdNavigateNext />
				</S.MoreButton>
			</S.ContentTitleContainer>
			<S.MyInfoContent>{filteredData ? filteredData : <Empty text={text} />}</S.MyInfoContent>
		</>
	);
}

export default MyReserveContent;
