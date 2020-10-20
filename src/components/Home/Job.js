import React, {useState} from 'react'
import ReactMarkdown from 'react-markdown'
import { Card, Badge, Button, Collapse } from 'react-bootstrap'

export default function Job({ job }) {
   const [open, setOpen] = useState(false)
    return (
        <Card>
            <Card.Body>
                <div className='d-flex justify-content-between'>
                    <div>
                        <Card.Title>
    {job.title} - <span className='text-muted font-weight-light'>{job.company}</span>
                        </Card.Title>
                        <Card.Subtitle className='text-muted md-2'>
                            {new Date(job.created_at).toLocaleDateString()}
                        </Card.Subtitle>
                        <Badge variant='secondary' className='mr-2'>{job.type}</Badge>
                        <Badge variant='secondary'>{job.location}</Badge>
                       <div style={{wordBreak: 'break-all'}}>
                           <ReactMarkdown source={job.how_to_apply} />
                           {/* {job.how_to_apply} */}
                        </div>
                           
                    </div>
                    <img className='d-none d-md-block' height='50' alt={job.company} src={job.company_logo} />
                </div>
                <Card.Text>
                    <Button onClick={ ()=> setOpen(prevOpen => !prevOpen)} className='mt-4' variant="primary">{open ? 'Hide Details' : 'View Details'}</Button>
                </Card.Text>
                <Collapse in={open}>
                <div className='mt-4 justify-content-between'>
                    <ReactMarkdown  source={job.description} />
                </div>
                </Collapse>
            </Card.Body>
        </Card>
    )
}
