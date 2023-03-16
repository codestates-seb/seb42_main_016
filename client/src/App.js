import {BrowserRouter, Routes, Route} from 'react-router-dom';
import GlobalStyle from './components/style/GlobalStyle';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Hairshop from './pages/Hairshop';
import Mydog from './pages/Mydog';
import MydogEditor from './pages/MydogEditor';
import DeleteHome from './pages/DeleteHome';
import HairshopDetail from './pages/HairshopDetail';
import Stylebook from './pages/Stylebook';
import Mypage from './pages/Mypage';
import MypageMyInfo from './pages/MypageMyInfo';
import Myreserve from './pages/Myreserve';
import Myreview from './pages/Myreview';
import ModalContainer from './modules/ModalContainer';

function App() {
	return (
		<BrowserRouter>
			<ModalContainer />
			<GlobalStyle />
			<Routes>
				<Route path="/" element={<DeleteHome />} />
				<Route path="/login" element={<Login />} />
				<Route path="/signup" element={<Signup />} />
				<Route path="/hairshop" element={<Hairshop />} />
				<Route path="/hairshop/:id" element={<HairshopDetail />} />
				<Route path="/stylebook" element={<Stylebook />} />
				<Route path="/mypage/*" element={<Mypage />}>
					<Route index element={<MypageMyInfo />} />
					<Route path="myinfo" element={<MypageMyInfo />} />
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
