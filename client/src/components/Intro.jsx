import React from 'react'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import Image from 'react-bootstrap/Image'

import styles from './Intro.module.css'
// Style constants
const introTextStyle = `${styles.text} ps-md-5 text-center text-lg-start`

const Intro = () => {
    return (
        <Container>
            <Row>
                <Col xs={12} lg={6} className='pt-5 d-flex justify-content-center mx-auto'>
                    <Image
                        fluid
                        className={styles.image}
                        src="/headshot2.png"
                    />
                </Col>
                <Col className='pt-5 d-flex align-items-center'>
                    <Row>
                        <h1 className={introTextStyle}>Hi! I'm Samar! Chemical Engineering Graduate at the University of Waterloo.</h1>
                        <p className='ps-md-5'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus esse vitae perspiciatis quia, illo asperiores quis obcaecati non delectus officiis, consectetur quibusdam voluptates facilis ea veritatis culpa earum voluptate aut.</p>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}

export default Intro