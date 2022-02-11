import './card.css'
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import CountUp from 'react-countup'
export default (props) => {

    console.log(props);
    if (!props.data.confirmed) {
        return 'Loading...'
    }

    return <div className='container'>

        <Grid container spacing={3} justifyContent='center'>
            <Grid item component={Card} xs={12} md={3} className='card infected'>
                <CardContent>
                    <Typography color='textSeondary' gutterBottom>Infected</Typography>
                    
                    <Typography variant='h5'>
                        <CountUp start={0} end={props.data.confirmed.value} duration={3} separator=',' />
                    </Typography>
                    
                    <Typography color='textSeondary' gutterBottom>
                        {new Date(props.data.lastUpdate).toDateString()}
                    </Typography>
                    
                    <Typography variant='body2'>Number of active cases of COVID-19</Typography>
                </CardContent>
            </Grid>

            <Grid item component={Card}  xs={12} md={3} className='card recovered'>
                <CardContent>
                    <Typography color='textSeondary' gutterBottom>Recoveries</Typography>
                    
                    <Typography variant='h5'>
                        <CountUp start={0} end={props.data.recovered.value} duration={3} separator=',' />
                    </Typography>
                    
                    <Typography color='textSeondary' gutterBottom>
                        {new Date(props.data.lastUpdate).toDateString()}
                    </Typography>
                    
                    <Typography variant='body2'>Number of recoveries of COVID-19</Typography>
                </CardContent>
            </Grid>

            <Grid item component={Card}  xs={12} md={3} className='card deaths'>
                <CardContent>
                    <Typography color='textSeondary' gutterBottom>Deaths</Typography>
                    
                    <Typography variant='h5'>
                        <CountUp start={0} end={props.data.deaths.value} duration={3} separator=',' />
                    </Typography>
                    
                    <Typography color='textSeondary' gutterBottom>
                        {new Date(props.data.lastUpdate).toDateString()}
                    </Typography>
                    
                    <Typography variant='body2'>Number of deaths of COVID-19</Typography>
                </CardContent>
            </Grid>
        </Grid>
    </div>
}