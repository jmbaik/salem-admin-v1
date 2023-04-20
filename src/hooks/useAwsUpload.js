import AWS from 'aws-sdk';

function useAwsUpload({files, dir, keyCode}) {
    const ACCESS_KEY = process.env.REACT_APP_ACCESS_KEY;
    const SECRET_ACCESS_KEY = process.env.REACT_APP_SECRET_ACCESS_KEY;
    const REGION = process.env.REACT_APP_REGION;
    const S3_BUCKET = process.env.REACT_APP_S3_BUCKET;
    const fileNames = [];

    AWS.config.update({
        accessKeyId: ACCESS_KEY,
        secretAccessKey: SECRET_ACCESS_KEY,
    });
    const myBucket = new AWS.S3({
        params: {Bucket: S3_BUCKET},
        region: REGION,
    });

    const uploadFiles = (files) => {
        console.log(files);
        files.map((file, index) => {
            const data = upload(file, index);
            fileNames.push(data);
        });
    };

    const upload = (file, idx) => {
        const fileExt = file.name.split('.').pop();
        const fileFullName = `/upload/${keyCode}${idx}.${fileExt}`;
        console.log(fileFullName);
        const params = {
            ACL: 'public-read',
            Body: file,
            Bucket: S3_BUCKET,
            Key: fileFullName,
        };
        try {
            console.log('mybucket upload start');
            const data = myBucket.putObject(params).send((err) => {
                if (err) console.log(err);
            });
            console.log(idx, data);
            return fileFullName;
        } catch (err) {
            console.log('Error', err);
        }
    };
    return {
        fileNames,
        uploadFiles,
    };
}

export default useAwsUpload;
