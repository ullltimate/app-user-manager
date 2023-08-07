import Form from 'react-bootstrap/Form';

function Input(props: any) {
    return (
      <>
        <Form.Group className="mb-3" controlId={props.id}>
            <Form.Label>{props.label}</Form.Label>
            <Form.Control value={props.value} type={props.type} placeholder={props.placeholder} onChange={(e) => props.setValue(e.target.value)}/>
        </Form.Group>
      </>
    )
}

export default Input