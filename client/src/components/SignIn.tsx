import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import Input from './Input';
import { login } from '../action/newUser';
import { useNavigate } from 'react-router-dom';
import Header from './Navbar';
import { Container } from 'react-bootstrap';

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassord] = useState('');
  const navigate = useNavigate();

  async function singIn(){
    await login(email, password);
    if(localStorage.getItem('tokenUser')){
      navigate(`/user/${localStorage.getItem('userId')}`)
    }
  }
  
  return (
    <>
      <Header />
      <Container>
        <h3 className='px-3 pt-3'>AUTORIZATION</h3>
        <Form className='p-3'>
            <Input value={email} id={'email'} placeholder={"Enter email"} type={'email'} label={'Email address'} setValue={setEmail}/>
            <Input value={password} id={'password'} placeholder={"Password"} type={'password'} label={'Password'} setValue={setPassord}/>
            <Button variant="secondary" onClick={() => singIn()}>
              Sign In
            </Button>
        </Form>
      </Container>
    </>
  )
}

export default SignIn