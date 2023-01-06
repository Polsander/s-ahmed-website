import React, { useState } from 'react'

import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'



const CreateProject = () => {
    const [formBody, setFormBody] = useState([]);
    const [blockCounter, setBlockCounter] = useState(0);

    const formJSX = formBody // this will be what collects the variables and object ID's containing the JSX of what gets put into the formBody

    //Handlers
    const addTextHandler = () => {
        console.log('text');
        const component =
            <Form.Group key={blockCounter} controlId={blockCounter}>
                <Form.Control as='textarea' />
            </Form.Group>
        const textFormComponent = {
            id: blockCounter,
            component,
        }
        formJSX.push(textFormComponent);
        console.log(formJSX);
        setFormBody(formJSX);
        setBlockCounter(blockCounter + 1);
    }

    const addImageHandler = () => {
        console.log('image');
        const component =
            <p key={blockCounter}>[Image Upload Section]</p>

        const imageFormComponent = {
            id: blockCounter,
            key: blockCounter,
            component,
        };
        formJSX.push(imageFormComponent);
        console.log(formJSX);
        setFormBody(formJSX);
        setBlockCounter(blockCounter + 1);
    }

    const postHandler = () => {
        console.log('post submit');
    }

    return (
        <div>
            <Container>
                <Button className='m-3' onClick={addTextHandler}>Add Text</Button>
                <Button className='m-3' onClick={addImageHandler}>Add Image</Button>
                <Form>
                    <Form.Group controlId='title'>
                        <Form.Label>Project Title</Form.Label>
                        <Form.Control type='text' />
                    </Form.Group>
                    <Form.Group className='mt-5' controlId='main-image'>
                        <p>[Image upload section]</p>
                    </Form.Group>
                    {!formBody[0] ? null : formBody.map((element) => { return element.component })}
                    <Button className='mt-4' type="submit" onClick={postHandler}>Post</Button>
                </Form>
            </Container >
        </div>
    )
}

export default CreateProject