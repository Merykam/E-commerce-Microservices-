'use client';
import Header from '@/components/header';
import Sidebar from '@/components/Sidebar';
import Mobile from '@/components/mobile';
import Main from '@/components/main';
import Footer from '@/components/footer';
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
        <Sidebar />
        <Main>{children}</Main>
      </div>
    </>
  );
};

export default Layout;
