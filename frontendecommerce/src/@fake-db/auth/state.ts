import { useEffect, useState } from 'react';
import { useLoginMutation } from '@/redux/service/auth/authApi';
import { setLogin } from '@/redux/features/auth/authSlice';
import { useDispatch } from 'react-redux';
import { toast } from "react-toastify";

export const StateLogin = () => {
  const dispatch = useDispatch();
  const [login, { isLoading, error, data }] = useLoginMutation();

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

  const handleSubmit = (e: any) => {
    e.preventDefault();

    login(statelogin);
  };

  useEffect(() => {
    (async () => {
      if (data?.data[0].message == 'Invalid password') {
        return  toast.error("All is Required");
      } else if (data?.data[0].message == 'Invalid email') {
        return  toast.error("All is Required");
      }
      await dispatch(setLogin(data));
    })();
  }, [data]);

  return { statelogin, handleChange, handleCheck, handleSubmit };
};
