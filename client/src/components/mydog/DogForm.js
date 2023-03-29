import * as S from '../style/FormStyle';
import { useState, useEffect } from 'react';
import { FiChevronDown } from 'react-icons/fi';
import useDogAge from '../../hooks/useDogAge';
import { useDispatch, useSelector } from 'react-redux';
import { openModal, selectModal, selectOption } from '../../modules/redux/modalSlice';
import { selectEdit } from '../../modules/redux/editSlice';
import useAxios from '../../hooks/useAxios';
import { MYDOG, MYPAGE } from '../../modules/routes';
import { MYDOG_ENDPOINT } from '../../modules/endpoints';
import { TYPEMODAL, WEIGHTMODAL } from '../../modules/ModalContainer';

function DogForm() {
  const [value, setValue] = useState({
    dogName: '',
    dogBirthDate: '',
    dogDescription: '',
  });

  const { dogName, dogBirthDate, dogDescription } = value;
  // eslint-disable-next-line
  const onlyString = dogName.replace(/[0-9]|[' ']/g, '');
  const onlyNumber = dogBirthDate.replace(/[^0-9]/g, '');

  const { validText, isValid } = useDogAge(dogBirthDate);
  const { option } = useSelector(selectModal);
  const { edit, data } = useSelector(selectEdit);
  const { dogWeight, dogSpecies } = option;
  const originType = dogSpecies.replace(/_/g, ' ');

  useEffect(() => {
    if (edit) {
      const { dogName, dogBirthDate, dogWeight, dogSpecies, dogDescription } = data;
      setValue({ dogName, dogBirthDate, dogDescription });
      dispatch(selectOption({ dogWeight, dogSpecies }));
    }
  }, []);

  const dispatch = useDispatch();
  const { POST, PATCH } = useAxios();

  const onChange = (e) => {
    const changeValue = {
      ...value,
      [e.target.name]: e.target.value,
    };
    setValue(changeValue);
  };

  const handleOpenWeightModal = () => {
    dispatch(
      openModal({
        modalType: WEIGHTMODAL,
        isOpen: true,
      }),
    );
  };

  const handleOpenTypeModal = () => {
    dispatch(
      openModal({
        modalType: TYPEMODAL,
        isOpen: true,
      }),
    );
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const changeDate = dogBirthDate.replace(/(\d{4})(\d{2})(\d{2})/, '$1-$2-$3');
    const changeType = dogSpecies.replace(/\s/g, '_');

    if (edit) {
      const { dogId } = data;
      PATCH(
        `${MYDOG_ENDPOINT}/${dogId}`,
        {
          dogName: onlyString,
          dogBirthDate: changeDate,
          dogWeight,
          dogSpecies: changeType,
          dogDescription,
        },
        `${MYPAGE}/${MYDOG}`,
      );
    } else {
      POST(
        MYDOG_ENDPOINT,
        {
          dogName: onlyString,
          dogBirthDate: changeDate,
          dogWeight,
          dogSpecies: changeType,
          dogDescription,
        },
        `${MYPAGE}/${MYDOG}`,
      );
    }
  };

  return (
    <S.EditorContainer>
      <S.Form>
        <S.LabelContainer>
          <S.Label>이름</S.Label>
        </S.LabelContainer>
        <S.NomalInput
          type="text"
          placeholder="이름을 입력해주세요."
          name="dogName"
          value={onlyString}
          onChange={onChange}
        />
        <S.LabelContainer>
          <S.Label>생년월일(YYYYMMDD)</S.Label>
        </S.LabelContainer>
        <S.Input
          type="text"
          maxLength={8}
          placeholder="ex) 20230101"
          name="dogBirthDate"
          value={onlyNumber}
          onChange={onChange}
          valid={!isValid}
        />
        <S.ValidText>{validText}</S.ValidText>
        <S.LabelContainer>
          <S.Label>몸무게(kg)</S.Label>
        </S.LabelContainer>
        <S.NomalInput
          type="text"
          placeholder="몸무게를 선택해주세요."
          name="dogWeight"
          value={dogWeight}
          readOnly
          onClick={handleOpenWeightModal}
        />
        <div className="relative">
          <FiChevronDown className="select" size={22} />
        </div>
        <S.LabelContainer>
          <S.Label>견종</S.Label>
        </S.LabelContainer>
        <S.NomalInput
          type="text"
          placeholder="견종을 선택해주세요."
          name="dogSpecies"
          value={originType}
          readOnly
          onClick={handleOpenTypeModal}
        />
        <div className="relative">
          <FiChevronDown className="select" size={22} />
        </div>
        <S.LabelContainer>
          <S.Label>특이사항(선택)</S.Label>
        </S.LabelContainer>
        <S.Textarea
          rows={10}
          placeholder="ex) 특이사항 및 주의사항을 입력해주세요."
          name="dogDescription"
          value={dogDescription}
          onChange={onChange}
        />
        <S.Button
          disabled={!(dogName && !isValid && option.dogWeight && option.dogSpecies)}
          onClick={onSubmit}>
          <S.ButtonText>{edit ? '수정하기' : '등록하기'}</S.ButtonText>
        </S.Button>
      </S.Form>
    </S.EditorContainer>
  );
}

export default DogForm;
