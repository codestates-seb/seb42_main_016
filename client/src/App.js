import {BrowserRouter, Routes, Route} from 'react-router-dom';
import GlobalStyle from './components/style/GlobalStyle';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Hairshop from './pages/Hairshop';
import Mydog from './pages/Mydog';
import MydogEditor from './pages/MydogEditor';
import DeleteHome from './pages/DeleteHome';
import Mypage from './pages/Mypage'
import Stylebook from './pages/Stylebook'
import Myreserve from './pages/Myreserve'
import MypageMyInfo from './pages/MypageMyInfo';
import Myreview from './pages/Myreview';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
	return (
		<BrowserRouter>
			<GlobalStyle />
			<Routes>
				<Route path="/" element={<DeleteHome />} />
				<Route path="/login" element={<Login />} />
				<Route path="/signup" element={<Signup />} />
				<Route path="/hairshop" element={<Hairshop />} />
				<Route path="/mydog-edit" element={<MydogEditor />} />
				<Route path='/stylebook' element={<Stylebook/>}/>
				<Route path='/mypage/*' element={<Mypage/>}>
					<Route index element={<MypageMyInfo/>}/>
					<Route path='myinfo' element={<MypageMyInfo/>}/>
					<Route path='reserve' element={<Myreserve/>}/>
					<Route path='review' element={<Myreview/>}/>
					<Route path='mydog' element={<Mydog />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
