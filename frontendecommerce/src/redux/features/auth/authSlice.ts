import { createSlice } from '@reduxjs/toolkit';
import { authEntity } from './entity.auth';

const initialState: authEntity = {
  
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setLogin: (state, action) => {
      // console.log(action.payload);
      
    },
    setLogout: (state, action) => {
      // state.username = '';
      // state.email = '';
      // state.password = '';
    },
  },
});

export const { setLogin, setLogout } = authSlice.actions;

export default authSlice.reducer;
