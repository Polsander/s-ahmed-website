import React, { useState, useEffect } from 'react'

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form';


import LoginForm from './LoginForm';

const server_url = import.meta.env.VITE_API_BASE_URL


const ModalPopUp = () => {

    const [show, setShow] = useState(true);
    const handleClose = () => setShow(false);

    //Submission Handler
    const handleSubmission = async (e) => {
        e.preventDefault();
        const input = { password: e.target.form[0].value };
        const passwordJSON = JSON.stringify(input);

        const res = await fetch(`${server_url}/admin`,
            {
                method: 'POST',
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json',
                    "Access-Control-Allow-Origin": "*",
                    "Access-Control-Allow-Credentials": true,
                },
                body: passwordJSON,

            });
        const response = await res.json()

        if (response.access) {
            localStorage.setItem("accessToken", response.webToken);
            e.target.form[0].value = ''; // this also works!
        }

    }

    return (
        <div>
            <Modal
                show={show}
                onHide={handleClose}
                size="lg"
                backdrop="static"
                keyboard={false}
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title>Admin Login</Modal.Title>
                </Modal.Header>
                <Form>
                    <Modal.Body className='mt-2'>
                        <LoginForm />
                    </Modal.Body>
                    <Modal.Footer className='mt-2'>
                        <Button variant="primary" type="submit" onClick={handleSubmission}>Submit</Button>
                    </Modal.Footer>
                </Form>
            </Modal>
        </div>
    )
}

export default ModalPopUp