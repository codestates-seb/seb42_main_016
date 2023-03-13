import * as S from '../style/FormStyle';
import {useState, useEffect} from 'react';
import {FiChevronDown} from 'react-icons/fi';
import useDogAge from '../../hooks/useDogAge';
import {useDispatch, useSelector} from 'react-redux';
import {openModal, selectModal, selectOption} from '../../modules/redux/modalSlice';
import {selectEdit} from '../../modules/redux/editSlice';
import useAxios from '../../hooks/useAxios';

function DogForm() {
	const [value, setValue] = useState({
		name: '',
		birth: '',
		memo: '',
	});

	const {name, birth, memo} = value;
	// eslint-disable-next-line
	const onlyString = name.replace(/[0-9]|[' ']/g, '');
	const onlyNumber = birth.replace(/[^0-9]/g, '');

	const {validText, isValid} = useDogAge(birth);
	const {option} = useSelector(selectModal);
	const {edit, data} = useSelector(selectEdit);
	const {weight, type} = option;

	useEffect(() => {
		if (edit) {
			const {name, birth, weight, type, memo} = data;
			setValue({name, birth, memo});
			dispatch(selectOption({weight, type}));
		}
		// eslint-disable-next-line
	}, []);

	const dispatch = useDispatch();
	const {POST, PATCH} = useAxios();

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
				modalType: 'WeightModal',
				isOpen: true,
			})
		);
	};

	const handleOpenTypeModal = () => {
		dispatch(
			openModal({
				modalType: 'TypeModal',
				isOpen: true,
			})
		);
	};

	const onSubmit = (e) => {
		e.preventDefault();
		if (edit) {
			const {id} = data;
			PATCH(`/mydog/${id}`, {name, birth, weight, type, memo}, '/mydog');
		} else {
			POST('/mydog', {name, birth, weight, type, memo}, '/mydog');
		}
	};

	return (
		<S.EditorContainer>
			<S.Form>
				<S.LabelContainer>
					<S.Label>이름</S.Label>
				</S.LabelContainer>
				<S.NomalInput type="text" placeholder="이름을 입력해주세요." name="name" value={onlyString} onChange={onChange} />
				<S.LabelContainer>
					<S.Label>생년월일(YYYYMMDD)</S.Label>
				</S.LabelContainer>
				<S.Input type="text" maxLength={8} placeholder="ex) 20230101" name="birth" value={onlyNumber} onChange={onChange} valid={!isValid} />
				<S.ValidText>{validText}</S.ValidText>
				<S.LabelContainer>
					<S.Label>몸무게(kg)</S.Label>
				</S.LabelContainer>
				<S.NomalInput type="text" placeholder="몸무게를 선택해주세요." name="weight" value={weight} readOnly onClick={handleOpenWeightModal} />
				<div className="relative">
					<FiChevronDown className="select" size={22} />
				</div>
				<S.LabelContainer>
					<S.Label>견종</S.Label>
				</S.LabelContainer>
				<S.NomalInput type="text" placeholder="견종을 선택해주세요." name="type" value={type} readOnly onClick={handleOpenTypeModal} />
				<div className="relative">
					<FiChevronDown className="select" size={22} />
				</div>
				<S.LabelContainer>
					<S.Label>특이사항(선택)</S.Label>
				</S.LabelContainer>
				<S.Textarea rows={10} placeholder="ex) 특이사항 및 주의사항을 입력해주세요." name="memo" value={memo} onChange={onChange} />
				<S.Button disabled={!(name && !isValid && option.weight && option.type)} onClick={onSubmit}>
					<S.ButtonText>{edit ? '수정하기' : '등록하기'}</S.ButtonText>
				</S.Button>
			</S.Form>
		</S.EditorContainer>
	);
}

export default DogForm;
