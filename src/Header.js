import React from 'react'
import { AppBar, Tabs, Tab, Toolbar, Typography, Button, useTheme, useMediaQuery} from '@mui/material';
import { useState } from 'react';
import HamComponent from './HamComponent';


const Header = () => {
    const [value, setValue] = useState();
    const theme = useTheme();
    console.log(theme);
    const isMatch = useMediaQuery(theme.breakpoints.down('md'));
    console.log(isMatch);
    
    return (
        <React.Fragment>   
            <AppBar sx={{ backgroundColor: "#0647899" }}>
            <img src="logo.png" alt="logo" className={classes.logo} />
                <Toolbar>
                    <Typography> Hello calicut</Typography>
                    {
                        isMatch ? (
                        <>
                        <HamComponent/>

                        </>
                    ) : (
                        <>
                        <Tabs textColor="inherit" 
                        alignitems="center"
                        value={value}
                        onChange={(e,value) => setValue(value)}        
                        indicatorColor="secondary">
                    <Tab label="HOME" />
                    <Tab label="ABOUT" />
                    <Tab label="BLOG" />
                    <Tab label="READ" /> 
                    <Tab label="LOGIN" />   
                </Tabs>

                <Button sx={{marginLeft:"auto"}} variant='contained'> LOGIN {" "}</Button>
                <Button sx={{marginLeft:"15px"}} variant='contained'> REGISTER {" "}</Button>
                        </>

                    )
                }
                   
                </Toolbar>
                
            </AppBar>
        </React.Fragment>
    )
}

export default Header