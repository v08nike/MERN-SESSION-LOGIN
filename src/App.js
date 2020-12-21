import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import LogIn from './components/login.component';
import {AuthProvider} from './AuthContext'
import {BrowserRouter as Router, Route,  Switch} from 'react-router-dom'
import {UserDashboard} from "./components/UserDashboard.component";
import {AdminDashboard} from "./components/AdminDashboard.component";

function App() {
    return (
        <AuthProvider>
            <Router>
                <Switch>
                    <Route exact path="/">
                        <LogIn/>
                    </Route>
                    <Route path="/user/basedashboard">
                        <UserDashboard/>
                    </Route>
                    <Route path="/admin/admindashboard">
                        <AdminDashboard/>
                    </Route>
                </Switch>
            </Router>

        </AuthProvider>
    );
}

export default App;
