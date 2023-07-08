import { ArrowForwardIosRounded } from "@mui/icons-material";
import { Button, Card, CardActionArea, CardActions, CardContent, CardHeader, Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";
import { Link, Navigate } from "react-router-dom";

function Featured({ heading, license }) {

    return (
        <Grid container spacing={2} sx={{ my: 4 }} columns={{ xs: 6, md: 12 }}>
            <Grid item xs={6} sm={3} >
                <Typography variant="h3" color={'text.tertiary'}>
                    {heading}
                </Typography>
            </Grid>
            <Grid item xs={6} sm={9} >
                <Card sx={{ p: 4 }} >
                    <CardHeader title={license.key} subheader={license.name}  />
                    <CardContent>
                        <Grid container spacing={2} columns={{ xs: 4, sm: 12, md: 12 }} >
                            <Grid item xs={4}  >
                                <Typography variant="h5">PERMISSIONS</Typography>
                                {
                                    license.permissions.map((permission) =>
                                        <Typography key={permission} variant="body2"> {permission} </Typography>
                                    )
                                }
                            </Grid>
                            <Grid item xs={4} >
                                <Typography variant="h5">CONDITIONS</Typography>
                                {
                                    license.permissions.map((conditions) =>
                                        <Typography key={conditions} variant="body2"> {conditions} </Typography>
                                    )
                                }
                            </Grid>
                            <Grid item xs={4} >
                                <Typography variant="h5">LIMITATIONS</Typography>
                                {
                                    license.permissions.map((limitations) =>
                                        <Typography key={limitations} variant="body2"> {limitations} </Typography>
                                    )
                                }
                            </Grid>
                        </Grid>
                    </CardContent>
                    <CardActions variant="right">
                        <Button size="small" endIcon={<ArrowForwardIosRounded />} LinkComponent={Link} to={"/license/"+license.key}  >Learn More </Button>
                    </CardActions>
                </Card>
            </Grid>
        </Grid>
    )
}

export default Featured;