'use client';
import { Box  } from '@mui/material';
import Header from '@/components/cart/Header';
import SideBar from '@/components/cart/Sidebar';
import Main from '@/components/cart/Main';


export default function cart() {
  return (
    <>
      <Box>
      <Header />
      <SideBar/>
      <Main />
      </Box>
    </>
  );
}
