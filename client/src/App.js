import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GlobalStyle from './components/style/GlobalStyle';
import ModalContainer from './modules/ModalContainer';
import Loading from './components/Loading';
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
} from './modules/routes';

const MainPage = lazy(() => import('./pages/MainPage'));
const Signup = lazy(() => import('./pages/Signup'));
const Login = lazy(() => import('./pages/Login'));
const Hairshop = lazy(() => import('./pages/Hairshop'));
const HairshopDetail = lazy(() => import('./pages/HairshopDetail'));
const Stylebook = lazy(() => import('./pages/Stylebook'));
const Mypage = lazy(() => import('./pages/Mypage'));
const MyInfo = lazy(() => import('./pages/MyInfo'));
const Myreserve = lazy(() => import('./pages/Myreserve'));
const Myreview = lazy(() => import('./pages/Myreview'));
const WriteReview = lazy(() => import('./components/mypageReview/WriteReview'));
const MyReviewList = lazy(() => import('./components/mypageReview/MyReviewList'));
const Mydog = lazy(() => import('./pages/Mydog'));
const MydogEditor = lazy(() => import('./pages/MydogEditor'));

function App() {
  return (
    <BrowserRouter>
      <ModalContainer />
      <GlobalStyle />
      <Suspense fallback={<Loading />}>
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
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
