import TableRow from './TableRow';

const TableBody = ({ data, fields }) => {
  return (
    <tbody>
      {data.map((item) => (
        <TableRow element={item} fields={fields} />
      ))}
    </tbody>
  );
};

export default TableBody;
