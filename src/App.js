import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Main from './components/Main';
import ProfilePage from './components/ProfilePage';
import Repos from './components/Repos';

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Routes>
					<Route path='/aquera/'>
						<Route index element={<Main />} />
						<Route path='user/:user_id' element={<ProfilePage />} />
						<Route path='user/repos/:user_id' element={<Repos />} />
					</Route>
					<Route path="*" element={<Navigate to="/aquera" replace />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
