import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TablePagination from '@mui/material/TablePagination';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import UserTableOptions from './UserTableOptions/UserTableOptions'
import styles from './UserTable.styles.js'

const UserTable = ({ users, selectFilter }) => {

    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [page, setPage] = useState(0);


    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    return (
        <Paper elevation={3}>
            <TableContainer>
                <Table aria-label="a dense table">
                    <TableHead>
                        <TableRow>
                            <TableCell>
                                <Box sx={styles.headerOptions}>
                                    <Box>
                                        <Typography variant="body1" color="black">
                                            Nombre
                                        </Typography>
                                    </Box>
                                    <Box>
                                        <UserTableOptions type="name" returnOption={selectFilter}></UserTableOptions>
                                    </Box>
                                </Box>
                            </TableCell>
                            <TableCell>
                                <Box sx={styles.headerOptions}>
                                    <Box>
                                        <Typography variant="body1" color="black">
                                            Apellido
                                        </Typography>
                                    </Box>
                                    <Box>
                                        <UserTableOptions type="Apellido" returnOption={selectFilter}></UserTableOptions>
                                    </Box>
                                </Box>
                            </TableCell>
                            <TableCell>
                                <Box sx={styles.headerOptions}>
                                    <Box>
                                        <Typography variant="body1" color="black">
                                            Teléfono
                                        </Typography>
                                    </Box>
                                    <Box>
                                        <UserTableOptions type="Telefono" returnOption={selectFilter}></UserTableOptions>
                                    </Box>
                                </Box>
                            </TableCell>
                            <TableCell>
                                <Box sx={styles.headerOptions}>
                                    <Box>
                                        <Typography variant="body1" color="black">
                                            Genero
                                        </Typography>
                                    </Box>
                                    <Box>
                                        <UserTableOptions type="Genero" returnOption={selectFilter}></UserTableOptions>
                                    </Box>
                                </Box>
                            </TableCell>
                            <TableCell>
                                <Box sx={styles.headerOptions}>
                                    <Box>
                                        <Typography variant="body1" color="black">
                                            Status
                                        </Typography>
                                    </Box>
                                    <Box>
                                        <UserTableOptions type="Status" returnOption={selectFilter}></UserTableOptions>
                                    </Box>
                                </Box>
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    {
                        users && users.length ?
                            <TableBody>
                                {users
                                .slice(page*rowsPerPage, page*rowsPerPage + rowsPerPage)
                                .map((item, index) => (

                                    !item.hide ?

                                        <TableRow key={index}>
                                            <TableCell>
                                                <Box>
                                                    <Typography variant="body2" color="black">
                                                        {item.name}
                                                    </Typography>
                                                </Box>
                                            </TableCell>
                                            <TableCell>
                                                <Box >
                                                    <Typography variant="body2" color="black">
                                                        {item.Apellido}
                                                    </Typography>
                                                </Box>
                                            </TableCell>
                                            <TableCell>
                                                <Box >
                                                    <Typography variant="body2" color="black">
                                                        {item.Telefono}
                                                    </Typography>
                                                </Box>
                                            </TableCell>
                                            <TableCell>
                                                <Box >
                                                    <Typography variant="body2" color="black">
                                                        {item.Genero}
                                                    </Typography>
                                                </Box>
                                            </TableCell>
                                            <TableCell>
                                                <Box>
                                                    <Typography variant="body2" color="black">
                                                        {item.Estatus}
                                                    </Typography>
                                                </Box>
                                            </TableCell>
                                        </TableRow>

                                        : []


                                ))}
                            </TableBody> : []
                    }

                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[5, 10, 25]}
                component="div"
                count={users.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
            {
                users && !users.length ?
                    <Box sx={{ textAlign: 'center' }}>
                        <Typography>
                            No hay resultados
                        </Typography>
                    </Box>
                    : ''
            }
        </Paper>

    )
}

export default UserTable