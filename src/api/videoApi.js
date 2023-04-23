import {useMutation, useQuery, useQueryClient} from '@tanstack/react-query';
import apiFetch from 'utils/axios';

export const videoSeqApi = () => {
    const promise = apiFetch.get('/video/seq-video');
    return promise;
};

export const useFetchVideoList = () => {
    const {isLoading, data, isError, error} = useQuery({
        queryKey: ['video-list'],
        queryFn: async () => {
            const response = await apiFetch.get('/video/default', {
                params: {
                    cCode: '',
                    cat: '',
                },
            });
            return response.data.result;
        },
    });
    return {data, isLoading, isError, error};
};

export const useSaveVideo = () => {
    const queryClient = useQueryClient();
    const {mutate: saveVideo, isLoading: saveLoading} = useMutation({
        mutationFn: async (params) => {
            console.log('---------------------');
            console.log(params);
            const resp = await apiFetch.post('/video/default', params);
            return resp.data.result;
        },
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey: ['video-list']});
        },
        onError: (error) => {
            console.log(error);
        },
    });
    return {saveVideo, saveLoading};
};

export const useDeleteVideo = () => {
    const queryClient = useQueryClient();
    const {mutate: deleteVideo, isLoading: deleteLoading} = useMutation({
        mutationFn: async (params) => {
            const resp = await apiFetch.delete('/video/default', params);
            return resp.data.result;
        },
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey: ['video-list']});
        },
        onError: (error) => {
            console.log(error);
            // toast.error(error.response.data.msg);
        },
    });
    return {deleteVideo, deleteLoading};
};
