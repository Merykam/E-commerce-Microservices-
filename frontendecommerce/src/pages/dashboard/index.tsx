import { useEffect } from 'react';
import { useRouter } from 'next/router';

function Dashboard() {
  const router = useRouter();
  useEffect(() => {
    const isAuthenticated = true;

    if (!isAuthenticated) {
      router.push('/auth/login');
    }
  }, []);

  return (
    <div>
      <h1>Dashboard</h1>
    </div>
  );
}

export default Dashboard;
