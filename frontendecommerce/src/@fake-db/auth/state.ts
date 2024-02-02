'use client';
import { useEffect, useState } from 'react';
import { useLoginMutation } from '@/redux/service/auth/authApi';
import { setLogin } from '@/redux/features/auth/authSlice';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';

export const StateLogin = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [login, { isLoading, error, data, isSuccess }] = useLoginMutation();

  const state = {
    email: '',
    password: '',
  };

  const [statelogin, setStateLogin] = useState(state);

  const handleChange = (event: any) => {
    setStateLogin({
      ...statelogin,
      [event.target.name]: event.target.value,
    });
  };

  const handleCheck = (event: any) => {
    setStateLogin({
      ...statelogin,
      [event.target.name]: event.target.checked,
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    await login(statelogin);
  };

  useEffect(() => {
    (async () => {
      await dispatch(setLogin(data?.data));

      if (isSuccess) {
        toast.success(`Welcome, you are logged in successfully`);
        router.push('/dashboard');
      }
    })();
  }, [data, isSuccess]);

  return { statelogin, handleChange, handleCheck, handleSubmit };
};
