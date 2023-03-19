import * as S from '../style/HomeStyle';
import Calender from '../hairshopreserve/Calender';
import DesignOption from '../hairshopreserve/DesignOption';
import MyDogList from '../hairshopreserve/MyDogList';
import TopButton from '../stylebook/TopButton';
import { useSelector } from 'react-redux';
import { selectBook } from '../../modules/redux/bookSlice';

function BookTab() {
  const { date, time, design, dog } = useSelector(selectBook);

  return (
    <S.HomeContainer>
      <S.HomeContent>
        <Calender />
        <DesignOption />
        <MyDogList />
      </S.HomeContent>
      <S.ReserveBtn disabled={!(date && time && design && dog)}>예약하기</S.ReserveBtn>
      <TopButton />
    </S.HomeContainer>
  );
}

export default BookTab;
