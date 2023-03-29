import API from '../modules/API';
import { useNavigate } from 'react-router-dom';
import { HOMEMODAL } from '../modules/ModalContainer';
import { useDispatch } from 'react-redux';
import { openModal } from '../modules/redux/modalSlice';
import { logout } from '../modules/redux/userSlice';
import { setError, setSuccess } from '../modules/redux/messageSlice';

function useAxios() {
  const token = localStorage.getItem('accessToken');
  const refresh = localStorage.getItem('refresh');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const POST = (url, body, path) => {
    API.post(url, body, {
      headers: {
        Authorization: token,
        Refresh: refresh,
      },
    })
      .then(() => {
        dispatch(setSuccess('등록 성공'));
        navigate(path);
      })
      .catch(() => {
        dispatch(setError('등록 실패'));
      });
  };

  const PATCH = (url, body, path) => {
    API.patch(url, body, {
      headers: {
        Authorization: token,
        Refresh: refresh,
      },
    })
      .then(() => {
        dispatch(setSuccess('수정 성공'));
        navigate(path);
      })
      .catch(() => {
        dispatch(setError('수정 실패'));
      });
  };

  const DELETE = (url) => {
    API.delete(url, {
      headers: {
        Authorization: token,
        Refresh: refresh,
      },
    })
      .then(() => {
        dispatch(
          openModal({
            modalType: HOMEMODAL,
            isOpen: true,
          }),
        );
      })
      .then(() => {
        dispatch(logout());
      })
      .catch(() => {
        dispatch(setError('탈퇴 실패'));
      });
  };

  return { POST, PATCH, DELETE };
}

export default useAxios;
