'use client';
import NavBar from '../navBar';
import React, { ReactNode } from 'react';
import { RootState } from '../../redux/store';
import { useSelector } from 'react-redux';
interface DashboardProps {
  children: ReactNode;
}

const LayoutHome: React.FC<DashboardProps> = ({ children }) => {

  const cart = useSelector((state: RootState) => state.cart.shoppingCart);
  return (
    <>
      <div>
        <NavBar/>
        <div>{children}</div>
      </div>
    </>
  );
};

export default LayoutHome;
