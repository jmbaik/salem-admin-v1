import { Box, Button, ButtonGroup, Grid, Modal } from '@mui/material';
import { videoApi } from 'api/videoApi';
import { gridSpacing } from 'atoms/constants';
import { useState } from 'react';
import { MDataGrid } from 'ui-component/datagrid/MDataGrid';

const Worship = () => {
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
        { field: 'cCode', headerName: 'cCode', width: 90, headerAlign: 'center' },
        { field: 'vid', headerName: 'vid', width: 90, headerAlign: 'center' },
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
    return (
        <Grid container spacing={gridSpacing}>
            <Grid item xs={1} />
            <Grid item xs={10}>
                <Box sx={{ display: 'flex', justifyContent: 'flex-end', marginRight: 5, marginBottom: 2 }}>
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
            <Modal open={modalOpen} onClose={onModalClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
                <Box sx={{ ...style, width: 400 }}>
                    <h2 id="parent-modal-title">Text in a modal</h2>
                    <p id="parent-modal-description">Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>
                </Box>
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
