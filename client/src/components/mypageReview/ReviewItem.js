import { useState } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { deleteReview } from '../../modules/redux/reviewsSlice';
// import useAxios from '../../hooks/useAxios';
import useScroll from '../../hooks/useScroll';
import { REVIEW_ENDPOINT } from '../../modules/endpoints';
import { MYPAGE, MYREVIEW } from '../../modules/routes';
import API from '../../modules/API';

export default function ReviewItem({ reviews }) {
  const [editModal, setEditModal] = useState(false);
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteReview(2));
  };

  function EditForm() {
    const [inputCount, setInputCount] = useState(reviews.reviewText.length);
    // const [reviewImage, setImage] = useState(reviews.reviewImage);
    const [reviewText, setText] = useState(reviews.reviewText);

    useScroll();
    const handleSubmit = (event) => {
      event.preventDefault();
      API.patch(`${REVIEW_ENDPOINT}/${16}`, { reviewText }, `${MYPAGE}/${MYREVIEW}/readreview`);
      // setImage(null);
      setText('');
      // window.location.reload();
    };

    // const handleImageChange = (event) => setImage(event.target.files[0]);
    const handleTextChange = (event) => {
      setText(event.target.value);
      setInputCount(event.target.value.length);
    };
    return (
      <ModalWrap>
        <form onSubmit={handleSubmit}>
          <h2>리뷰 수정</h2>
          <div>
            <input type="file" accept="image/*" />
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

          <button type="submit">수정</button>
          <button onClick={() => setEditModal(false)}>취소</button>
        </form>
      </ModalWrap>
    );
  }

  return (
    <RIWrap>
      <div className="review">
        <Photo>
          <img src={reviews.reviewImage} alt="img" />
        </Photo>
        <Text>{reviews.reviewText}</Text>
      </div>
      <div className="buttons">
        <Button onClick={() => setEditModal(true)}>수정</Button>
        <Button onClick={handleDelete}>삭제</Button>
      </div>
      {editModal ? <EditForm /> : null}
    </RIWrap>
  );
}

export const RIWrap = styled.div`
  width: 700px;
  height: 210px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 10px;

  .review {
    display: flex;
  }
  .buttons {
    /* border: 1px solid gray; */
    display: flex;
    justify-content: flex-end;
    gap: 5px;
    padding: 5px;
    margin-right: 5px;
  }
`;
export const Photo = styled.image`
  /* border: 1px solid #ddd; */
  img {
    width: 200px;
    height: 150px;
    border-radius: 5px 0px 0px 5px;
  }
`;
export const Text = styled.div`
  font-size: 1.3rem;
  width: 480px;
  height: 150px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 0px 5px 5px 0px;
`;
export const Button = styled.button`
  width: 50px;
  height: 30px;
  font-size: 1rem;
  border: 1px solid #ddd;
  border-radius: 5px;
  :hover {
    background-color: white;
  }
`;
export const ModalWrap = styled.div`
  width: 650px;
  height: 500px;
  border: 1px solid #ddd;
  border-radius: 5px;
  text-align: center;
  top: 10%;
  background-color: white;
  position: fixed;
  display: flex;
  justify-content: center;
  textarea {
    resize: none;
  }
`;
