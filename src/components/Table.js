import { Table } from "react-bootstrap";

const MyTable = () => {
  return (
    <Table className='w-50 table-bordered text-center'>
      <thead className='table-dark'>
        <tr>
          <th>No</th>
          <th>Name</th>
          <th>Language</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Kurniawan Cristianto</td>
          <td>Javascript</td>
        </tr>
      </tbody>
    </Table>
  );
};

export default MyTable;
