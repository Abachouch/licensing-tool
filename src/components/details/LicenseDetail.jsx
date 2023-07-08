import styled from "@emotion/styled";
import { ExpandCircleDown, ExpandMoreRounded, ExpandSharp } from "@mui/icons-material";
import { Card, CardActions, CardContent, Collapse, Grid, IconButton, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import { useParams, Params } from "react-router-dom";



const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton  {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));


function LicenseDetails() {

    const { name } = useParams()
    const [license, setLicense] = useState({ key: '', name: ' ', description: '', implementation: '', permissions: [], conditions: [], limitations: [], body: '' })

    const [expanded, setExpanded] = useState(false);
    useEffect(() => {
        const l = require('../../data/liceneses/' + name)
        setLicense(l)
        document.body.style.backgroundColor = '#3b4b62'

    }, [name])

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    return (
        <Box marginTop={10}  >
            <Typography variant="h1" color={'text.tertiary'} > {license.key} </Typography>
            <Typography variant="h3" color={'text.tertiary'} > {license.name} </Typography>

            <Grid container spacing={4} columns={{ xs: 6, md: 12 }} style={{ marginBlock: '3rem' }} >
                <Grid item xs={6} md={4} >
                    <Card variant="sharp" elevation={1}  >
                        <CardContent>
                            <Typography variant="body2" > {license.description} </Typography>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item   xs={6} md={8} >

                    <Card variant="sharp" elevation={1}  >
                        <CardContent>
                            <Typography component={'pre'} variant="code" sx={{ overflow: 'auto', marginTop: '2rem' }} > {license.body}  </Typography>
                        </CardContent>
                    </Card>
                </Grid>

            </Grid>



        </Box>
    )
}
export default LicenseDetails;