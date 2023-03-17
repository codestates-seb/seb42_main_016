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
} from './modules/routes';

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
        <Route path="/mypage/*" element={<Mypage />}>
          <Route index element={<MyInfo />} />
          <Route path="myinfo" element={<MyInfo />} />
          <Route path="reserve" element={<Myreserve />} />
          <Route path="review" element={<Myreview />} />
          <Route path="mydog" element={<Mydog />} />
          <Route path="mydog/edit" element={<MydogEditor />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
