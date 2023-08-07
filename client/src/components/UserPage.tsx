import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import User from './User';
import Header from './Navbar';
import { Container, Spinner } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { getUsers } from '../action/getUsers';

function Users() {
  const [users, setUsers] = useState<any>(null);
  const [isLoader, setLoader] = useState(true);

  useEffect(() => {
    getUsers(setUsers, setLoader);
  },[])
  console.log(users)

  return (
    <> 
      <Header />
      <Container>
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
            { 
              isLoader 
              ? 
              <tr><td colSpan={7}>
                <div className="text-center">
                  <Spinner className='m-5' animation="border" variant="secondary" />
                </div>
              </td></tr>
              :
              users.map((el: any) => <User key={el._id} id={el._id} name={el.name} email={el.email} dateSignUp={el.signUp} dateSignIn={el.signIn} status={el.status}/>)
            }
            </tbody>
        </Table>
      </Container>
    </>
  )
}

export default Users