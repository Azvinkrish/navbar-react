import { Drawer, List, ListItemText, ListItemButton, IconButton, ListItemIcon } from '@mui/material'
import React, { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';

const Hamcomponent = () => {
    const [openDrawer, setOpenDrawer] = useState();

    return (
        <React.Fragment>
            <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)}>
                <List>
                    <ListItemButton>
                        <ListItemIcon>
                            <ListItemText> Login </ListItemText>
                        </ListItemIcon>
                    </ListItemButton>
                </List>
            </Drawer>
            <IconButton sx={{marginLeft:'auto'}} onClick={() => setOpenDrawer(!openDrawer)}>
                <MenuIcon />
            </IconButton>

        </React.Fragment>
    )
}
export default Hamcomponent; 