import * as S from '../style/MyInfoStyle';
import { useDispatch } from 'react-redux';
import { WITHDRAWCONFIRMMODAL } from '../../modules/ModalContainer';
import { openModal } from '../../modules/redux/modalSlice';

function Withdraw() {
  const dispatch = useDispatch();

  const onClickWithdraw = () => {
    dispatch(
      openModal({
        modalType: WITHDRAWCONFIRMMODAL,
        isOpen: true,
      })
    );
  };

  return (
    <>
      <S.WithdrawText>
        <span onClick={onClickWithdraw} role="presentation">
          회원탈퇴
        </span>
      </S.WithdrawText>
    </>
  );
}

export default Withdraw;
