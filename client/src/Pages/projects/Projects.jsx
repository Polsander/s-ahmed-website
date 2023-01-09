import React, { useEffect, useState } from 'react'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';

import { Link } from 'react-router-dom'

import { FaTrash } from 'react-icons/fa'

import { authenticateAndReroute } from '../../assets/helpers/authAndReroute'

import styles from '../../components/ListProjects.module.css'
const server_url = import.meta.env.VITE_API_BASE_URL;


const Projects = () => {
    const [projects, setProjects] = useState(null)


    useEffect(() => {
        authenticateAndReroute();

        async function fetchAllProjects() {
            const request = await fetch(`${server_url}/projects`,
                {
                    method: 'GET',
                    mode: 'cors',
                    headers: {
                        'Content-Type': 'application/json',
                    }
                });

            const response = await request.json();
            createHTML(response);
        }
        fetchAllProjects();
    }, [])

    const createHTML = (data) => {
        const cards = []// initialize empty array that will hold JSX for each card
        const cardStyle = `${styles.cardDimensions} mt-2 mb-2 mx-3`

        for (let i = 0; i < data.length; i++) {
            const JSX =
                <Card className={cardStyle} id={data[i]._id} key={data[i]._id}>
                    <Card.Header className='text-center' as="h3">
                        {data[i].title}
                    </Card.Header>
                    <Card.Body>
                        <Row>
                            <Image className={styles.image} fluid src={data[i].thumbnail} />
                        </Row>
                    </Card.Body>
                    <Card.Footer className='d-flex justify-content-center'>
                        <Row >
                            <Col>
                                <Button variant='danger'><FaTrash /></Button>
                            </Col>
                        </Row>
                    </Card.Footer>
                </Card>
            cards.push(JSX);
        }
        setProjects(cards)
    }
    return (
        <div>
            <Container>
                <Row className='mt-3'>
                    <Col>
                        <Link to="/admin/dashboard/projects/create">
                            <Button varaint="success" size="lg">Create New Project</Button>
                        </Link>
                    </Col>
                </Row>
                <div className='d-flex mt-5 pt-5 justify-content-center'>
                    <Row>
                        {!projects ? null : projects.map((element) => { return <Col key={element.props.id} sm={12} md={6} lg={4}>{element}</Col> })}
                    </Row>
                </div>
            </Container>
        </div>
    )
}

export default Projects