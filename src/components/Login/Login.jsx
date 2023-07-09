import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Register from './Register';

function Login() {
  return (
    <div style={{ margin: "2vw 30vw" }}>
      <Form action='http://172.16.30.30:5555/ex/login' method='post'>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" name='email' />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" name='password' />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Check
            required
            label="Agree to terms and conditions"
            feedback="You must agree before submitting."
            feedbackType="invalid"
          />
        </Form.Group>
        <Button variant="primary" type="submit" >
          Submit
        </Button>
      </Form>
      <div>
        <hr />
        Not having an account <a href="/register">Register</a>
      </div>
    </div>
  );
}

export default Login;
