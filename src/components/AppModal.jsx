import { Modal, Button } from "react-bootstrap";

const AppModal = ({ show, handleClose, title, children, submitText, submitLoading, variant, formId, isLoading = false}) => {
    return (
        <>
            <Modal show={show} onHide={handleClose} centered>
                <Modal.Header closeButton>
                    <Modal.Title className="fw-bold">{title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>{children}</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose} disabled={isLoading}>
                        Cancel
                    </Button>
                    <Button type="submit" variant={variant} onClick={handleClose} form={formId} disabled={isLoading}>
                        {isLoading ? "Loading..." : submitText}
                    </Button>
                </Modal.Footer>
            </Modal>
        </>  
    );
};

export default AppModal;