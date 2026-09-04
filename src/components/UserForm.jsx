import { Form, FormControl } from "react-bootstrap";

const UserForm = ({ formId, formData, setFormData, onSubmit, error = {}}) => {

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData((prev) => ({
            ...prev, [name]: value
        }));
    }
    return (
        <>
            <Form id={formId} onSubmit={onSubmit}>    
                <Form.Group className="mb-3">
                    <Form.Label className="fw-semibold">Name</Form.Label>
                    <Form.Control isInvalid={!!error.name} type="text" name="name" placeholder="Enter Your Name" required value={formData.name} onChange={handleChange}></Form.Control>
                    <FormControl.Feedback type="invalid">
                        {error?.name}
                    </FormControl.Feedback>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label className="fw-semibold">Email</Form.Label>
                    <Form.Control isInvalid={!!error.email} type="email" name="email" placeholder="Enter Your Email" required value={formData.email} onChange={handleChange}></Form.Control>
                    <FormControl.Feedback type="invalid">
                        {error?.email}
                    </FormControl.Feedback>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label className="fw-semibold">Password</Form.Label>
                    <Form.Control isInvalid={!!error.password} type="password" name="password" placeholder="Enter Your Password" required value={formData.password} onChange={handleChange}></Form.Control>
                    <FormControl.Feedback type="invalid">
                        {error?.password}
                    </FormControl.Feedback>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label className="fw-semibold">Status</Form.Label>
                    <Form.Select isInvalid={!!error.status} name="status" id="status" value={formData.status} onChange={handleChange}>
                        <option value="1">Active</option>
                        <option value="0">Non-Active</option>
                    </Form.Select>
                    <FormControl.Feedback type="invalid">
                        {error?.status}
                    </FormControl.Feedback>
                </Form.Group>
            </Form>
        </>
    );
}

export default UserForm;