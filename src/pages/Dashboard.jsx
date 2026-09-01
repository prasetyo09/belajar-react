import { Form, Button, Card, Container, Row, Col, Alert, Table} from "react-bootstrap";

const Dashboard = () => {
    return (
        <Container className="d-flex justify-content-center align-content-center" bg="info">
            <Card className="shadow-sm border-0 p-4">
                <Card.Body className="p-4">
                    <h2>Selamat Datang di Dashboard</h2>
                    <p className="text-muted ">Login Successfully!!!</p>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default Dashboard;