import { Routes, Route } from 'react-router-dom';
import { Home, Login, Register } from './pages';
import { getCookie } from 'typescript-cookie';
import { Context } from './helper/Context';
import Navbar from './components/Navbar';
import { useState } from 'react';

function App() {
  const token = getCookie('jwt_token');
  const [addClassModal, setAddClassModal] = useState(false);

  return (
    <Context.Provider value={{ token }}>
      <Navbar setAddClassModal={setAddClassModal} />
      <Routes>
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route
          path='/'
          element={
            <Home
              addClassModal={addClassModal}
              setAddClassModal={setAddClassModal}
            />
          }
        />
      </Routes>
    </Context.Provider>
  );
}

export default App;
