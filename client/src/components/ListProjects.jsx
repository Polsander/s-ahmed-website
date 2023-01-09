import React, { useEffect, useState } from 'react'

import { useNavigate } from 'react-router-dom';

import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import styles from './ListProjects.module.css';


const server_url = import.meta.env.VITE_API_BASE_URL;


const ListProjects = () => {
    const [projects, setProjects] = useState(null)
    const navigate = useNavigate();

    useEffect(() => {
        //get project data
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
    }, []);

    const createHTML = (data) => {
        const cards = []// initialize empty array that will hold JSX for each card
        const cardStyle = `${styles.cardDimensions} ${styles.cardBehaviour} mt-2 mb-2 mx-3`

        for (let i = 0; i < data.length; i++) {
            const JSX =
                <Card className={cardStyle} id={data[i]._id} key={data[i]._id} onClick={()=>cardClickHandler(data[i]._id)}>
                    <Card.Header className='text-center' as="h3">
                        {data[i].title}
                    </Card.Header>
                    <Card.Body>
                        <Row>
                            <Image className={styles.image} fluid src={data[i].thumbnail} />
                        </Row>
                    </Card.Body>
                </Card>
            cards.push(JSX);
        }
        setProjects(cards)
    }

    //handlers
    const cardClickHandler = (id) => {navigate(`/project/${id}`)}

    return (
        <div className='my-5 pt-5'>
            <Row>
                <h4 className='text-center'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni consectetur assumenda reiciendis eligendi facilis aperiam, eos quo voluptas eaque excepturi officia incidunt nulla voluptatem? Exercitationem quibusdam laudantium recusandae facere rem.</h4>
            </Row>
            <div className='d-flex mt-5 pt-5 justify-content-center'>
                <Row>
                    {!projects ? null : projects.map((element)=>{return <Col key={element.props.id} sm={12} md={6} lg={4}>{element}</Col>})}
                </Row>
            </div>
        </div>

    )
}

export default ListProjects