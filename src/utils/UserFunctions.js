import axios from 'axios'


export const login = user => {
    return axios
        .post('http://preem-bkv-dev.northeurope.cloudapp.azure.com/api/auth/login', {
            user_name: user.username,
            password: user.password
        })
        .then(response => {
            console.log(response.data)
            localStorage.setItem('auth_token', response.auth_token)
            localStorage.setItem('token_expiration', response.token_expiration)
            return response.data
        })
        .catch(err => {
            console.log(err)
        })
}