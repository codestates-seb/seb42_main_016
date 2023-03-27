import API from '../modules/API';
import { useDispatch } from 'react-redux';
import { closeModal } from '../modules/redux/modalSlice';
import { setError, setSuccess } from '../modules/redux/messageSlice';

function useDelete(url) {
  const token = localStorage.getItem('accessToken');
  const refresh = localStorage.getItem('refresh');
  const dispatch = useDispatch();

  const DELETE = () => {
    API.delete(url, {
      headers: {
        Authorization: token,
        Refresh: refresh,
      },
    })
      .then(() => {
        dispatch(setSuccess('삭제 성공'));
      })
      .catch(() => {
        dispatch(setError('삭제 실패'));
      })
      .finally(() => {
        dispatch(closeModal());
      });
  };

  return { DELETE };
}

export default useDelete;
