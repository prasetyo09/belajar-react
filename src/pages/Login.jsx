import { Form, Button, Card, Container, Row, Col, Alert, FormControl} from "react-bootstrap";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const response = await api.post(`/login`, {
                email, password,
            });
            
            localStorage.setItem("token", response.token);
            navigate("/dashboard");

        } catch (error) {
            // console.log(error.response);
            if (error.response) {
                if (error.response.status === 422 && error.response.data.error) {
                    const rawErrors = error.response.data.error;
                    const formatError = {}
                    Object.keys(rawErrors).forEach((key) => {
                        formatError[key] = rawErrors[key][0];
                    })
                    setError(formatError);
                } else if (error.response.status === 401) {
                    setError(error.response.data.message || "Please check your email and password!");
                } 
            } else {
                setError("Server Error!");
            }
        } finally {
            setLoading(false);
        }
    }

    return (
        <Container className="d-flex justify-content-center align-content-center">
            <Row className="w-100 d-flex justify-content-center">
                <Col md={6} lg={4}>
                    <Card className="shadow-sm border-0">
                        <Card.Body className="p-4">

                            {/* {error && <Alert variant="danger">{error}</Alert>} */}
                            <Form onSubmit={handleLogin}>
                                <h3 className="text-center mb-4 font-weight-bold">Login Form</h3>
                                <Form.Group className="mb-3">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" placeholder="Masukkan Email" value={email} onChange={(e) => setEmail(e.target.value)} isInvalid={!!error?.email}></Form.Control>
                                    <FormControl.Feedback type="invalid">
                                        {error?.email}
                                    </FormControl.Feedback>
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Masukkan Password" value={password} onChange={(e) => setPassword(e.target.value)} isInvalid={!!error?.password}></Form.Control>
                                    <FormControl.Feedback type="invalid">
                                        {error?.password}
                                    </FormControl.Feedback>
                                </Form.Group>
                                <Button type="submit" className="w-100 btn btn-primary" disabled={loading}>
                                    {loading ? "Loading..." : "Login"}
                                </Button>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default Login;