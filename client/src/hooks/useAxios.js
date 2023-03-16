import API from '../modules/API';
import { useNavigate } from 'react-router-dom';

function useAxios(url, body, path) {
  const token = localStorage.getItem('accessToken');
  const refresh = localStorage.getItem('refresh');
  const navigate = useNavigate();

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

  return { POST, PATCH };
}

export default useAxios;
