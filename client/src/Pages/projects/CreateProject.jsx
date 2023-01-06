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
        const component =
            <Form.Group name='text' className='mt-2' key={blockCounter} controlId={blockCounter}>
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
        const component =
            <Form.Group name='image' className='mt-3' key={blockCounter} controlId={blockCounter}>
                <Form.Control  onInput={()=>{console.log(blockCounter)}} type='file'/>
            </Form.Group>


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

    const postHandler = (e) => {
        console.log('Did we make it??')
        e.preventDefault();
        console.log(e.target[2].id);
    }

    return (
        <div>
            <Container>
                <Button className='m-3' onClick={addTextHandler}>Add Text</Button>
                <Button className='m-3' onClick={addImageHandler}>Add Image</Button>
                <Form onSubmit={postHandler}>
                    <Form.Group name='title' controlId='title'>
                        <Form.Label>Project Title</Form.Label>
                        <Form.Control type='text' />
                    </Form.Group>
                    <Form.Group name='mainImage' className='mt-5' controlId='main-image'>
                        <Form.Label>Header Image (your main thumbnail)</Form.Label>
                        <Form.Control type='file' />
                    </Form.Group>
                    {!formBody[0] ? null : formBody.map((element) => { return element.component })}
                    <Button className='mt-4' type="submit" >Post</Button>
                </Form>
            </Container >
        </div>
    )
}

export default CreateProject