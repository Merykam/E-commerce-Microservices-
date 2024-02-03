import React, { ReactNode } from 'react';

interface DashboardProps {
  children: ReactNode;
}

const Main: React.FC<DashboardProps> = ({ children }) => {
  return (
    <>
      <div className="w-full pt-10 py-8 px-4 sm:px-6 md:px-8 lg:ps-72">
        <main>{children}</main>
      </div>
    </>
  );
};

export default Main;
