import React, { useState, useEffect } from 'react'
import Box from '@mui/material/Box';
import Api from './../../services/api'
import LoadingComponent from './../Loading/Loading'
import UserTable from './UserTable/UserTable'
import Typography from '@mui/material/Typography';
import styles from './UserList.styles'
import TextField from '@mui/material/TextField';

const UserList = () => {

    const [listUser, setListUser] = useState([])
    const [loading, setLoading] = useState(true)

    const getUsers = async () => {
        let response = await Api.getListUsers()
        setListUser(response.users)
        setLoading(false)
    }

    const handleChange = (event) => {
        let updateList = [...listUser]
        updateList.forEach(function (item) {
            let value = event.target.value.toLowerCase()
            if (!item.name.toLowerCase().includes(value) && !item.Apellido.toLowerCase().includes(value) && !item.Telefono.includes(value)) {
                item.hide = true
            } else {
                item.hide = false
            }
        })
        setListUser(updateList)

    };

    const selectFilter = (type, order) => {

        let updateList = [...listUser]

        if (type !== 'Estatus') {
            updateList.sort(function (a, b) {
                let x = a[type];
                let y = b[type];
                return ((x < y) ? -1 : ((x > y) ? 1 : 0));
            });

        } else {
            updateList.sort(function (a, b) {
                let x = a[type];
                let y = b[type];
                return x - y
            });
        }

        if (order === 'desc') {
            updateList.reverse()
        }

        setListUser(updateList)

    }

    const updateStatus = (index) => {
        let updateList = [...listUser]
        updateList[index].Estatus = Number(!updateList[index].Estatus)
        setListUser(updateList)

    }

    useEffect(() => {
        getUsers()
    }, [])

    return (
        <>
            {
                loading ?
                    <LoadingComponent />
                    :
                    <Box sx={styles.containerInfoUsers}>
                        <Box>
                            <Typography variant="h4" color="primary">
                                Lista de usuarios
                            </Typography>
                        </Box>
                        <Box>
                            <TextField
                                id="outlined-required"
                                label="Buscar (nombre, apellido o teléfono)"
                                sx={styles.inputSearch}
                                onChange={handleChange}
                            />
                        </Box>
                        <Box>
                            <UserTable users={listUser} selectFilter={selectFilter} updateStatus={updateStatus} />
                        </Box>
                    </Box>
            }
        </>

    )
}

export default UserList