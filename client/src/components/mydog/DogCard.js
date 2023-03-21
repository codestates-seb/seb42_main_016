import * as S from '../style/CardStyle';
import { edit } from '../../modules/redux/editSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { openModal } from '../../modules/redux/modalSlice';
import { setUrl, setId } from '../../modules/redux/setSlice';
import { MYDOGEDIT } from '../../modules/routes';
import { MYDOG_ENDPOINT } from '../../modules/endpoints';
import { DOGCONFIRMMODAL } from '../../modules/ModalContainer';
import { getDogAge } from '../../utils/getDogAge';

function DogCard({ dog }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const originType = dog.dogSpecies.replace(/_/g, ' ');

  const onNavigateEdit = () => {
    dispatch(edit(dog));
    navigate(MYDOGEDIT);
  };

  const handleOpenConfirmModal = () => {
    dispatch(
      openModal({
        modalType: DOGCONFIRMMODAL,
        isOpen: true,
      }),
    );
    dispatch(setUrl(`${MYDOG_ENDPOINT}/${dog.dogId}`));
    dispatch(setId(dog.dogId));
  };

  return (
    <S.Container>
      <S.TextWrapper>
        <S.Name>{dog.dogName}</S.Name>
        <S.Detail>{getDogAge(dog.dogBirthDate)}</S.Detail>
        <S.Detail>{dog.dogWeight}</S.Detail>
        <S.Detail>{originType}</S.Detail>
        <S.Detail>{dog.dogDescription ? dog.dogDescription : '특이사항 없음'}</S.Detail>
      </S.TextWrapper>
      <S.ButtonWrapper>
        <S.Button onClick={handleOpenConfirmModal}>삭제</S.Button>
        <S.Button onClick={onNavigateEdit}>수정</S.Button>
      </S.ButtonWrapper>
    </S.Container>
  );
}

export default DogCard;
