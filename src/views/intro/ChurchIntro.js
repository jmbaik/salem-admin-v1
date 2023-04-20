import {Box, Collapse, List, ListItem, ListItemButton, ListItemIcon, ListItemText} from '@mui/material';
import {useState} from 'react';

const ChurchIntro = () => {
    const items = ['first', 'second', 'third', 'forth', 'fifth'];
    const [open, setOpen] = useState(false);
    return (
        <Box>
            <List>
                <ListItem divider>
                    <ListItemButton onClick={() => setOpen(true)}>
                        <ListItemText primary={'Expand List'} />
                    </ListItemButton>
                </ListItem>
            </List>
            <Collapse in={open}>
                <List sx={{marginLeft: 25}}>
                    {items.map((item, index) => {
                        return (
                            <ListItem key={index} divider>
                                <ListItemButton onClick={() => setOpen(false)}>
                                    <ListItemIcon>{'>'}</ListItemIcon>
                                    <ListItemText>{item}</ListItemText>
                                </ListItemButton>
                            </ListItem>
                        );
                    })}
                </List>
            </Collapse>
        </Box>
    );
};

export default ChurchIntro;
