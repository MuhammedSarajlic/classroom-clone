import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import GoogleLogo from '../assets/google-icon.svg';
import { setCookie } from 'typescript-cookie';
import { Context } from '../helper/Context';

export const Login = () => {
  const navigate = useNavigate();
  const token = useContext(Context);
  const [userCred, setUserCred] = useState({
    email: '',
    password: '',
  });

  const updateData = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setUserCred({ ...userCred, [e.target.name]: e.target.value });
  };

  const checkUser = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    axios
      .post('https://localhost:7155/api/login', userCred)
      .then((res) => {
        console.log(res);
        setCookie('jwt_token', res.data);
        navigate('/');
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <section className=''>
        <div className='flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0'>
          <a
            href='#'
            className='flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white'
          >
            Classroom
          </a>
          <div className='w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700'>
            <div className='p-6 space-y-4 md:space-y-6 sm:p-8'>
              <h1 className='text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white'>
                Sign In
              </h1>
              <form className='space-y-4 md:space-y-6' onSubmit={checkUser}>
                <div>
                  <label
                    htmlFor='email'
                    className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                  >
                    Your email
                  </label>
                  <input
                    type='email'
                    name='email'
                    id='email'
                    value={userCred.email}
                    onChange={updateData}
                    className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                    placeholder='name@company.com'
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor='password'
                    className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                  >
                    Password
                  </label>
                  <input
                    type='password'
                    name='password'
                    id='password'
                    value={userCred.password}
                    onChange={updateData}
                    placeholder='••••••••'
                    className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                    required
                  />
                </div>

                <div>
                  <div className='w-full flex items-center'>
                    <div className='w-1/2 h-[1px] bg-gray-600 mr-3'></div>
                    <div>
                      <p className='text-gray-400'>or</p>
                    </div>
                    <div className='w-1/2 h-[1px] bg-gray-600 ml-3'></div>
                  </div>
                  <div className='flex justify-center border-[1px] border-gray-600 rounded-lg py-2.5 my-4 cursor-pointer hover:bg-gray-700'>
                    <a className='text-sm flex items-center space-x-2'>
                      <img
                        src={GoogleLogo}
                        alt='Google logo'
                        className='w-5 h-5'
                      />
                      <p>Sign in with Google</p>
                    </a>
                  </div>
                </div>
                <button
                  type='submit'
                  className='w-full flex justify-center text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800'
                >
                  Sign In
                </button>
                <p className='text-sm font-light text-gray-500 dark:text-gray-400'>
                  Don't have an account?{' '}
                  <Link
                    to='/register'
                    className='font-medium text-primary-600 hover:underline dark:text-primary-500'
                  >
                    Register here
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
