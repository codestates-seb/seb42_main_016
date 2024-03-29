import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GlobalStyle from './components/style/GlobalStyle';
import ModalContainer from './modules/ModalContainer';
import Loading from './components/Loading';
import { Toaster } from 'react-hot-toast';
import { useSelector } from 'react-redux';
import { selectUser } from './modules/redux/userSlice';
import TokenChecker from './components/TokenChecker';
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
  WRITEREVIEW,
  READREVIEW,
  BEST,
  PRE,
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
const BestPage = lazy(() => import('./pages/BestPage'));
const NotFound = lazy(() => import('./pages/NotFound'));
const Prepare = lazy(() => import('./pages/Prepare'));

function App() {
  const { user } = useSelector(selectUser);

  return (
    <BrowserRouter>
      <ModalContainer />
      <GlobalStyle />
      {user && <TokenChecker />}
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
              <Route path={WRITEREVIEW} element={<WriteReview />} />
              <Route path={READREVIEW} element={<MyReviewList />} />
            </Route>
            <Route path={MYDOG} element={<Mydog />} />
            <Route path={MYDOGEDIT} element={<MydogEditor />} />
          </Route>
          <Route path={NOTFOUND} element={<NotFound />} />
          <Route path={BEST} element={<BestPage />} />
          <Route path={PRE} element={<Prepare />} />
        </Routes>
      </Suspense>
      <Toaster
        toastOptions={{
          className: '',
          style: {
            fontSize: '16px',
          },
        }}
      />
    </BrowserRouter>
  );
}

export default App;
