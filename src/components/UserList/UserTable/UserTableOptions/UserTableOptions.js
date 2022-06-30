import React, { useState } from 'react'
import Popover from '@mui/material/Popover';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const UserTableOptions = ({ type, returnOption }) => {

    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;


    return (
        <div>
            <Box>
                <MoreVertIcon onClick={handleClick}></MoreVertIcon>
            </Box>
            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
            >
                <Box>
                    <Box onClick={e => returnOption(type, 'desc')}>
                        <Typography sx={{ p: 2 }}>Ordenar DESC</Typography>
                    </Box>
                    <Box onClick={e => returnOption(type, 'asc')}>
                        <Typography sx={{ p: 2 }}>Ordenar ASC</Typography>
                    </Box>
                </Box>
            </Popover>
        </div>
    )
}

export default UserTableOptions