import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

function LoginOne() {
  return (
    <Form action='http://172.16.30.30:5555/login' method='post'>
      <Row>
        <Col>
          <Form.Control placeholder="Email" name='email'/>
        </Col>
        <Col>
          <Form.Control placeholder="Password" name='password'/>
        </Col>
      </Row>
      <input type="submit" />
    </Form>
  );
}

export default LoginOne;
