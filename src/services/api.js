import axios from "axios"

const apiUrl = 'https://dev.vidanta-ws.lumstondev.com'

const Api = {

    getListUsers: async () => {
        try {

           
            const options = {
                method: 'GET',
                url: apiUrl + "/userListExample"
            };

            let createResponse = await axios(options);
            console.log("createResponse", createResponse)
            if (createResponse.status === 201 || createResponse.status === 200) {
                let userList = createResponse.data
                console.log("userList", userList)
                return userList
            } else {
                console.log("Hubo un problema al regresar el feed de usuarios")
                return false
            }

        } catch (error) {
            console.log("error get list users", error)
            return false
        }
    }
}

export default Api