const OrderStatus = ({ status }) => {
  let color = '';
  if (status == 'Pending') color = 'yellow';
  return (
    <span
      className={`bg-${color}-200 text-${color}-500 font-semibold px-2 py-1 rounded`}
    >
      {status}
    </span>
  );
};

export default OrderStatus;
