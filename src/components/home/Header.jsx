import { Box, Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";
import openSource from '../../assets/open-source.svg'

function Hero() {
    return (
        <Container  maxWidth="xl" component={"header"} >
            <Grid container  columns={{ xs: 6, md : 12 }} alignItems="center" my={10} >
                <Grid item xs={6} >
                    <Typography variant="h1"  color={'text.tertiary'} component="h1"  >
                        We help you to choose a license for your OpenSource project 
                    </Typography>
                </Grid>
                <Grid item xs={6} >
                    <img  style={{ display: "block", margin: "0 auto" , width  : '100%' }} src={openSource} alt="open source icon" />
                </Grid>
            </Grid>
        </Container>
    )
}

export default Hero; 