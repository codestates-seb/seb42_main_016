import API from '../modules/API';
import { useNavigate } from 'react-router-dom';
import { HOMEMODAL } from '../modules/ModalContainer';
import { useDispatch } from 'react-redux';
import { openModal } from '../modules/redux/modalSlice';
import { logout } from '../modules/redux/userSlice';

function useAxios(url, body, path) {
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
      .then((res) => {
        console.log('등록성공', res);
        navigate(path);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const PATCH = (url, body, path) => {
    API.patch(url, body, {
      headers: {
        Authorization: token,
        Refresh: refresh,
      },
    })
      .then((res) => {
        console.log('수정성공', res);
        navigate(path);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const DELETE = (url) => {
    API.delete(url, {
      headers: {
        Authorization: token,
        Refresh: refresh,
      },
    })
      .then((res) => {
        dispatch(
          openModal({
            modalType: HOMEMODAL,
            isOpen: true,
          }),
        );
        dispatch(logout());
        navigate(path);
        window.location.reload();
        console.log('탈퇴성공', res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return { POST, PATCH, DELETE };
}

export default useAxios;
