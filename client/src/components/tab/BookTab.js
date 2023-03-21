import * as S from '../style/HomeStyle';
import Calender from '../hairshopreserve/Calender';
import DesignOption from '../hairshopreserve/DesignOption';
import MyDogList from '../hairshopreserve/MyDogList';
import TopButton from '../stylebook/TopButton';
import { useSelector, useDispatch } from 'react-redux';
import { selectBook } from '../../modules/redux/bookSlice';
import { openModal } from '../../modules/redux/modalSlice';
import { BOOKCONFIRMMODAL } from '../../modules/ModalContainer';

function BookTab() {
  const { date, time, design, dog } = useSelector(selectBook);
  const dispatch = useDispatch();

  const onClick = () => {
    dispatch(
      openModal({
        modalType: BOOKCONFIRMMODAL,
        isOpen: true,
      }),
    );
  };

  return (
    <S.HomeContainer>
      <S.HomeContent>
        <Calender />
        <DesignOption />
        <MyDogList />
      </S.HomeContent>
      <S.ReserveBtn disabled={!(date && time && design && dog)} onClick={onClick}>
        예약하기
      </S.ReserveBtn>
      <TopButton />
    </S.HomeContainer>
  );
}

export default BookTab;
