import React from "react";
import LogInForm from './LogInForm.component'
import '../css/login.css'

class LogIn extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
        };
    }




    render() {
        return(
            <div className={'container'} style={ {height: '100%'} }>
                <div className={'row align-content-center justify-content-center'} style={ {height: '100%'} }>
                    <div className={'col-lg-5 login-card p-4'}>
                        <div className={'container text-center'}>
                            <h2 className={'heading heading-bold'}>Log In Here</h2>
                        </div>
                        <LogInForm></LogInForm>

                    </div>
                </div>
            </div>
        );
    }
}

export default LogIn; // Or define class as default export class

