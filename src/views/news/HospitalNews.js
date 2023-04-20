import {areaCodeApi} from 'api/commonCodeApi';
import {MDataGrid} from 'ui-component/datagrid/MDataGrid';

const HospitalNews = () => {
    const deleteRow = (param) => {
        console.log(param);
    };
    const handleRowClick = (params) => {
        // console.log(params.row['code']);
        // console.log(params.row['name']);
    };
    const columns = [
        {field: 'code', headerName: 'CODE', width: 90, headerAlign: 'center'},
        {
            field: 'name',
            headerName: 'Name',
            headerAlign: 'center',
            width: 150,
            editable: false,
        },
        {
            field: 'aliasCode',
            headerName: 'Last name',
            headerAlign: 'center',
            width: 150,
            editable: false,
        },
    ];
    return (
        <MDataGrid
            queryKey={'area-code'}
            keyCode={'code'}
            width={800}
            height={500}
            cols={columns}
            apiFunction={areaCodeApi}
            isCheck={false}
            autoHeight={false}
            onRowClick={handleRowClick}
            actionDelete={deleteRow}
            isDelete={true}
        />
    );
};

export default HospitalNews;
