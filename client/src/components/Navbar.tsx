import React, { useState } from 'react';
import IonIcon from '@reacticons/ionicons';

interface Props {
  setAddClassModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const Navbar = ({ setAddClassModal }: Props) => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className='h-16 w-full flex justify-between items-center bg-gray-800 px-6'>
      <div className='flex items-center hover:bg-gray-500 rounded-full p-2 cursor-pointer'>
        <IonIcon name='menu-outline' size='large'></IonIcon>
      </div>
      <div className='flex justify-end space-x-6 items-center w-full'>
        <div className='flex items-center justify-end'>
          <div
            className='relative flex items-center hover:bg-gray-500 rounded-full p-1 cursor-pointer'
            onClick={() => setToggle(!toggle)}
          >
            <IonIcon name='add-outline' size='large'></IonIcon>
          </div>
          {toggle && (
            <div className='absolute top-0 bg-white rounded mt-14 overflow-hidden py-2 '>
              <ul className='text-black'>
                <li
                  className='hover:bg-gray-200 py-2 px-6 cursor-pointer'
                  onClick={() => {
                    setAddClassModal(true);
                    setToggle(!toggle);
                  }}
                >
                  Add Class
                </li>
                <li className='hover:bg-gray-200 py-2 px-6 cursor-pointer'>
                  Join Class
                </li>
              </ul>
            </div>
          )}
        </div>

        <div className='h-8 w-8 bg-white rounded-full cursor-pointer'></div>
      </div>
    </div>
  );
};

export default Navbar;
