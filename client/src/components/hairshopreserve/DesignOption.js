import * as S from '../style/ReserveStyle';
import { MdDone } from 'react-icons/md';
import { StyleOption } from '../../utils/BookOption';
import { useDispatch, useSelector } from 'react-redux';
import { setDesign, selectBook } from '../../modules/redux/bookSlice';
import { useEffect } from 'react';

function DesignOption() {
  const dispatch = useDispatch();
  const { design } = useSelector(selectBook);

  const onClikeOption = (option) => {
    dispatch(setDesign(option === design ? null : option));
  };

  useEffect(() => {
    dispatch(setDesign(null));
  }, []);

  return (
    <S.ReserveContainer>
      <S.TitleContainer>
        <S.TitleStyle>미용 옵션</S.TitleStyle>
      </S.TitleContainer>
      {StyleOption.map((option, idx) => (
        <S.SelectContainer key={idx}>
          <S.CheckBox selected={design === option} onClick={() => onClikeOption(option)}>
            {design === option && <MdDone />}
          </S.CheckBox>
          <S.DetailBox>
            <S.OptionTitle>{option.title}</S.OptionTitle>
            <S.DetailText>{option.detail}</S.DetailText>
          </S.DetailBox>
        </S.SelectContainer>
      ))}
    </S.ReserveContainer>
  );
}

export default DesignOption;
