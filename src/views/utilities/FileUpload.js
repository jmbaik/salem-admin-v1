import AttachFileRoundedIcon from '@mui/icons-material/AttachFileRounded';
import {Grid} from '@mui/material';
import {useState} from 'react';
import Dropzone from 'react-dropzone';

function FileUpload(props) {
    const [Images, setImages] = useState([]);
    const dropHandler = (files) => {
        let formData = new FormData();

        const config = {
            header: {'content-type': 'multipart/form-data'},
        };
        formData.append('file', files[0]);
        console.log(formData);
        props.refreshFunction(files);
        /*
        axios.post('/api/product/image', formData, config).then((response) => {
            if (response.data.success) {
                console.log(response.data);
                setImages([...Images, response.data.filePath]);
                props.refreshFunction(setImages([...Images, response.data.filePath]));
            } else {
                alert('파일을 저장하는데 실패했습니다.');
            }
        });
        */
    };
    return (
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
            <Dropzone onDrop={dropHandler}>
                {({getRootProps, getInputProps}) => (
                    <Grid container>
                        <Grid
                            item
                            xs={6}
                            sx={{
                                width: '100%',
                                height: 70,
                                border: '1px solid lightgray',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}
                            {...getRootProps()}
                        >
                            <AttachFileRoundedIcon style={{fontSize: '2rem'}} />
                        </Grid>
                        <Grid item xs={6}>
                            <input {...getInputProps()} />
                        </Grid>
                    </Grid>
                )}
            </Dropzone>
        </div>
    );
}

export default FileUpload;
