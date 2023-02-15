import axios from 'axios';
import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getCookie } from 'typescript-cookie';
import { Context } from '../helper/Context';

export const Home = () => {
  const navigate = useNavigate();
  const token = useContext(Context);

  useEffect(() => {
    axios
      .get('https://localhost:7155/api/Home', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }, []);

  return <div>Home</div>;
};
