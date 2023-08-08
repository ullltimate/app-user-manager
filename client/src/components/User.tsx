import Form from 'react-bootstrap/Form';

function User(props: any) {
  return (
    <>
        <tr>
          <td>
              <Form>
                  <Form.Check type={'checkbox'} id={props.id} onChange={props.onchange} checked={props.checked}/>
              </Form>
          </td>
          <td>{props.id}</td>
          <td>{props.name}</td>
          <td>{props.email}</td>
          <td>{props.dateSignUp}</td>
          <td>{props.dateSignIn}</td>
          <td>{props.status}</td>
        </tr>
    </>
  )
}

export default User