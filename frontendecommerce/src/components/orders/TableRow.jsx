import OrderStatus from './OrderStatus';

const TableRow = ({ element, fields }) => {
  return (
    <tr>
      {fields.map((field) => (
        <td className="p-2" key={field}>
          {element.orderItems && element.orderItems.length > 0 ? (
            element.orderItems[element.orderItems.length - 1].product &&
            element.orderItems[element.orderItems.length - 1].product[field] !==
              undefined ? (
              element.orderItems[element.orderItems.length - 1].product[field]
            ) : element.orderItems[element.orderItems.length - 1][field] !==
              undefined ? (
              element.orderItems[element.orderItems.length - 1][field]
            ) : (
              element[field]
            )
          ) : field == 'status' ? (
            <OrderStatus status={element[field]}></OrderStatus>
          ) : (
            element[field]
          )}
        </td>
      ))}
    </tr>
  );
};

export default TableRow;
