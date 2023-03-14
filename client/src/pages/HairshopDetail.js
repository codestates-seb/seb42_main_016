import styled from 'styled-components';
import HomTab from '../components/tab/HomeTab';
import BookTab from '../components/tab/BookTab';
import ReviewTab from '../components/tab/ReviewTab';
import {useDispatch, useSelector} from 'react-redux';
import {selectTab, activeTab} from '../modules/redux/tabSlice';
import * as S from '../components/style/TabBarStyle';

const Nav = styled.nav`
	background-color: cornflowerblue;
	height: 50px;
`;

const tabTitle = ['홈', '예약', '리뷰'];

const tabContent = {
	0: <HomTab />,
	1: <BookTab />,
	2: <ReviewTab />,
};

function HairshopDetail() {
	const dispatch = useDispatch();
	const {tab, isOn} = useSelector(selectTab);

	return (
		<>
			<Nav />
			<S.TabContainer>
				<S.TabBarBox>
					<S.TabBar>
						<S.Ul>
							{tabTitle.map((menu, idx) => (
								<S.Li key={idx} onClick={() => dispatch(activeTab(idx))} className={isOn[idx] ? 'selected' : ''}>
									<span>{menu}</span>
								</S.Li>
							))}
						</S.Ul>
					</S.TabBar>
				</S.TabBarBox>
			</S.TabContainer>
			{tabContent[tab]}
		</>
	);
}

export default HairshopDetail;
