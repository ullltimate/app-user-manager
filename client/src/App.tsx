import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Container from 'react-bootstrap/Container';
import Header from './components/Navbar';
import SignUp from './components/SignUp';
import './App.css';

function App() {
  return (
    <>
      <Header />
      <Container>
        <SignUp />
      </Container>
    </>
  )
}

export default App
