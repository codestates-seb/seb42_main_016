import * as S from '../style/HomeStyle';
import Calender from '../hairshopreserve/Calender';
import DesignOption from '../hairshopreserve/DesignOption';
import MyDogList from '../hairshopreserve/MyDogList';
import TopButton from '../stylebook/TopButton';
import { useSelector, useDispatch } from 'react-redux';
import { selectBook } from '../../modules/redux/bookSlice';
import { openModal } from '../../modules/redux/modalSlice';
import { BOOKCONFIRMMODAL } from '../../modules/ModalContainer';
import { RESERVATION_ENDPOINT } from '../../modules/endpoints';
import { useParams } from 'react-router-dom';
import API from '../../modules/API';
import { setError } from '../../modules/redux/messageSlice';

function BookTab() {
  const { date, time, design, dog } = useSelector(selectBook);
  const dispatch = useDispatch();
  const { id } = useParams();
  const token = localStorage.getItem('accessToken');
  const refresh = localStorage.getItem('refresh');
  const reqBody = {
    hairShopId: id,
    dogId: dog?.dogId,
    reserveDate: date,
    reserveTime: time,
    hairOption: design?.title,
  };

  const onClick = () => {
    API.post(RESERVATION_ENDPOINT, reqBody, {
      headers: {
        Authorization: token,
        Refresh: refresh,
      },
    })
      .then(() => {
        dispatch(
          openModal({
            modalType: BOOKCONFIRMMODAL,
            isOpen: true,
          }),
        );
      })
      .catch(() => {
        dispatch(setError('예약 실패'));
      });
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
