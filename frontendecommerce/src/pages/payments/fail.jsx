import React from 'react';
import { useRouter } from 'next/router';
const FailedPage = () => {
  const router = useRouter();
  const { message } = router.query;
  return (
  <>
    <div style={{ backgroundColor: 'rgb(0, 0, 75)', height: '52px' }}>
    {/* Logo goes here */}
  </div>
  <div style={{ textAlign: 'center', margin: '200px auto', fontFamily: 'Helvetica, Arial, sans-serif' }}>
    <h1 style={{ fontSize: '32px', lineHeight: '40px', margin: '0' }}>Sorry, something went wrong</h1>
    <p style={{ margin: '12px 0 40px', fontSize: '14px' }}>{message}</p>
    <a
      style={{
        backgroundColor: 'rgb(80, 130, 230)',
        color: 'white',
        borderRadius: '4px',
        backgroundImage: 'linear-gradient(310deg, rgb(150, 120, 255), rgb(80, 130, 230))',
        padding: '8px 24px',
        textDecoration: 'none',
        fontSize: '18px',
        fontWeight: '100'
      }}
      href="http://status.confluent.cloud"
    >
      View status page
    </a>
  </div>
</>
    
    
  );
};

export default FailedPage;