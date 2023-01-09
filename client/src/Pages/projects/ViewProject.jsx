import React, { useEffect } from 'react'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

import styles from './ViewProject.module.css'

const ViewProject = () => {

    // useEffect(() => {
    //     //need to send a get request and by proper I.D.
    // })

    return (
        <Container>
            <div className='d-flex mt-5 justify-content-center'>
                <div className={styles.contentPage}>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus saepe pariatur adipisci amet dignissimos iusto officiis tempora quod consequatur, eius velit itaque repellat. Minima ipsam sunt corrupti neque porro nobis.
                        Recusandae hic eos atque rerum voluptas saepe vero doloremque aspernatur voluptatem quos numquam eius accusamus, esse error consequuntur vitae reiciendis! Velit, nihil iste ab doloribus mollitia illum aspernatur nesciunt nemo?
                    </p>
                </div>
            </div>
        </Container>
    )
}

export default ViewProject