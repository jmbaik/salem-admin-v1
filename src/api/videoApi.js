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
