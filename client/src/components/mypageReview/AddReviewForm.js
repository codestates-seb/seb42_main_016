import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addReview } from '../../modules/redux/reviewsSlice'

export default function AddReviewForm() { 
    const dispatch = useDispatch();
    const [photo, setPhoto] = useState(null)
    const [text, setText] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(addReview({photo,text}));

        setPhoto(null);
        setText('');
   
      };
    const handlePhotoChange = event => setPhoto(event.target.files);
    const handleTextChange = event => setText(event.target.value);
    

  return (
    <form onSubmit={handleSubmit}>
      <p>리뷰 등록</p>
    <label>
      Photo:
      <input type="file" accept="image/*" onChange={handlePhotoChange} />
    </label>
    <label>
      Text:
      <input type="text" value={text} onChange={handleTextChange} />
    </label>

    <button type="submit">Submit</button>
  </form>
  )
}
