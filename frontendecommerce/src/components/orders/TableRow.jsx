const TableRow = ({ element, fields }) => {
  fields.map((field) => {
    console.log(element[field]);
  });
  return (
    <tr>
      {fields.map((field) => (
        <td className="text-black" key={element[field]}>
          {element[field]}
        </td>
      ))}
    </tr>
  );
};

export default TableRow;
