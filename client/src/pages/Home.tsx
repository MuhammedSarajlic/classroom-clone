import axios, { AxiosResponse } from 'axios';
import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getCookie } from 'typescript-cookie';
import ClassFormModal from '../components/ClassFormModal';
import { Context } from '../helper/Context';
import jwt_decode, { JwtPayload } from 'jwt-decode';

interface Props {
  addClassModal: boolean;
  setAddClassModal: React.Dispatch<React.SetStateAction<boolean>>;
  setUser: React.Dispatch<
    React.SetStateAction<void | AxiosResponse<any, any> | null>
  >;
}

interface tokenValue {
  firstName: string;
  lastName: string;
  email: string;
}

export const Home = ({ addClassModal, setAddClassModal, setUser }: Props) => {
  const navigate = useNavigate();
  const token = JSON.stringify(useContext(Context));

  useEffect(() => {
    const decoded = jwt_decode<tokenValue>(token || '');
    axios
      .post('https://localhost:7155/api/Home', decoded)
      .then((res) => {
        setUser(res);
        console.log(res);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      Home
      {addClassModal && <ClassFormModal setAddClassModal={setAddClassModal} />}
    </div>
  );
};
