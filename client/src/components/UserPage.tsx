import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import users from './helpUsers';
import User from './User';

function Users() {
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
              {users.map(el => <User id={el.id} name={el.name} email={el.email} dateSignUp={el.singUpdate} dateSignIn={el.singIndate} status={el.status}/>)}
            </tbody>
        </Table>
    </>
  )
}

export default Users