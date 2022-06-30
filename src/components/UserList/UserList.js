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
        // let updateList = [...listUser]
        // updateList.forEach(function (item) {
        //     console.log("e", item.name.includes(event.target.value))
        //     if (!item.name.includes(event.target.value) && !item.Apellido.includes(event.target.value)) {
        //         item.hide = true
        //     } else {
        //         item.hide = false
        //     }
        // })
        // console.log("updateList", updateList)
        // setListUser(updateList)

    };


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
                                label="Buscar por nombre o apellido"
                                sx={styles.inputSearch}
                                onChange={handleChange}
                            />
                        </Box>
                        <Box>
                            <UserTable users={listUser} />
                        </Box>
                    </Box>
            }
        </>

    )
}

export default UserList