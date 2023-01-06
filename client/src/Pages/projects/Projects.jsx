import React from 'react'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'

import {Link} from 'react-router-dom'

const Projects = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Link to="/admin/dashboard/projects/create">
                        <Button varaint="success" size="lg">Create New Project</Button>
                    </Link>
                </Row>
            </Container>
        </div>
    )
}

export default Projects