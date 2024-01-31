'use client';
import NavBar from '../navbar';
import React, { ReactNode } from 'react';

interface DashboardProps {
  children: ReactNode;
}

const LayoutHome: React.FC<DashboardProps> = ({ children }) => {
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
