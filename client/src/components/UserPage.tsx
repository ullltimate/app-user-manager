import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import User from './User';
import Header from './Navbar';
import { Container, Spinner } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { getUsers } from '../action/getUsers';
import { useNavigate, useParams } from 'react-router-dom';
import { deleteUsers, removeUsers } from '../action/deleteUser';
import { updateStatus, updateUsers } from '../action/updateStatus';

function Users() {
  const [users, setUsers] = useState<any>(null);
  const [isLoader, setLoader] = useState(true);
  const [all, setAll] = useState(false);
  const [checkboxes, setCheckboxes] = useState<any>([]);
  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    all ? setCheckboxes(users.map((el: any) => el._id)) : setCheckboxes([]);
  }, [all]);


  const changeCheckboxes = (id: any) => {
    setCheckboxes(
      checkboxes.includes(id)
        ? checkboxes.filter((el: any) => el !== id)
        : [...checkboxes, id]
    );
  };
  console.log(checkboxes)

  useEffect(() => {
    getUsers(setUsers, setLoader);
  },[])
  console.log(users)
  console.log(params.id)

  return (
    <> 
      <Header />
      <Container>
        <ButtonGroup aria-label="Basic example" className='py-3 justify-content-end'>
            <Button variant="secondary" onClick={() => {all ? updateUsers('block', navigate, setUsers, setLoader, setCheckboxes, setAll) : updateStatus('block', checkboxes, params.id, setCheckboxes, navigate, setUsers, setLoader)}}><i className="bi bi-lock"></i></Button>
            <Button variant="secondary" onClick={() => {all ? updateUsers('unblock', navigate, setUsers, setLoader, setCheckboxes, setAll) : updateStatus('unblock', checkboxes, params.id, setCheckboxes, navigate, setUsers, setLoader)}}><i className="bi bi-unlock"></i></Button>
            <Button variant="secondary" onClick={() => {all ? deleteUsers(navigate) : removeUsers(checkboxes, params.id, setCheckboxes, navigate, setUsers, setLoader)}}><i className="bi bi-trash"></i></Button>
        </ButtonGroup>
        <Table striped bordered hover>
            <thead>
              <tr>
                <th>
                    <Form>
                        <Form.Check type={'checkbox'} id={`default-checkbox`} onChange={() => setAll(!all)} checked={all}/>
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
              users && users.map((el: any) => <User key={el._id} id={el._id} name={el.name} email={el.email} dateSignUp={el.signUp.slice(0, 10)} dateSignIn={el.signIn.slice(0,10)} status={el.status} onchange={(event:any) => changeCheckboxes(event.target.id)} checked={checkboxes.includes(el._id)}/>)
            }
            </tbody>
        </Table>
      </Container>
    </>
  )
}

export default Users