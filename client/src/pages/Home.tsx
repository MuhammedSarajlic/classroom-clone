import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getCookie } from 'typescript-cookie';
import ClassFormModal from '../components/ClassFormModal';
import { Context } from '../helper/Context';

interface Props {
  addClassModal: boolean;
  setAddClassModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Home = ({ addClassModal, setAddClassModal }: Props) => {
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

  return (
    <div>
      Home
      {addClassModal && <ClassFormModal setAddClassModal={setAddClassModal} />}
    </div>
  );
};
