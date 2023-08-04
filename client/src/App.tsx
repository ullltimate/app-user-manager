//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
//import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
//import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, Outlet } from 'react-router-dom';

function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container className='justify-content-end'>
            <Link className='p-3 text-white text-decoration-none' to={'/'}>Sign Up</Link>
            <Link className='p-3 text-white text-decoration-none' to={"/signIn"}>Sign In</Link>
        </Container>
      </Navbar>
      <Container>
        <Outlet />
      </Container>
    </>
  )
}

export default App
