const TableHeader = ({ fields }) => {
  console.log(fields);
  return (
    <>
      {fields && (
        <thead className="w-full bg-blue-300 rounded">
          <tr>
            {fields.map((field) => (
              <th className="py-2 font-medium text-start px-2 " key={field}>
                {field}
              </th>
            ))}
          </tr>
        </thead>
      )}
    </>
  );
};

export default TableHeader;
