import { Routes, Route } from 'react-router-dom';
import { Home, Login, Register } from './pages';
import { getCookie } from 'typescript-cookie';
import { Context } from './helper/Context';
import Navbar from './components/Navbar';
import { useState } from 'react';
import { AxiosResponse } from 'axios';

function App() {
  const token = getCookie('jwt_token');
  const [addClassModal, setAddClassModal] = useState(false);
  const [user, setUser] = useState<AxiosResponse | null | void>(null);

  return (
    <>
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
                setUser={setUser}
              />
            }
          />
        </Routes>
      </Context.Provider>
    </>
  );
}

export default App;
