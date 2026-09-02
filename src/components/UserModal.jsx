import { Modal, Button, Form } from "react-bootstrap";

const UserModal = ({show, handleClose}) => {
    return (
        <>
            <Modal show={show} onHide={handleClose} centered>
                <Modal.Header closeButton>
                    <Modal.Title className="fw-bold">Add New User</Modal.Title>
                </Modal.Header>

                <Form>    
                    <Modal.Body>
                        <Form.Group className="mb-3">
                            <Form.Label className="fw-semibold">Name</Form.Label>
                            <Form.Control type="text" name="name" placeholder="Enter Your Name" required></Form.Control>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label className="fw-semibold">Email</Form.Label>
                            <Form.Control type="email" name="email" placeholder="Enter Your Email" required></Form.Control>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label className="fw-semibold">Password</Form.Label>
                            <Form.Control type="password" name="password" placeholder="Enter Your Password" required></Form.Control>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label className="fw-semibold">Status</Form.Label>
                            <Form.Select name="status" id="status">
                                <option value="1">Active</option>
                                <option value="0">Non-Active</option>
                            </Form.Select>
                        </Form.Group>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button type="submit" variant="primary" onClick={handleClose}>
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </Form>
            </Modal>
        </>
    );
}

export default UserModal;