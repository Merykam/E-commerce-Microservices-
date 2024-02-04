import OrderStatus from './OrderStatus';

const TableRow = ({ element, fields }) => {
  return (
    <tr>
      {fields.map((field) => (
        <td className="p-2" key={field}>
          {field != 'status' ? (
            element[field]
          ) : (
            <OrderStatus status={element[field]}></OrderStatus>
          )}
        </td>
      ))}
    </tr>
  );
};

export default TableRow;
