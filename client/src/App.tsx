import { Routes, Route } from 'react-router-dom';
import { Home, Login, Register } from './pages';
import { getCookie } from 'typescript-cookie';
import { Context } from './helper/Context';

function App() {
  const token = getCookie('jwt_token');
  return (
    <Context.Provider value={{ token }}>
      <Routes>
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/' element={<Home />} />
      </Routes>
    </Context.Provider>
  );
}

export default App;
