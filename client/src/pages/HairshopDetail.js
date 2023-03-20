import HomeTab from '../components/tab/HomeTab';
import BookTab from '../components/tab/BookTab';
import ReviewTab from '../components/tab/ReviewTab';
import { useDispatch, useSelector } from 'react-redux';
import { selectTab, activeTab } from '../modules/redux/tabSlice';
import * as S from '../components/style/TabBarStyle';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { asyncUpFetch } from '../modules/redux/shopSlice';
import { setId } from '../modules/redux/setSlice';
import Header from '../components/Header';
import { Footer } from '../components/style/FooterStyle';
import useScrollTop from '../hooks/useScrollTop';

function HairshopDetail() {
  const dispatch = useDispatch();
  const { tab, isOn } = useSelector(selectTab);
  const { id } = useParams();

  useScrollTop();

  useEffect(() => {
    dispatch(activeTab(0));
    dispatch(setId(id));
    dispatch(asyncUpFetch());
  }, []);

  const tabTitle = ['홈', '예약', '리뷰'];

  const tabContent = {
    0: <HomeTab />,
    1: <BookTab />,
    2: <ReviewTab />,
  };

  return (
    <>
      <Header />
      <S.TabContainer>
        <S.TabBarBox>
          <S.TabBar>
            <S.Ul>
              {tabTitle.map((menu, idx) => (
                <S.Li
                  key={idx}
                  onClick={() => dispatch(activeTab(idx))}
                  className={isOn[idx] ? 'selected' : ''}>
                  <span>{menu}</span>
                </S.Li>
              ))}
            </S.Ul>
          </S.TabBar>
        </S.TabBarBox>
      </S.TabContainer>
      {tabContent[tab]}
      <Footer />
    </>
  );
}

export default HairshopDetail;
