import * as S from '../style/ModalStyle';
import { useState, useRef, useEffect } from 'react';
import useScroll from '../../hooks/useScroll';
import { REVIEW_ENDPOINT } from '../../modules/endpoints';
// import { MYPAGE, MYREVIEW } from '../../modules/routes';
import API from '../../modules/API';
import { selectModal, closeModal } from '../../modules/redux/modalSlice';
import { useSelector, useDispatch } from 'react-redux';
import CloseIcon from '../../utils/CloseIcon';

function ReviewEditModal() {
  const { isOpen, data } = useSelector(selectModal);
  const { reviewId } = data;

  const [inputCount, setInputCount] = useState(data.reviewText.length);
  // const [reviewImage, setImage] = useState();
  const [reviewText, setText] = useState(data.reviewText);
  const modalRef = useRef();

  const dispatch = useDispatch();
  const token = localStorage.getItem('accessToken');
  const refresh = localStorage.getItem('refresh');
  const config = {
    headers: {
      Authorization: token,
      refresh: refresh,
    },
  };
  useScroll();
  useEffect(() => {
    document.addEventListener('mousedown', clickModalOutside);
    return () => {
      document.removeEventListener('mousedown', clickModalOutside);
    };
  });

  const clickModalOutside = (e) => {
    if (isOpen && !modalRef.current.contains(e.target)) {
      dispatch(closeModal());
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    API.patch(`${REVIEW_ENDPOINT}/${reviewId}`, { reviewText }, config)
      .then((res) => {
        console.log('수정 성공', res);
        dispatch(closeModal());
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const clickCancle = () => {
    dispatch(closeModal());
  };
  // const handleImageChange = (event) => setImage(event.target.files[0]);
  const handleTextChange = (event) => {
    setText(event.target.value);
    setInputCount(event.target.value.length);
  };
  return (
    <S.ModalWrap ref={modalRef}>
      <form onSubmit={handleSubmit}>
        <S.TopWrapper>
          <S.Title>리뷰 수정</S.Title>
          <div role="presentation" onClick={clickCancle}>
            <CloseIcon />
          </div>
        </S.TopWrapper>
        <S.ReviewWrap>
          {/* <S.ReviewImg>
            <input id="dogImg" type="file" accept="image/*" />
          </S.ReviewImg> */}
          <S.ReviewText>
            <textarea
              rows="9"
              cols="40"
              type="text"
              maxLength="120"
              placeholder="리뷰를 작성해주세요"
              value={reviewText}
              onChange={handleTextChange}
            />
            <div className="count">
              <span>{inputCount}</span>
              <span>/120자</span>
            </div>
          </S.ReviewText>
        </S.ReviewWrap>
        <S.ButtonBox>
          <S.SubmitButton disabled={!reviewText} color="white" hover="#6893dd" type="submit">
            제출
          </S.SubmitButton>
        </S.ButtonBox>
      </form>
    </S.ModalWrap>
  );
}

export default ReviewEditModal;
