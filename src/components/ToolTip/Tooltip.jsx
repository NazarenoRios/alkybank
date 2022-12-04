import { Grid, LinearProgress, Alert, Fade } from '@mui/material'
import { useState } from 'react'



export const Tooltip = ({isLoading, status, message}) => {
 
    if(isLoading){
        return (
            <Grid container > 
                <LinearProgress color="primary" sx={{width:'100%', background:'#1C1A2E' }}/>
            </Grid>
        )
    }

    const [display, setDisplay] = useState(true)

    const bgColor = status === 'success' ? 'primary' : 'error'

    return (
        <Fade in={display}>
            <Grid container >
                <Alert variant={'outlined'} color={bgColor} severity={status} onClose={() => {setDisplay(false)}} sx={{width:'100%', minHeight:'1em', margin:'.2em',color:'#fff'}}>
                    {message}
                </Alert>
            </Grid>
        </Fade>
        
  )
}
