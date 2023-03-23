import * as S from '../style/MyPageStyle';
import { IoIosCut } from 'react-icons/io';
// import { useDispatch } from 'react-redux';
// import { addReview } from '../../modules/redux/reviewsSlice';
import { useDispatch } from 'react-redux';
import { openModal } from '../../modules/redux/modalSlice';
import { REVIEWMODAL } from '../../modules/ModalContainer';

export default function ReserveItem() {
  const dispatch = useDispatch();

  const handleOpenTypeModal = () => {
    dispatch(
      openModal({
        modalType: REVIEWMODAL,
        isOpen: true,
      }),
    );
  };
  return (
    <S.RIWrap>
      <div className="upper">
        <S.HairshopName>
          <IoIosCut className="icon" />
          미용실
        </S.HairshopName>
        <S.Button onClick={handleOpenTypeModal}>{'리뷰 작성'}</S.Button>
      </div>
      <S.ReserveInfo>
        <div className="info">
          <div className="date">2023.03.10</div>
          <div className="time">2:00</div>
        </div>
        <div className="cut">컷트</div>
      </S.ReserveInfo>
    </S.RIWrap>
  );
}
