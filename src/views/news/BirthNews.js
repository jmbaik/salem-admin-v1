import AwsFileUpload from 'views/utilities/AwsFileUpload';

const BirthNews = () => {
    console.log(process.env.REACT_APP_API_URL);
    return <AwsFileUpload dir={'video'} fileName={'cb0001'} />;
};

export default BirthNews;
