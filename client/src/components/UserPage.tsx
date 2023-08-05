import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';

function User() {
  return (
    <>
        <ButtonGroup aria-label="Basic example" className='py-3 justify-content-end'>
            <Button variant="secondary"><i className="bi bi-lock"></i></Button>
            <Button variant="secondary"><i className="bi bi-unlock"></i></Button>
            <Button variant="secondary"><i className="bi bi-trash"></i></Button>
        </ButtonGroup>
        <Table striped bordered hover>
            <thead>
              <tr>
                <th>
                    <Form>
                        <Form.Check type={'checkbox'} id={`default-checkbox`} />
                    </Form>
                </th>
                <th>Id</th>
                <th>Name</th>
                <th>Email</th>
                <th>SignUp date</th>
                <th>SignIn date</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                    <Form>
                        <Form.Check type={'checkbox'} id={`default-checkbox`} />
                    </Form>
                </td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>@mdo</td>
                <td>@mdo</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <td>
                    <Form>
                        <Form.Check type={'checkbox'} id={`default-checkbox`} />
                    </Form>
                </td>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
                <td>@fat</td>
                <td>@fat</td>
                <td>@fat</td>
              </tr>
            </tbody>
        </Table>
    </>
  )
}

export default User