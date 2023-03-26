import * as S from '../style/MyPageStyle';
import { IoIosCut } from 'react-icons/io';
import { useDispatch } from 'react-redux';
import { openModal } from '../../modules/redux/modalSlice';
import { BOOKCANCELMODAL } from '../../modules/ModalContainer';

export default function ReserveItem({ reserve }) {
  const dispatch = useDispatch();
  const { reservationId } = reserve;
  const handleOpenBookCancelModal = () => {
    dispatch(
      openModal({
        modalType: BOOKCANCELMODAL,
        isOpen: true,
        data: reservationId,
      }),
    );
  };
  return (
    <S.RIWrap>
      <div className="upper">
        <S.HairshopName>
          <IoIosCut className="icon" />
          {reserve.hairShopName}
        </S.HairshopName>
        <S.Button onClick={handleOpenBookCancelModal}>예약취소</S.Button>
      </div>
      <S.ReserveInfo>
        <div className="info">
          <div className="date">{reserve.reserveDate}</div>
          <div className="time">{reserve.reserveTime}</div>
        </div>
        <div className="option">
          <div className="cut">옵션: {reserve.hairOption}</div>
          <div className="dog">강아지: {reserve.dogName}</div>
        </div>
      </S.ReserveInfo>
    </S.RIWrap>
  );
}
