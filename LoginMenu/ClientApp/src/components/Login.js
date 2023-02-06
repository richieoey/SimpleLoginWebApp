import React, { Component } from "react";
import { Navigate } from "react-router-dom";

class Login extends Component {

    // State declaration
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            data: [],
            userLogged: false,
        };
    }

    // Metode ini dijalankan saat component sudah dirender
    componentDidMount() {
        this.populateUserData();
    }

    // Mengambil data user dari api user
    async populateUserData() {
        const response = await fetch('user');
        const data = await response.json();
        this.setState({ data: data });
    }

    handleEmailChange = (e) => {
        this.setState({ email: e.target.value });
    };

    handlePasswordChange = (e) => {
        this.setState({ password: e.target.value });
    };

    handleSubmit = (e) => {
        for (let i = 0; i < this.state.data.length; i++) {
            console.log(this.state.data[i]);
            if (this.state.data[i].email === this.state.email && this.state.data[i].password === this.state.password) {
                // Jika inputnya sesuai dengan data dari api maka user logged in
                this.setState({ userLogged: true });
                console.log("Login successful");
                break;
            }
        }
    };

    render() {

        // Jika user sudah login Maka akan dinavigate ke halaman Home
        if (this.state.userLogged) {
            return (
                <Navigate replace to="/home" />
            );
        }
        // Jika belum login maka akan muncul form login
        else {
            return (
                <div className="container-fluid">
                    <div>
                        <h1>Login</h1>
                    </div>
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-outline mb-4">
                            <label for="email"></label>
                            <input
                                type="text"
                                placeholder="Email"
                                value={this.state.email}
                                onChange={this.handleEmailChange}
                            />
                        </div>
                        <div className="form-outline mb-4">
                            <label for="password"></label>
                            <input
                                type="password"
                                placeholder="Password"
                                value={this.state.password}
                                onChange={this.handlePasswordChange}
                            />
                        </div>
                        <button className="btn btn-primary btn-block mb-4" type="submit">Login</button>
                    </form>
                </div>
            )
        }
    }
}
export { Login };










