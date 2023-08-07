import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useNavigate,} from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';

function Header() {
  const [token, setToken] = useState<string|null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if(localStorage.getItem('tokenUser')){
      setToken(localStorage.getItem('tokenUser'));
    }
  })

  function logOut(){
    localStorage.removeItem('tokenUser');
    localStorage.removeItem('userId');
    navigate('/')
  }

  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container className='justify-content-end'>
            { !token ?
            <>
              <Link className='p-3 text-white text-decoration-none' to={'/'}>Sign Up</Link>
              <Link className='p-3 text-white text-decoration-none' to={"/signIn"}>Sign In</Link>
            </>
              : <Button className='p-3 btn-dark' onClick={logOut}>Log out</Button>
            }
        </Container>
      </Navbar>
    </>
  )
}

export default Header