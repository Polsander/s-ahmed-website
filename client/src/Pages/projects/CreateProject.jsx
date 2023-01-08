import React, { useState, useEffect } from 'react'

import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
import Image from 'react-bootstrap/Image'

import { authenticateAndReroute } from '../../assets/helpers/authAndReroute';

const server_url = import.meta.env.VITE_API_BASE_URL;



const CreateProject = () => {
    const [formBody, setFormBody] = useState([]);
    const [blockCounter, setBlockCounter] = useState(0);
    const [thumbnail, setThumbnail] = useState(null)



    useEffect(() => {
        authenticateAndReroute();
        const defaultThumbnail =
            <Form.Group name='mainImage' className='mt-5' controlId='main-image'>
                <Form.Label>Header Image (your main thumbnail)</Form.Label>
                <Form.Control type='file' name='mainImage' onInput={uploadThumbnailHandler} />
            </Form.Group>
        setThumbnail(defaultThumbnail);
    }, [])

    const formJSX = formBody // this will be what collects the variables and object ID's containing the JSX of what gets put into the formBody

    //Handlers
    const addTextHandler = () => {
        const component =
            <Form.Group name='text' className='mt-2' key={blockCounter} controlId={blockCounter}>
                <Form.Control name='text' as='textarea' />
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
            <Form.Group className='mt-3' key={blockCounter} controlId={blockCounter} encType="multipart/form-data">
                <Form.Control onInput={uploadImageHandler} type='file' name='file' />
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

    const uploadImageHandler = async (event) => {
        console.log(blockCounter)
        const file = event.target.files[0];
        const data = new FormData();
        data.append('file', file);
        const res = await fetch(`${server_url}/upload/image`, {
            method: 'POST',
            mode: 'cors',
            // don't send headers for file posts
            body: data,
        });
        const response = await res.text()
        for (let i = 0; i < formBody.length; i++) {
            if (formBody[i].id === blockCounter) {
                const image =
                    <Form.Group className='d-flex justify-content-center' name='image' key={response}>
                        <Image name='image' fluid src={response} />
                    </Form.Group>
                const formBodyCopy = [...formBody]; // deep copy is not necessary for this to work, json parsing results in error on second image load
                formBodyCopy[i].component = image;
                setFormBody(formBodyCopy);
            }
        }
    };

    const uploadThumbnailHandler = async (event) => {
        const file = event.target.files[0];
        const data = new FormData();
        data.append('mainImage', file);
        const res = await fetch(`${server_url}/upload/thumbnail`, {
            method: 'POST',
            mode: 'cors',
            // don't send headers for file posts
            body: data,
        });
        const response = await res.text();
        const image =
            <Form.Group className='d-flex justify-content-center my-3' name='mainImage' key={response}>
                <Image name='mainImage' fluid src={response} />
            </Form.Group>

        setThumbnail(image);
    }

    //need to make middleware for this post request on the backend to authenticate user
    // FUTURE IMPROVEMENT
    const postHandler = async (e) => {
        e.preventDefault();
        const grabDivs = e.target.getElementsByTagName("div");
        const arr = [] // initialize empty array for objects

        //checking and retrieving post title
        const title = { element: 'Title', content: grabDivs[0].children[1].value }; // this is already a string
        arr.push(title);

        //checking and receiving thumbnail
        const thumbnail = { element: 'Thumbnail', src_url: `${grabDivs[1].children[0].currentSrc}` };
        arr.push(thumbnail);

        //Iterating and deciding whether we have image or textarea
        for (let i = 2; i < grabDivs.length; i++) {
            const divElement = grabDivs[i].attributes[0].nodeValue;
            if (divElement === 'text') {
                const element = { element: 'Text', content: grabDivs[i].children[0].value }
                arr.push(element);
            }
            else if (divElement === 'image') {
                const element = { element: 'Image', content: `${grabDivs[i].children[0].currentSrc}` }
                arr.push(element);
            }
            // need error handeling here (Future improvement?)
        };

        //sending data and handling POST request
        const data = JSON.stringify(arr);
        const request = await fetch(`${server_url}/upload/project`, {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: data
        });

        const response = await request.text();
        console.log(response);
        //idea, we can make a JS object that orders each element on how it must be displayed and later send it as JSON to the backend
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
                    {thumbnail}
                    {!formBody[0] ? null : formBody.map((element) => { return element.component })}
                    <Button className='mt-4' type="submit" >Post</Button>
                </Form>
            </Container >
        </div>
    )
}

export default CreateProject