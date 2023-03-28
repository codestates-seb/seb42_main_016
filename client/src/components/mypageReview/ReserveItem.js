import * as S from '../style/MyPageStyle';
import { IoIosCut } from 'react-icons/io';
import { useDispatch } from 'react-redux';
import { openModal } from '../../modules/redux/modalSlice';
import { REVIEWMODAL } from '../../modules/ModalContainer';

export default function ReserveItem({ reserve }) {
  const dispatch = useDispatch();
  const { reservationId, hairShopId } = reserve;
  const handleOpenTypeModal = () => {
    dispatch(
      openModal({
        modalType: REVIEWMODAL,
        isOpen: true,
        data: { reservationId, hairShopId },
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
        <S.Button onClick={handleOpenTypeModal}>{'리뷰 작성'}</S.Button>
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
