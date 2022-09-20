import Table from "react-bootstrap/Table";
import 'bootstrap/dist/css/bootstrap.min.css';

function ResponsiveBreakpoints() {
  return (
    <div>
      <Table responsive="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>Company</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td></td>
            <td>catalog</td>
          </tr>
        </tbody>
      </Table>
      <Table responsive="md">
        <thead>
          <tr>
            <th>#</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td></td>
            <td>customer</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default ResponsiveBreakpoints;
