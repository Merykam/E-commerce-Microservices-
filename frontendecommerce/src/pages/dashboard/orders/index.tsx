import Head from 'next/head';
import Dashboard from '../layout';
import Table from '@/components/orders/Table';
import OrdersIcon from '@/icons/OrdersIcon';
// import '_/styles/orders.css';

const orders = () => {
  return (
    <Dashboard>
      <Head>
        <title>E-commerce Orders</title>
      </Head>
      <h1 className="text-blue-900 text-3xl font-bold flex gap-3">
        {' '}
        <OrdersIcon className={`h-[1.2em] fill-blue-900`} /> Orders
      </h1>
      <Table data={[]} fields={['id', 'price']}></Table>
    </Dashboard>
  );
};

export default orders;
