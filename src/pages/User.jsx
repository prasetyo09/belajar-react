import { Form, Button, Card, Container, Row, Col, Alert, Table} from "react-bootstrap";

const User = () => {
    return (
        <Container className="d-flex justify-content-center align-content-center py-4">
            <Card className="shadow-sm border-0 p-4 bg-primary bg-opacity-25">
                <Card.Body className="p-4">
                    <Row className="mb-4 align-items-center">
                        <Col>
                            <h2 className="fw-bold">User Management</h2>
                            <p className="text-muted mb-0">Information for user application</p>
                        </Col>
                        <Col xs="auto">
                            <Button variant="outline-primary">+ Create New User</Button>
                        </Col>
                    </Row>
                    <Row>
                        <Table responsive hover bordered className="align-middle">
                            <thead className="table-light">
                                <tr className="text-center">
                                    <th>No</th>
                                    <th>Nama</th>
                                    <th>Email</th>
                                    <th>Status</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="text-center">
                                    <td>1</td>
                                    <td>Prasetyo</td>
                                    <td>prasetyoari.id@gmail.com</td>
                                    <td>Active</td>
                                    <td className="d-flex gap-2">
                                        <Button variant="primary" className="btn btn-sm">Edit</Button>
                                        <Button variant="success" className="btn btn-sm">Detail</Button>
                                        <Button variant="danger" className="btn btn-sm">Delete</Button>
                                    </td>
                                </tr>
                                <tr className="text-center">
                                    <td>2</td>
                                    <td>Prasetyo</td>
                                    <td>prasetyoari.id@gmail.com</td>
                                    <td>Active</td>
                                    <td className="d-flex gap-2">
                                        <Button variant="primary" className="btn btn-sm">Edit</Button>
                                        <Button variant="success" className="btn btn-sm">Detail</Button>
                                        <Button variant="danger" className="btn btn-sm">Delete</Button>
                                    </td>
                                </tr>
                                <tr className="text-center">
                                    <td>3</td>
                                    <td>Prasetyo</td>
                                    <td>prasetyoari.id@gmail.com</td>
                                    <td>Active</td>
                                    <td className="d-flex gap-2">
                                        <Button variant="primary" className="btn btn-sm">Edit</Button>
                                        <Button variant="success" className="btn btn-sm">Detail</Button>
                                        <Button variant="danger" className="btn btn-sm">Delete</Button>
                                    </td>
                                </tr>
                                <tr className="text-center">
                                    <td>4</td>
                                    <td>Prasetyo</td>
                                    <td>prasetyoari.id@gmail.com</td>
                                    <td>Active</td>
                                    <td className="d-flex gap-2">
                                        <Button variant="primary" className="btn btn-sm">Edit</Button>
                                        <Button variant="success" className="btn btn-sm">Detail</Button>
                                        <Button variant="danger" className="btn btn-sm">Delete</Button>
                                    </td>
                                </tr>
                            </tbody>
                        </Table>
                    </Row>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default User;