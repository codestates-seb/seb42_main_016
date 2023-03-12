import {BrowserRouter, Routes, Route} from 'react-router-dom';
import GlobalStyle from './components/style/GlobalStyle';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Hairshop from './pages/Hairshop';
import Mydog from './pages/Mydog';
import MydogEditor from './pages/MydogEditor';
import DeleteHome from './pages/DeleteHome';

function App() {
	return (
		<BrowserRouter>
			<GlobalStyle />
			<Routes>
				<Route path="/" element={<DeleteHome />} />
				<Route path="/login" element={<Login />} />
				<Route path="/signup" element={<Signup />} />
				<Route path="/hairshop" element={<Hairshop />} />
				<Route path="/mydog" element={<Mydog />} />
				<Route path="/mydog-edit" element={<MydogEditor />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
