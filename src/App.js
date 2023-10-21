import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Menu from './components/Menu';
import UserRegisterPage from './pages/userRegisterPage/UsersRegisterPage';
import UsersListPage from './pages/usersListPage/UsersListPage';


function App() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route index element={<UserRegisterPage />} />
        <Route path={'/users'} element={<UsersListPage />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
