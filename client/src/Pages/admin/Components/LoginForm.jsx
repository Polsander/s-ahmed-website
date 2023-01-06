import React from 'react'

import Form from 'react-bootstrap/Form'

const LoginForm = () => {

  return (
    <div>
        <Form.Group controlId="adminPassword">
            <Form.Label>Please Enter Site Password</Form.Label>
            <Form.Control type="password" placeholder='Password'/>

        </Form.Group>
    </div>
  )
}

export default LoginForm