import * as S from '../style/ModalStyle';
import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useScroll from '../../hooks/useScroll';
import { REVIEW_ENDPOINT } from '../../modules/endpoints';
import { MYPAGE, MYREVIEW } from '../../modules/routes';
import API from '../../modules/API';
import { selectModal, closeModal } from '../../modules/redux/modalSlice';
import { useSelector, useDispatch } from 'react-redux';
import CloseIcon from '../../utils/CloseIcon';
import { TbDog } from 'react-icons/tb';

function ReviewModal() {
  const [inputCount, setInputCount] = useState(0);
  const [reviewImage, setImage] = useState(null);
  const [reviewText, setText] = useState('');
  const [preview, setPreview] = useState('');
  const modalRef = useRef();
  const { isOpen } = useSelector(selectModal);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const hairShopId = 1;
  const token = localStorage.getItem('accessToken');
  const refresh = localStorage.getItem('refresh');
  const config = {
    headers: {
      Authorization: token,
      refresh: refresh,
      'Content-Type': 'multipart/form-data',
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
    const formData = new FormData();
    formData.append('reviewImage', reviewImage);
    formData.append(
      'body',
      new Blob([JSON.stringify({ reviewText, hairShopId })], {
        type: 'application/json',
      }),
    );
    let entries = formData.entries();
    for (const pair of entries) {
      console.log(pair[0] + ', ' + pair[1][0]);
    }

    API.post(REVIEW_ENDPOINT, formData, config)
      .then((res) => {
        console.log('등록성공', res);
        navigate(`${MYPAGE}/${MYREVIEW}/readreview`);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const clickCancle = () => {
    dispatch(closeModal());
  };

  const handleImageChange = (event) => {
    setImage(event.target.files[0]);
    const reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    return new Promise((resolve) => {
      reader.onload = () => {
        setPreview(reader.result);
        resolve();
      };
    });
  };

  const handleTextChange = (event) => {
    setText(event.target.value);
    setInputCount(event.target.value.length);
  };

  return (
    <S.ModalWrap ref={modalRef}>
      <form encType="multipart/form-data" onSubmit={handleSubmit}>
        <S.TopWrapper>
          <S.Title>리뷰 등록</S.Title>
          <div
            role="button"
            tabIndex="0"
            aria-label="Close"
            onClick={clickCancle}
            onKeyDown={(event) => {
              if (event.key === 'Enter' || event.key === ' ') {
                dispatch(closeModal());
              }
            }}>
            <CloseIcon />
          </div>
        </S.TopWrapper>
        <S.ReviewWrap>
          <S.ReviewImg>
            <div className="preview">
              {preview ? <img src={preview} alt="previewImg" /> : <TbDog className="dog" />}
            </div>
            <label htmlFor="dogImg">사진 업로드</label>
            <input id="dogImg" type="file" accept="image/*" onChange={handleImageChange} />
          </S.ReviewImg>
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
          <S.ConfirmButton color="white" hover="#6893dd" type="submit">
            제출
          </S.ConfirmButton>
        </S.ButtonBox>
      </form>
    </S.ModalWrap>
  );
}

export default ReviewModal;
