import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Input from './Input';
import { registration } from '../action/newUser';

function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassord] = useState('');

  return (
    <>  
        <h3 className='px-3 pt-3'>REGISTRATION</h3>
        <Form className='p-3'>
          <Input value={name} id={'name'} placeholder={"Name"} type={'text'} label={'Name'} setValue={setName}/>
          <Input value={email} id={'email'} placeholder={"Enter email"} type={'email'} label={'Email address'} setValue={setEmail}/>
          <Input value={password} id={'password'} placeholder={"Password"} type={'password'} label={'Password'} setValue={setPassord}/>
          <Button variant="secondary" onClick={() => registration(name, email, password)}>
            Sign Up
          </Button>
        </Form>
    </>
  )
}

export default SignUp