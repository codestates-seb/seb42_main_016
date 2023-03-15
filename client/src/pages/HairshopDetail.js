import styled from 'styled-components';
import HomeTab from '../components/tab/HomeTab';
import BookTab from '../components/tab/BookTab';
import ReviewTab from '../components/tab/ReviewTab';
import {useDispatch, useSelector} from 'react-redux';
import {selectTab, activeTab} from '../modules/redux/tabSlice';
import * as S from '../components/style/TabBarStyle';
import {useParams} from 'react-router-dom';
import {useEffect} from 'react';
import {selectShop, asyncUpFetch} from '../modules/redux/shopSlice';
import {setId} from '../modules/redux/setSlice';

const Nav = styled.nav`
	background-color: cornflowerblue;
	height: 50px;
`;

function HairshopDetail() {
	const dispatch = useDispatch();
	const {tab, isOn} = useSelector(selectTab);
	const {id} = useParams();
	const data = useSelector(selectShop);

	useEffect(() => {
		dispatch(setId(id));
		dispatch(asyncUpFetch());
		// eslint-disable-next-line
	}, [dispatch]);

	const tabTitle = ['홈', '예약', '리뷰'];

	const tabContent = {
		0: <HomeTab data={data} />,
		1: <BookTab />,
		2: <ReviewTab />,
	};

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
