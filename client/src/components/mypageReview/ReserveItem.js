import { useState } from 'react';
import * as S from '../style/MyPageStyle';
import { IoIosCut } from 'react-icons/io';
// import { useDispatch } from 'react-redux';
import styled from 'styled-components';
// import { addReview } from '../../modules/redux/reviewsSlice';
import useScroll from '../../hooks/useScroll';
// import useAxios from '../../hooks/useAxios';
// import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { REVIEW_ENDPOINT } from '../../modules/endpoints';
import { MYPAGE, MYREVIEW } from '../../modules/routes';
import API from '../../modules/API';

export default function ReserveItem() {
  const [modal, setModal] = useState(false);
  // const { POST } = useAxios();
  const navigate = useNavigate();

  function AddReviewForm() {
    // const dispatch = useDispatch();
    const [inputCount, setInputCount] = useState(0);
    const [reviewImage, setImage] = useState(null);
    const [reviewText, setText] = useState('');
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
    // formData.append('reviewText', reviewText);
    // formData.append('hairShopId', hairShopId);
    //   POST(
    //     REVIEW_ENDPOINT,
    //     { reviewImage, reviewText, hairShopId },
    //     `${MYPAGE}/${MYREVIEW}/readreview`,
    //   );
    // };
    // window.location.reload();
    // { reviewImage, reviewText, hairShopId },

    const handleImageChange = (event) => {
      setImage(event.target.files[0]);
      console.log(event.target.files[0]);
    };
    const handleTextChange = (event) => {
      setText(event.target.value);
      setInputCount(event.target.value.length);
    };

    return (
      <ModalWrap>
        <form encType="multipart/form-data" onSubmit={handleSubmit}>
          <h2>리뷰 등록</h2>
          <div>
            <input type="file" accept="image/*" onChange={handleImageChange} />
          </div>
          <div>
            <textarea
              rows="5"
              cols="50"
              type="text"
              maxLength="120"
              placeholder="리뷰를 작성해주세요"
              value={reviewText}
              onChange={handleTextChange}
            />
            <div>
              <span>{inputCount}</span>
              <span>/120자</span>
            </div>
          </div>

          <button type="submit">제출</button>
          <button onClick={() => setModal(false)}>취소</button>
        </form>
      </ModalWrap>
    );
  }
  // disabled={!(photo && text)}

  return (
    <S.RIWrap>
      <div className="upper">
        <S.HairshopName>
          <IoIosCut className="icon" />
          미용실
        </S.HairshopName>
        <S.CancelButton onClick={() => setModal(true)}>{'리뷰 작성'}</S.CancelButton>
      </div>
      <S.ReserveInfo>
        <div className="info">
          <div className="date">2023.03.10</div>
          <div className="time">2:00</div>
        </div>
        <div className="cut">컷트</div>
        {modal ? <AddReviewForm /> : null}
      </S.ReserveInfo>
    </S.RIWrap>
  );
}

export const ModalWrap = styled.div`
  width: 650px;
  height: 300px;
  border: 1px solid #ddd;
  border-radius: 5px;
  text-align: center;
  top: 30%;
  background-color: white;
  position: fixed;
  display: flex;
  justify-content: center;
  textarea {
    resize: none;
  }
`;
