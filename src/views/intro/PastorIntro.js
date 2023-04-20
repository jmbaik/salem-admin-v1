import {useState} from 'react';

const {Box, Accordion, AccordionSummary, Typography, AccordionDetails} = require('@mui/material');

const PastorIntro = () => {
    const [accord, setAccord] = useState('');
    return (
        <Box>
            <Accordion expanded={accord === 'test1'} onClick={() => setAccord('test1')}>
                <AccordionSummary expandIcon={'>'}>
                    <Typography>My Details</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography> My Name is </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={accord === 'test2'} onClick={() => setAccord('test2')}>
                <AccordionSummary expandIcon={'>'}>
                    <Typography>My Details</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography> My Name is </Typography>
                </AccordionDetails>
            </Accordion>
        </Box>
    );
};

export default PastorIntro;
