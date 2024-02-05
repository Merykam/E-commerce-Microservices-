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
<<<<<<< HEAD:frontendecommerce/src/pages/dashboard/layout.tsx
        <Mobile />
        
=======
        {/* <Mobile /> */}
>>>>>>> b23c1f996c6e628f75f0d5f1885c0c8fc90d78dc:frontendecommerce/src/components/layout/layout.tsx
        <Sidebar />
       
        <Main>{children}</Main>
       
        
  
      
      </div>
    </>
  );
};

export default Layout;
