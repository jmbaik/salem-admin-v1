import apiFetch from 'utils/axios';

export const videoApi = async () => {
    const response = await apiFetch.get('/video/default', {
        params: {
            cCode: '',
            cat: '',
        },
    });
    return response.data.result;
};

export const videoUploadApi = async (data) => {
    const config = {
        header: {
            'content-type': 'multipart/form-data',
        },
    };
    const result = await axios.post('/video/default', data, config);
    return result;
};
