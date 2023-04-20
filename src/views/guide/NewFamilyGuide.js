import {Alert, Button, Grid} from '@mui/material';
import AWS from 'aws-sdk';
import {useState} from 'react';

const NewFamilyGuide = () => {
    const [progress, setProgress] = useState(0);
    const [selectedFile, setSelectedFile] = useState(null);
    const [showAlert, setShowAlert] = useState(false);
    const [ext, setExt] = useState('');
    const ACCESS_KEY = process.env.REACT_APP_ACCESS_KEY;
    const SECRET_ACCESS_KEY = process.env.REACT_APP_SECRET_ACCESS_KEY;
    const REGION = process.env.REACT_APP_REGION;
    const S3_BUCKET = process.env.REACT_APP_S3_BUCKET;
    console.log(ACCESS_KEY, SECRET_ACCESS_KEY, REGION, S3_BUCKET);

    AWS.config.update({
        accessKeyId: ACCESS_KEY,
        secretAccessKey: SECRET_ACCESS_KEY,
    });
    const myBucket = new AWS.S3({
        params: {Bucket: S3_BUCKET},
        region: REGION,
    });
    const handleFileInput = (e) => {
        const file = e.target.files[0];
        // console.log(file);
        const fileExt = file.name.split('.').pop();
        setExt(fileExt);
        console.log(fileExt);
        // if (file.type !== 'image/jpeg' || fileExt !== 'jpg' || fileExt !== 'png') {
        //     alert('이미지 파일만 업로드 가능합니다.');
        //     return;
        // }
        setProgress(0);
        setSelectedFile(file);
    };
    const uploadFile = (file) => {
        console.log(file.name);
        const params = {
            ACL: 'public-read',
            Body: file,
            Bucket: S3_BUCKET,
            Key: 'upload/' + 'ccc.' + ext,
        };
        myBucket
            .putObject(params)
            .on('httpUploadProgress', (e) => {
                setProgress(Math.round((e.loaded / e.total) * 100));
                setShowAlert(true);
                setTimeout(() => {
                    setShowAlert(false);
                    setSelectedFile(null);
                }, 3000);
            })
            .send((err) => {
                if (err) console.log(err);
            });
    };
    //metelsoft-store-bucket-v1/upload/kt-giga-접속 단말 정보.png
    s3: return (
        <Grid container>
            <Grid item xs={12}>
                <h1>File Upload</h1>
            </Grid>
            <Grid item xs={12}>
                {showAlert ? <Alert>업로드 진행률: {progress}%</Alert> : <Alert>파일을 선택해 주세요</Alert>}
            </Grid>
            <Grid item xs={12}>
                <input type="file" onChange={handleFileInput} />
                {selectedFile ? <Button onClick={() => uploadFile(selectedFile)}>Upload</Button> : null}
            </Grid>
            <Grid item xs={12}>
                <img alt="abc" src={`${process.env.REACT_APP_S3_URL}/upload/aaaaaa.png`} />
            </Grid>
        </Grid>
    );
};

export default NewFamilyGuide;
