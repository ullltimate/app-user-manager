import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import Input from './Input';

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassord] = useState('');
  
  return (
    <>
      <Form className='p-3'>
          <Input value={email} id={'email'} placeholder={"Enter email"} type={'email'} label={'Email address'} setValue={setEmail}/>
          <Input value={password} id={'password'} placeholder={"Password"} type={'password'} label={'Password'} setValue={setPassord}/>
          <Button variant="primary" type="submit">
            Sign In
          </Button>
      </Form>
    </>
  )
}

export default SignIn