import { Typography , Container, Grid } from "@mui/material";
import LicenseCard from "../LiceneseCard";
import Featured from "./Featured";
import Hero from "./Header";
import licenses from '../..//data/licenses.json'
import mit from '../../data/liceneses/mit.json'
import gnugplv3 from '../../data/liceneses/gpl-3.0.json'

function Home() {
    return (
        <>
            <Hero />
            <Container maxWidth="xl" component={"section"} >
                <Typography variant="h2" color={'text.tertiary'} component="h2" sx={{ mb: 2 }} >Most Used Licenses</Typography>
                <Featured heading="It lets people do almost anything they want with your project" license={mit} ></Featured>
                <Featured heading="provide protections for users' freedoms and prevents software patents from being used to restrict those freedoms" license={gnugplv3}></Featured>
            </Container>
            <Container maxWidth="xl">
                <Typography variant="h2" component="h2" color={'text.tertiary'} sx={{ mb: 2, mt: 10 }} >All Available Licenses</Typography>
                <Grid container spacing={4} alignContent="stretch" columns={{ xs: 3, sm: 6, md: 9, lg: 12 }}    >
                    {
                        licenses.map(license =>
                            <Grid item xs={3} key={license.codeName} >
                                <LicenseCard  {...license} ></LicenseCard>
                            </Grid>
                        )
                    }
                </Grid>
            </Container>
        </>

    )
}

export default Home;