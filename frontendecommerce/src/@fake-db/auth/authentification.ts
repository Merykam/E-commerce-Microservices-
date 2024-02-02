'use client';
import { useEffect, useState } from 'react';
import {
  useLoginMutation,
  useRegisterMutation,
} from '@/redux/service/auth/authApi';
import { setLogin } from '@/redux/features/auth/authSlice';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';

export const StateLogin = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [login, { isLoading, error, data, isSuccess, isError }] =
    useLoginMutation();

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

      if (isError) {
        toast.error(error?.data?.message);
      }

      if (isSuccess) {
        toast.success(`Welcome, you are logged in successfully`);
        router.push('/dashboard');
      }
    })();
  }, [data, isSuccess, isError, error]);

  return { statelogin, handleChange, handleCheck, handleSubmit };
};

export const StateRegister = () => {
  const router = useRouter();
  const [register, { isLoading, error, data, isSuccess, isError }] =
    useRegisterMutation();
  const state = {
    username: '',
    email: '',
    password: '',
    passwordConfirm: '',
  };

  const [stateregister, setStateRegister] = useState(state);

  const handleChange = (event: any) => {
    setStateRegister({
      ...stateregister,
      [event.target.name]: event.target.value,
    });
  };

  const handleCheck = (event: any) => {
    setStateRegister({
      ...stateregister,
      [event.target.name]: event.target.checked,
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    await register(stateregister);
  };

  useEffect(() => {
    (async () => {
      if (isSuccess) {
        toast.success(
          `You have registered successfully. Please verify your email.`,
        );
        router.push('/auth/login');
      }

      if (isError) {
        console.log(error);
        
        toast.error(error?.data?.message[0]);
      }
    })();
  }, [data, isSuccess, isError, error]);

  return { stateregister, handleChange, handleCheck, handleSubmit };
};
