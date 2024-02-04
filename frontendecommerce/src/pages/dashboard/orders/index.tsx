import Head from 'next/head';
import Dashboard from '@/components/layout/layout';
import Table from '@/components/orders/Table';
import OrdersIcon from '@/icons/OrdersIcon';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import { useEffect } from 'react';
import { fetchOrders } from '@/redux/features/order/orderSlice';
import { OrderEntity } from '@/redux/features/order/OrderEntity';

const orders = () => {
  const dispatch = useDispatch();
  const orders = useSelector((state: RootState) => state?.order?.orders);

  useEffect(() => {
    if (!orders.length) dispatch(fetchOrders());
  }, [dispatch]);

  return (
    <Dashboard>
      <Head>
        <title>E-commerce Orders</title>
      </Head>
      <h1 className="text-blue-900 text-3xl font-bold flex gap-3">
        {' '}
        <OrdersIcon className={`h-[1.2em] fill-blue-900`} /> Orders
      </h1>
      <Table
        data={orders}
        fields={['id', 'quantity', 'totalPrice', 'status', 'paid']}
      ></Table>
    </Dashboard>
  );
};

export default orders;
