import {
    Button,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Typography,
} from '@mui/material';
import {useState} from 'react';

const Worship = () => {
    const [open, setOpen] = useState(false);
    return (
        <>
            <Card sx={{maxWidth: 500}}>
                <CardMedia
                    sx={{height: 140}}
                    image="https://images.unsplash.com/photo-1681282894814-fc9281ef8c35?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80"
                    title="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Lizard
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except
                        Antarctica
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" onClick={() => setOpen(true)}>
                        Share
                    </Button>
                    <Button size="small">Learn More</Button>
                </CardActions>
            </Card>
            <Dialog open={open} onClose={() => setOpen(false)}>
                <DialogTitle> This is my Dialog</DialogTitle>
                <DialogContent>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem, facilis vitae iure error nobis autem
                    perferendis molestias natus dolorem sint
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setOpen(false)}>Cancel</Button>
                    <Button>Agree</Button>
                </DialogActions>
            </Dialog>
        </>
    );
};

export default Worship;
