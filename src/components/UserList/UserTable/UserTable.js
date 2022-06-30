import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

const UserTable = ({ users }) => {


    return (
        <Paper elevation={3}>
            <TableContainer>
                <Table aria-label="a dense table">
                    <TableHead>
                        <TableRow>
                            <TableCell>
                                <Typography variant="body1" color="black">
                                    Nombre
                                </Typography>
                            </TableCell>
                            <TableCell>
                                <Typography variant="body1" color="black">
                                    Apellido
                                </Typography>
                            </TableCell>
                            <TableCell>
                                <Typography variant="body1" color="black">
                                    Teléfono
                                </Typography>
                            </TableCell>
                            <TableCell>
                                <Typography variant="body1" color="black">
                                    Genero
                                </Typography>
                            </TableCell>
                            <TableCell>
                                <Typography variant="body1" color="black">
                                    Status
                                </Typography>
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    {
                        users && users.length ?
                            <TableBody>
                                {users.map((item, index) => (

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