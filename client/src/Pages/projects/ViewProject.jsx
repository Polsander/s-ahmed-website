import React, { useEffect, useState } from 'react'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Image from 'react-bootstrap/Image'

import { useParams } from 'react-router-dom'

import styles from './ViewProject.module.css'

const server_url = import.meta.env.VITE_API_BASE_URL;

const ViewProject = () => {
    const { projectId } = useParams();
    const [postContent, setPostContent] = useState(null);

    useEffect(() => {
        const retrieveProjectPost = async () => {
            const request = await fetch(`${server_url}/projects/${projectId}`, {
                method: 'GET',
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json',
                }
            });
            const response = await request.json();
            formatIntoJSX(response);
        };
        retrieveProjectPost();
    });

    const formatIntoJSX = (postData) => {
        const elements = [] //initialize empty element array
        const title =
            <Row>
                <h1 className='text-center'>
                    {postData.title}
                </h1>
            </Row>

        const thumbnail =
            <Row>
                <Image className='mb-5' fluid src={postData.thumbnail} />
            </Row>
        elements.push(title);
        elements.push(thumbnail);
        //organizing body
        const body = postData.body;
        for (let i = 0; i < body.length; i++) {
            if (body[i].element === 'Text') {
                const text =
                    <Row>
                        <p>{body[i].content}</p>
                    </Row>
                elements.push(text);
            } else if (body[i].element === "Image") {
                const image =
                    <Row className='justify-content-center'>
                        <Image className={styles.regularImage} fluid src={body[i].content} />
                    </Row>
                elements.push(image);
            }
        };
        setPostContent(elements);

    }

    return (
        <Container>
            <div className='d-flex my-5 justify-content-center'>
                <div className={styles.contentPage}>
                    {postContent}
                </div>
            </div>
        </Container>
    )
}

export default ViewProject