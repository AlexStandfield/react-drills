import React from 'react'

class Login extends React.Component{
    constructor(){
        super()

        this.state = {
            username: '',
            password: ''
        }
    }
    usernameUpdate = (username) => {
        this.setState({
            username: username
        })
    }
    passwordUpdate = (password) => {
        this.setState({
            password: password
        })
    }
    login = () => {
        alert('Logging In')
    }
    


    render(){
        return(
            <div>
                <input onChange={(e) => this.usernameUpdate(e.target.value)} type='text' />
                <input onChange={(e) => this.passwordUpdate(e.target.value)} type='text' />
                <button onClick={this.login}>Login</button>
            </div>
        )
    }
}

export default Login