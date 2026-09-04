import { Form, Button, Card, Container, Row, Col, Alert, Table, FormControl} from "react-bootstrap";
import { useEffect, useState } from "react";
import api from "../services/api";
import AppModal from "../components/AppModal";
import UserForm from "../components/UserForm";

const User = () => {
    const [show, setShow] = useState(false);
    const [users, setUsers] = useState([]);

    const [loading, setLoading] = useState(false);
    const [submitLoading, setSubmitLoading] = useState(false);

    const [isEdit, setIsEdit] = useState(false);
    const [validationError, setValidationError] = useState({});

    const initialForm = {
        id: null,
        name: "",
        email: "",
        password: "",
        status: true,
    };

    const [formData, setFormData] = useState(initialForm); 

    //useEffect
    const fetchUsers = async() => {
        setLoading(true);
        try {
            const response = await api.get('/user');
            const result = response.data;
            setUsers(result);
        } catch (error) {
            console.log("Error fetching user", error);
        } finally{
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchUsers();
    }, []);
    
    const handleCreate = () => {
        setIsEdit(false);
        setFormData(initialForm);
        setShow(true);
    }
    
    const handleCloseModal = () => {
        setShow(false);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        setSubmitLoading(true);
        try {
            const payload = {...formData };
            const response = await api.post("/user", payload);
            // if (response.data && response.data.data) {
            //     setUsers(response.data.data);
            // } else {
            //     setUsers(response.data);
            // }
            setShow(false);
            fetchUsers();
        } catch (error) {
            console.log(error.message);
            

            if (error.response) {
                if (error.response.status === 422 && error.response.data.error) {
                    const rawErrors = error.response.data.error;
                    const formatError = {};

                    Object.keys(rawErrors).forEach((key) => {
                        formatError[key] = rawErrors[key][0];
                    });
                    
                    setValidationError(formatError);
                } else {
                    const errMsg = error.response?.data?.message || "Internal Server Error!";
                    setError("Server Error!");
                    alert(errMsg);
                }
            }
        } finally {
            setSubmitLoading(false);
        }
    }

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
                            <Button variant="outline-primary" onClick={handleCreate}>+ Create New User</Button>
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
                                {users.map((user, index) => (
                                    <tr key={user.id}>
                                        <td className="text-center">{index + 1}</td>
                                        <td>{user.name}</td>
                                        <td>{user.email}</td>
                                        <td>{user.status}</td>
                                        <td className="d-flex gap-2">
                                            <Button variant="outline-warning" size="sm">Edit</Button>
                                            <Button variant="outline-success" size="sm">Detail</Button>
                                            <Button variant="outline-danger" size="sm">Delete</Button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </Row>
                </Card.Body>
            </Card>

            <AppModal 
                show        = {show} 
                handleClose = {handleCloseModal}
                title       = {isEdit ? "Edit user" : "Create New User"}
                submitText  = {isEdit ? "Save Changes" : "Save"}
                variant     = {isEdit ? "Warning" : "Primary"}
                isLoading   = {submitLoading}
                formId      = "user-form"
            >
                <UserForm error={validationError} formId="user-form" formData={formData} setFormData={setFormData} onSubmit={handleSubmit}/>
            </AppModal>
        </Container>

    );
};

export default User;