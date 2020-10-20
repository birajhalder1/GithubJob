import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import FetchJob from './FetchJob'
import Job from './Job'
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Loading from './Loading'
import { Container } from 'react-bootstrap'


const useStyles = makeStyles((theme) => ({
    loading: {
        margin: theme.spacing(20, 0, 0, 0)
    },
    formArea: {
        padding: theme.spacing(5, 5, 3, 5)
    }
}))


function Home() {
    const classes = useStyles();
    const [page, setPage] = useState(1)
    const [params, setParams] = useState({})
    const { jobs, loading, error } = FetchJob(params, page)
    const [name, setName] = React.useState();


    const handleChange = (event) => {
        setName(event.target.value);
    };
    return (
        <div>
            <Container className='my-4'>
            <div>
                <form className={classes.root} noValidate autoComplete="off">
                    <FormControl className={classes.formArea}>                     
                        <Input id="component-simple" value={name} onChange={handleChange} placeholder="Job Description" />
                    </FormControl>

                    <FormControl className={classes.formArea}>
                        <Input id="component-simple" value={name} onChange={handleChange} placeholder="Location" />
                    </FormControl>
                </form>
            </div>
                {loading && 
                <center>
                    <h1 className={classes.loading}>Loading..</h1>
                    <Loading />
                </center>}
                {error && <center><h1>Error- Try Refreshing.</h1></center>}
                {jobs.map(job => {
                    return <Job key={job.id} job={job} />
                })}
            </Container>          
        </div>
    )
}

export default Home
