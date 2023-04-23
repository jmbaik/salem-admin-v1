import {useMutation, useQuery, useQueryClient} from '@tanstack/react-query';
import apiFetch from 'utils/axios';

export const videoSeqApi = async () => {
    const result = await apiFetch.get('/video/seq-video');
    return result.data.result;
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

export const useCreateVideoList = () => {
    const queryClient = useQueryClient();
    const {mutate} = useMutation({
        mutationFn: () => {},
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey: ['video-list']});
        },
    });
};
