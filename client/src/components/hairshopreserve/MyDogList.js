import * as S from '../style/ReserveStyle';
import { useEffect } from 'react';
import { MYDOG_ENDPOINT } from '../../modules/endpoints';
import { MdDone } from 'react-icons/md';
import { getDogAge } from '../../utils/getDogAge';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { selectUser } from '../../modules/redux/userSlice';
import { MYPAGE, MYDOG, LOGIN } from '../../modules/routes';
import { setDog, selectBook } from '../../modules/redux/bookSlice';
import useAuth from '../../hooks/useAuth';

function MyDogList() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { dog } = useSelector(selectBook);
  const { user } = useSelector(selectUser);
  const data = useAuth(MYDOG_ENDPOINT);

  useEffect(() => {
    dispatch(setDog(null));
  }, []);

  const onClikeOption = (mydog) => {
    dispatch(setDog(mydog === dog ? null : mydog.dogId));
  };

  const onClickCreate = () => {
    if (user) {
      navigate(`${MYPAGE}/${MYDOG}`);
    } else {
      navigate(LOGIN);
    }
  };

  return (
    <S.ReserveContainer>
      <S.TitleContainer>
        <S.TitleStyle>강아지 선택</S.TitleStyle>
      </S.TitleContainer>
      {data.length ? (
        data.map((mydog) => (
          <S.SelectContainer key={mydog.dogId}>
            <S.CheckBox selected={dog === mydog} onClick={() => onClikeOption(mydog)}>
              {dog === mydog && <MdDone />}
            </S.CheckBox>
            <S.DetailBox>
              <S.OptionTitle>{mydog.dogName}</S.OptionTitle>
              <S.DetailText>{`${getDogAge(mydog.dogBirthDate)}, ${
                mydog.dogWeight
              }, ${mydog.dogSpecies.replace(/_/g, ' ')}`}</S.DetailText>
              <S.DetailText>
                {mydog.dogDescription ? mydog.dogDescription : '특이사항 없음'}
              </S.DetailText>
            </S.DetailBox>
          </S.SelectContainer>
        ))
      ) : (
        <S.SelectContainer>
          <S.DetailBox>
            <S.DetailText className="empty" onClick={onClickCreate}>
              등록된 강아지가 없습니다. 먼저 강아지를 등록해주세요.
            </S.DetailText>
          </S.DetailBox>
        </S.SelectContainer>
      )}
    </S.ReserveContainer>
  );
}

export default MyDogList;
