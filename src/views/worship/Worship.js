import {Box, Button, ButtonGroup, Grid, Modal, TextField} from '@mui/material';
import {videoApi} from 'api/videoApi';
import {gridSpacing} from 'atoms/constants';
import {useState} from 'react';
import {useForm} from 'react-hook-form';
import MainCard from 'ui-component/cards/MainCard';
import {MDataGrid} from 'ui-component/datagrid/MDataGrid';
import FileUpload from 'views/utilities/FileUpload';

const Worship = () => {
    const [cat, setCat] = useState('');
    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm();
    const [modalOpen, setModalOpen] = useState(false);
    const onModalClose = () => {
        setModalOpen(false);
    };
    const deleteRow = (param) => {
        // console.log(param);
    };
    const handleRowClick = (params) => {
        // console.log(params);
        // console.log(params.row['code']);
        // console.log(params.row['name']);
    };
    const columns = [
        {
            field: 'cCode',
            headerName: 'cCode',
            width: 90,
            headerAlign: 'center',
        },
        {field: 'vid', headerName: 'vid', width: 90, headerAlign: 'center'},
        {
            field: 'cName',
            headerName: '교회',
            headerAlign: 'center',
            width: 150,
            editable: false,
        },
        {
            field: 'cat',
            headerName: '카타고리',
            headerAlign: 'center',
            width: 150,
            editable: false,
        },
        {
            field: 'title',
            headerName: '제목',
            headerAlign: 'center',
            width: 150,
            editable: false,
        },
        {
            field: 'refer',
            headerName: '본문',
            headerAlign: 'center',
            width: 150,
            editable: false,
        },
        {
            field: 'speaker',
            headerName: '설교자',
            headerAlign: 'center',
            width: 150,
            editable: false,
        },
        {
            field: 'regId',
            headerName: '등록자',
            headerAlign: 'center',
            width: 150,
            editable: false,
        },
        {
            field: 'regDate',
            headerName: '등록일',
            headerAlign: 'center',
            width: 150,
            editable: false,
        },
        {
            field: 'updId',
            headerName: '최종수정자',
            headerAlign: 'center',
            width: 150,
            editable: false,
        },
        {
            field: 'updDate',
            headerName: '최종수정일',
            headerAlign: 'center',
            width: 150,
            editable: false,
        },
    ];
    const hideCols = {
        cCode: false,
        vid: false,
    };
    const addForm = () => {
        setModalOpen(true);
    };
    const onSubmit = handleSubmit((data) => {
        console.log(data);
    });
    /* file upload */
    const updateImage = (images) => {
        console.log(images);
    };
    return (
        <Grid container spacing={gridSpacing}>
            <Grid item xs={1} />
            <Grid item xs={10}>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'flex-end',
                        marginRight: 5,
                        marginBottom: 2,
                    }}
                >
                    <ButtonGroup size="medium" aria-label="medium button group">
                        <Button onClick={addForm}>추가</Button>
                        <Button>수정</Button>
                    </ButtonGroup>
                </Box>
                <MDataGrid
                    queryKey={'video-list'}
                    keyCode={'vid'}
                    width={'100%'}
                    height={500}
                    cols={columns}
                    apiFunction={videoApi}
                    isCheck={false}
                    autoHeight={true}
                    onRowClick={handleRowClick}
                    actionDelete={deleteRow}
                    isDelete={true}
                    hideCols={hideCols}
                />
            </Grid>
            <Grid item xs={1} />
            <Modal
                open={modalOpen}
                onClose={onModalClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <MainCard title="예배 등록" sx={{...style, width: 800, height: 800, borderRadius: 2}}>
                    <form
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 10,
                        }}
                        onSubmit={onSubmit}
                    >
                        <TextField
                            type={'text'}
                            variant="filled"
                            id="cCode"
                            label="교회 코드"
                            disabled
                            defaultValue={'H1001'}
                            {...register('cCode')}
                        />
                        <TextField
                            select
                            variant="filled"
                            value={cat}
                            id="cat"
                            label="Category"
                            SelectProps={{
                                native: true,
                            }}
                            error={Boolean(errors.cat)}
                            {...register('cat', {required: true})}
                            helperText={Boolean(errors.cat) ? <span>category 입력하여주세요</span> : null}
                            onChange={(e) => setCat(e.target.value)}
                        >
                            <option value={''}></option>
                            <option value={'주일예배'}>주일예배</option>
                            <option value={'찬양예배'}>찬양예배</option>
                            <option value={'행사/간증'}>행사/간증</option>
                            <option value={'찬양'}>찬양</option>
                        </TextField>
                        <TextField
                            type={'text'}
                            id="title"
                            error={Boolean(errors.title)}
                            helperText={Boolean(errors.title) ? <span>제목을 입력하세요</span> : null}
                            variant="filled"
                            label="제목"
                            {...register('title', {required: true})}
                        />
                        <TextField
                            type={'text'}
                            id="refer"
                            error={Boolean(errors.refer)}
                            helperText={Boolean(errors.refer) ? <span>본문을 입력하세요</span> : null}
                            variant="filled"
                            label="본문"
                            {...register('refer')}
                        />
                        <TextField
                            type={'text'}
                            id="speaker"
                            error={Boolean(errors.speaker)}
                            variant="filled"
                            label="설교자"
                            {...register('speaker')}
                        />
                        <FileUpload refreshFunction={updateImage} />
                        <Grid container spacing={3} justifyContent={'flex-end'} marginTop={1}>
                            <Grid item xs={8}></Grid>
                            <Grid item xs={2}>
                                <Button variant="contained" onClick={onSubmit}>
                                    Submit
                                </Button>
                            </Grid>
                            <Grid item xs={2}>
                                <Button variant="contained" onClick={() => setModalOpen(false)}>
                                    Close
                                </Button>
                            </Grid>
                        </Grid>
                    </form>
                </MainCard>
            </Modal>
        </Grid>
    );
};

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'white',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default Worship;
