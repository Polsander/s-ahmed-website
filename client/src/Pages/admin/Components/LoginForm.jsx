import React from 'react'

import Form from 'react-bootstrap/Form'

const LoginForm = () => {

    const inputHandler = (e) => {
        console.log(e.target.value);
    }
  return (
    <div>
        <Form.Group controlId="adminPassword">
            <Form.Label>Please Enter Site Password</Form.Label>
            <Form.Control type="password" placeholder='Password' onChange={null}/>

        </Form.Group>
    </div>
  )
}

export default LoginForm