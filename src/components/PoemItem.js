import React from 'react'
import {Card} from 'react-bootstrap'

function PoemItem({title, text}) {
    return(
        <Card className='mb-4'>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{text}</Card.Text>
            </Card.Body>
        </Card>
    )
}

export default PoemItem