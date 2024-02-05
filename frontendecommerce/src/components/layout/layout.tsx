'use client';
import Header from '../header';
import Sidebar from '../Sidebar';
import Mobile from '../mobile';
import Main from '../main';
import Footer from '../footer';
import React, { ReactNode } from 'react';

interface DashboardProps {
  children: ReactNode;
}

const Layout: React.FC<DashboardProps> = ({ children }) => {
  return (
    <>
      <div className="bg-gray-50">
        <Header />
        <Mobile />
        
        {/* <Mobile /> */}
        <Sidebar />
       
        <Main>{children}</Main>
       
        
  
      
      </div>
    </>
  );
};

export default Layout;
