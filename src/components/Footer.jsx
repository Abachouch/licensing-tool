import { Box, Typography } from "@mui/material";

function Footer(){
    return (
        <Box component={"footer"} bgcolor={'text.tertiary'} style={{padding : '3rem 1rem' , margin : '2rem 0 0 0'}} >
            <Typography variant="body2" color={'text.primary'} style={{textAlign : 'right'}} >Created By <a href="https://abachouch.github.io" rel="author"> Abachouch Youssouf  </a> using <a href="https://reactjs.org/"> React </a> and <a href="https://mui.com/"> Material UI </a></Typography>
        </Box>
    )
}

export default Footer