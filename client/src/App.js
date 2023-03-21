import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GlobalStyle from './components/style/GlobalStyle';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Hairshop from './pages/Hairshop';
import Mydog from './pages/Mydog';
import MydogEditor from './pages/MydogEditor';
import HairshopDetail from './pages/HairshopDetail';
import Stylebook from './pages/Stylebook';
import Mypage from './pages/Mypage';
import MyInfo from './pages/MyInfo';
import Myreserve from './pages/Myreserve';
import MainPage from './pages/MainPage';
import Myreview from './pages/Myreview';

import ModalContainer from './modules/ModalContainer';
import {
  HOME,
  LOGIN,
  SIGNUP,
  HAIRSHOP,
  HAIRSHOPDETAIL,
  STYLEBOOK,
  MYPAGE,
  MYINFO,
  MYRESERVE,
  MYREVIEW,
  MYDOG,
  MYDOGEDIT,
  NOTFOUND,
} from './modules/routes';
import WriteReview from './components/mypageReview/WriteReview';
import MyReviewList from './components/mypageReview/MyReviewList';
import NotFound from './pages/NotFound';
function App() {
  return (
    <BrowserRouter>
      <ModalContainer />
      <GlobalStyle />
      <Routes>
        <Route path={HOME} element={<MainPage />} />
        <Route path={LOGIN} element={<Login />} />
        <Route path={SIGNUP} element={<Signup />} />
        <Route path={HAIRSHOP} element={<Hairshop />} />
        <Route path={HAIRSHOPDETAIL} element={<HairshopDetail />} />
        <Route path={STYLEBOOK} element={<Stylebook />} />
        <Route path={MYPAGE} element={<Mypage />}>
          <Route index element={<MyInfo />} />
          <Route path={MYINFO} element={<MyInfo />} />
          <Route path={MYRESERVE} element={<Myreserve />} />
          <Route path={MYREVIEW} element={<Myreview />}>
            <Route index element={<WriteReview />} />
            <Route path="writereview" element={<WriteReview />} />
            <Route path="readreview" element={<MyReviewList />} />
          </Route>
          <Route path={MYDOG} element={<Mydog />} />
          <Route path={MYDOGEDIT} element={<MydogEditor />} />
        </Route>
        <Route path={NOTFOUND} element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
