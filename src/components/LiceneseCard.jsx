import { Button, CardActions, CardContent, CardHeader, Grid, Icon, Typography } from '@mui/material';
import Card from '@mui/material/Card';
import { ArrowForwardIosRounded } from '@mui/icons-material';
import { Link } from 'react-router-dom';

function LicenseCard({ name, fullName, props }) {
    return (
        <Card variant='sharp' sx={{height :" 100%" , display : "flex" , flexDirection : "column"}} >

            <CardHeader title={name} subheader={fullName}/>
            <CardContent sx={{flexGrow : 2}} >

                <div style={{display : "flex"  , flexFlow : 'row wrap ' ,gap : '1rem'}}  >
                    {
                        Object.keys(props).map(p =>
                            <div key={p} style= {{display : 'inline-block' , minWidth : 180}} >
                                <Typography variant='h5' > {p} </Typography>
                                {
                                    props[p].map(e =>
                                        <Typography key={e} variant='body2' fontSize={".75rem"} >{e}</Typography>
                                    )
                                }
                            </div>
                        )
                    }
                </div>

            </CardContent>
            <CardActions variant="right">
                <Button size="small" endIcon={<ArrowForwardIosRounded />} LinkComponent={Link} to={"/license/"+name}   >Learn More </Button>
            </CardActions>
        </Card>
    )
}
export default LicenseCard;