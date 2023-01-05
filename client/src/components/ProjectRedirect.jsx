import React from 'react'

import Button from 'react-bootstrap/Button'
import {FaArrowAltCircleDown} from 'react-icons/fa'

const ProjectRedirect = () => {
    return (
        <div className='d-flex justify-content-center mt-5 pt-5'>
            <Button size='lg' variant='success'>
                <FaArrowAltCircleDown className="me-2"/>
                Check Out My Projects!
            </Button>
        </div>
    )
}

export default ProjectRedirect