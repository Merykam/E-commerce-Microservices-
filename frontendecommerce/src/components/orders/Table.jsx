import TableHeader from './TableHeader';
import TableBody from './TableBody';
import ReactLoading from 'react-loading';
const Table = ({ data, fields }) => {
  return (
    <>
      {fields && data && data.length != 0 && (
        <table className="w-full my-8">
          <TableHeader fields={fields} />
          {data && <TableBody data={data} fields={fields} />}
          {!data && (
            <ReactLoading
              type={'balls'}
              color={'#000'}
              height={'1em'}
              width={'2em'}
              className={'m-auto'}
            />
          )}
        </table>
      )}
      {fields && data && data.length == 0 && (
        <h3 className="text-center my-8 font-semibold text-xl">
          There is no Orders for the moment
        </h3>
      )}
    </>
  );
};

export default Table;
