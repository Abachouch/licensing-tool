import { Padding } from "@mui/icons-material";
import { createTheme } from "@mui/material";
import { typography } from "@mui/system";

const theme = createTheme({

    palette: {
        background: {
            default: "green",
        },
        text: {
            primary: "#000",
            secondary: "#000",
            tertiary: '#fff',
            disabled: 'gray'
        },
        primary: {
            light: '#040518',
            main: '#000',
            dark: '#fff',
        },
        secondary: {
            light: '#fff',
            main: '#f0f',
            dark: '#fff',
            contrastText: '#fff',
        },
    },
    typography: {
        fontFamily: [
            'Inter',
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
        h1: {
            fontSize: "3rem",
            fontWeight: 700,
            
        },
        h2: {
            fontSize: "2rem",
            fontWeight: 700,
            paddingBottom: '4rem',
           
        },
        h3: {
            fontSize: "1.5rem",
            fontWeight: 700,
        },
        h4: {
            fontSize: "1.2rem",
            fontWeight: 600,
        },
        h5: {
            fontSize: "1rem",
            fontWeight: 600,
        },
        subtitle1: {
            fontSize: 12,
        },
        body1: {
            fontWeight: 500,
            fontSize: '1.1rem'
        },
        body2: {
            fontWeight: 500,
            fontSize: '.85rem'
        },
        code : {
            fontFamily : ' "consolas"  , monospace',
            fontSize : '0.9rem',
        } ,
        button: {
            fontWeight: 700,
        },
    },

    components: {
        MuiButton: {
            variants: [
                {
                    props: { variant: 'cta', color: 'primary' },
                    style: {
                        color: "black",
                        backgroundColor: "white",
                        Padding: "16px 16px",
                        ":hover": {
                            color: "white"
                        }
                    }
                },
                {
                    props: { variant: 'cardButton', color: 'secondary' },
                    style: {
                        color: "black",
                        fontWeight: 700,
                    }
                },
            ],
        },
        MuiCard: {
            variants: [
                {
                    props: { variant: 'sharp' },
                    style: {
                        borderRadius: 0,
                    },
                }
            ]
        },
        MuiCardActions: {
            variants: [
                {
                    props: { variant: 'right' },
                    style: {
                        display: "flex",
                        flexDirection: 'row-reverse'
                    }

                }
            ]
        },
        MuiCardHeader: {
            styleOverrides: {
                title: {
                    fontSize: '1.8rem',
                    fontWeight: 700,
                    marginBottom: "0.5rem"
                },
                subheader: {
                    fontSize: "1.2rem",
                    fontWeight: 500
                }
            }
        }
    },
});

export default theme;