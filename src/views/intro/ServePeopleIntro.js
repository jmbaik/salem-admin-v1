import { Input, TextField } from '@mui/material';
import { useForm } from 'react-hook-form';
const ServePeopleIntro = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    return (
        <div>
            <form action="">
                <TextField type={'email'} sx={{ padding: 0 }} size="small" margin="normal" />
                <TextField type={'email'} sx={{ padding: 0 }} size="small" margin="dense" />
                <TextField type={'email'} sx={{ padding: 0 }} size="small" margin="none" />
                <Input defaultValue="Hello World" inputProps={{ 'area-label': 'description' }} />
                <Input defaultValue="Hello World" />
                <TextField label="djfksdjf" variant="standard" focused />{' '}
            </form>
        </div>
    );
};

export default ServePeopleIntro;
