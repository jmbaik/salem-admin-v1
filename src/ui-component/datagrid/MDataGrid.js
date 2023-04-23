import DeleteIcon from '@mui/icons-material/Delete';
import {Box, Pagination, PaginationItem, Typography} from '@mui/material';
import {
    DataGrid,
    GridActionsCellItem,
    gridPageCountSelector,
    gridPageSelector,
    useGridApiContext,
    useGridSelector,
} from '@mui/x-data-grid';
import {useQuery} from '@tanstack/react-query';
import {useCallback, useMemo, useState} from 'react';

export function MDataGrid({
    keyCode,
    width,
    height,
    cols,
    isCheck,
    autoHeight,
    onRowClick,
    actionDelete,
    isDelete,
    hideCols,
    queryFunction,
}) {
    // const {data, isLoading, isError, error} = useQuery({
    //     queryKey: [queryKey],
    //     queryFn: apiFunction,
    // });
    const {data, isLoading, isError, error} = queryFunction();
    const [paginationModel, setPaginationModel] = useState({
        pageSize: 25,
        page: 0,
    });
    const deleteRow = useCallback(
        (id) => () => {
            actionDelete(id);
        },
        [],
    );
    let columns = cols.map((col) => ({
        ...col,
        headerClassName: 'grid-theme--header',
    }));

    if (isDelete) {
        columns = [
            ...columns,
            {
                field: 'actions',
                type: 'actions',
                width: 80,
                getActions: (params) => [
                    <GridActionsCellItem icon={<DeleteIcon />} label="Delete" onClick={deleteRow(params)} />,
                ],
            },
        ];
    }

    columns = useMemo(() => [...columns], [isDelete, actionDelete]);

    return (
        <Box
            height={height}
            width={width}
            sx={{
                margin: 'auto',
                '& .grid-theme--header': {
                    backgroundColor: '#00000010',
                },
            }}
        >
            {isLoading ? (
                <Typography>...loading...</Typography>
            ) : (
                <DataGrid
                    getRowId={(row) => row[keyCode]}
                    initialState={{
                        columns: {
                            columnVisibilityModel: hideCols,
                        },
                    }}
                    columns={columns}
                    rows={data}
                    density="compact"
                    autoHeight={autoHeight}
                    paginationModel={paginationModel}
                    onPaginationModelChange={setPaginationModel}
                    checkboxSelection={isCheck}
                    rowHeight={42}
                    sx={{
                        boxShadow: 3,
                        borderStyle: 'solid',
                        borderRadius: 2,
                        borderWidth: 1,
                        borderColor: '#00000030',
                    }}
                    slots={{
                        pagination: CustomPagination,
                    }}
                    onRowClick={(p) => onRowClick(p.row)}
                />
            )}
            {isError && <Typography>{error}</Typography>}
        </Box>
    );
}

function CustomPagination() {
    const apiRef = useGridApiContext();
    const page = useGridSelector(apiRef, gridPageSelector);
    const pageCount = useGridSelector(apiRef, gridPageCountSelector);

    return (
        <Pagination
            color="primary"
            variant="outlined"
            shape="rounded"
            page={page + 1}
            count={pageCount}
            // @ts-expect-error
            renderItem={(props2) => <PaginationItem {...props2} disableRipple />}
            onChange={(e, value) => apiRef.current.setPage(value - 1)}
        />
    );
}
