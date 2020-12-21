import React from "react";
import {AuthContext, useAuth} from '../AuthContext';
import {Redirect} from 'react-router-dom';

class LogInForm extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
        };

        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    verifyIfAlreadyLogged(auth) {
        if(auth.user.role != null) {
            console.log('already logged in')
            if(auth.role === 'base') {
                return <Redirect to="/user/basedashboard"/>
            } else if(auth.role === 'admin') {
                return <Redirect to="/user/admindashboard"/>
            }
        }
    }

    onChangeUsername(e) {
        e.persist()
        this.setState( (state, props) => {
            return ({username: e.target.value})
        })
    }

    onChangePassword(e) {
        this.setState(
            {password: e.target.value}
        )
    }

    onSubmit(auth) {
        return e => {
            e.preventDefault()
            auth.logIn(this.state.username, this.state.password)
        }
    }

    render() {
        return (
            <AuthContext.Consumer>
                { (auth) => (
                    <div>
                        {this.verifyIfAlreadyLogged(auth)}
                        <form onSubmit={this.onSubmit(auth)}>
                            <div className={'form-group'}>
                                <label>User Name</label>
                                <input id={'username'} className={'form-control'} type={'text'} value={this.state.username} onChange={this.onChangeUsername}></input>
                            </div>

                            <div className={'form-group'}>
                                <label>Password</label>
                                <input id={'password'} className={'form-control'} type={'password'} value={this.state.password} onChange={this.onChangePassword}></input>
                            </div>

                            <div className={'form-group text-center'}>
                                <input type={'submit'} className={'btn btn-primary'} value={'Log In'}></input>
                            </div>
                        </form>
                    </div>
                )}
            </AuthContext.Consumer>
        )
    }
}

export default LogInForm;