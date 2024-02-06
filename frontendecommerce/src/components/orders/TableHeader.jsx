const TableHeader = ({ fields }) => {
  return (
    <>
      {fields && (
        <thead className="w-full bg-black rounded">
          <tr>
            {fields.map((field) => (
              <th
                className="py-2 font-medium text-white text-start px-2 "
                key={field}
              >
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
