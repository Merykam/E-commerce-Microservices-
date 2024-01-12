import { setLogin } from '@/redux/features/auth/authSlice';
import {
  useLoginMutation,
  useRegisterMutation,
} from '@/redux/service/auth/authApi';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';



export const LoginService = async (request: object) => {
  const dispatch = useDispatch();
  const [login, { isLoading, error, data }] = useLoginMutation();
  console.log(request);

  await login(request);

  useEffect(() => {
    if (data) {
      dispatch(setLogin(data));
    }

    if (error) {
      console.log(error);
    }
  }, [data, error]);

  return { login, isLoading, error };
};

export const RegisterService = () => {
  const dispatch = useDispatch();
  const [register, { isLoading, error, data }] = useRegisterMutation();

  useEffect(() => {
    if (data) {
      console.log(data);
    }
  }, [data, dispatch]);

  return { register, isLoading, error };
};
