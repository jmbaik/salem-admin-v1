import {Grid} from '@mui/material';
import '../../css/uploader.css';
import {Alert, Button} from '@mui/material';
import AWS from 'aws-sdk';
import {useState} from 'react';
import {IoMdCloudUpload} from 'react-icons/io';

const AwsFileUpload = (props) => {
    const {dir, fileName} = props;
    const [progress, setProgress] = useState(0);
    const [selectedFile, setSelectedFile] = useState(null);
    const [showAlert, setShowAlert] = useState(false);
    const [ext, setExt] = useState('');
    const [done, setDone] = useState('');
    const [imgUrl, setImgUrl] = useState('');
    const ACCESS_KEY = process.env.REACT_APP_ACCESS_KEY;
    const SECRET_ACCESS_KEY = process.env.REACT_APP_SECRET_ACCESS_KEY;
    const REGION = process.env.REACT_APP_REGION;
    const S3_BUCKET = process.env.REACT_APP_S3_BUCKET;

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
        console.log('filename', file?.name);
        const fileExt = file?.name.split('.').pop().toLowerCase();
        console.log(fileExt);
        setExt(fileExt);
        console.log(imgUrl);
        // if (file.type !== 'image/jpeg' || fileExt !== 'jpg' || fileExt !== 'png') {
        //     alert('이미지 파일만 업로드 가능합니다.');
        //     return;
        // }
        setProgress(0);
        setSelectedFile(file);
        setDone('upload');
        props.onDoneState(false);
    };
    const uploadFile = (file) => {
        console.log(file.name);
        const params = {
            ACL: 'public-read',
            Body: file,
            Bucket: S3_BUCKET,
            Key: 'upload/' + dir + '/' + fileName + '.' + ext,
        };
        myBucket
            .putObject(params)
            .on('httpUploadProgress', (e) => {
                setProgress(Math.round((e.loaded / e.total) * 100));
                setShowAlert(true);
                setTimeout(() => {
                    setShowAlert(false);
                    setSelectedFile(null);
                    setDone('done');
                    props.onDoneState(true);
                    setImgUrl(`${dir}/${fileName}.${ext}`);
                }, 2000);
            })
            .send((err) => {
                if (err) console.log(err);
            });
    };

    return (
        <div>
            <div className="parent">
                <div className="file-upload">
                    {showAlert ? (
                        <Alert>업로드 진행률: {progress}%</Alert>
                    ) : done === 'done' ? (
                        <Alert>업로드를 완료하였습니다.</Alert>
                    ) : done === 'upload' ? (
                        <Alert>업로드를 하여 주십시요</Alert>
                    ) : (
                        <Alert>클릭해서 파일 첨부를 하시고 반드시 업로드를 하여 주십시요</Alert>
                    )}
                    <IoMdCloudUpload style={{width: 30, height: 30}} />
                    <h3>Click box to upload</h3>
                    <p>Maximun file size 3mb</p>
                    <input type="file" onChange={handleFileInput} />
                    {imgUrl.length > 0 ? (
                        <img
                            alt="abc"
                            style={{width: 100, height: 100}}
                            src={`${process.env.REACT_APP_S3_URL}/upload/${imgUrl}`}
                        />
                    ) : (
                        <div style={{height: 100}} />
                    )}
                    {selectedFile ? (
                        <div>
                            <Button variant="contained" onClick={() => uploadFile(selectedFile)}>
                                Upload
                            </Button>
                        </div>
                    ) : null}
                </div>
            </div>
        </div>
    );
};

export default AwsFileUpload;
