import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link, Outlet } from 'react-router-dom';

function App() {
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
