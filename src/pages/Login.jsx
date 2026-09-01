import { Form, Button, Card, Container, Row, Col, Alert } from "react-bootstrap";

const Login = () => {
    return (
        <Container className="d-flex justify-content-center align-content-center">
            <Row className="w-100 d-flex justify-content-center">
                <Col md={6} lg={4}>
                    <Card className="shadow-sm border-0">
                        <Card.Body className="p-4">
                            <h3 className="text-center mb-4 font-weight-bold">Login Form</h3>
                            <Form.Group className="mb-3">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="Masukkan Email"></Form.Control>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Masukkan Password"></Form.Control>
                            </Form.Group>
                            <Button type="submit" className="btn btn-primary">Log In</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default Login;