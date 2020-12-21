import Express from 'express';
import {User} from '../models/user.model.js'

const usersRouter = Express.Router();

usersRouter.route('/login').post( (req,res) => {

    const username = req.body.username;
    const  password = req.body.password;

    User.findOne({username: username})
        .then( user => {
            console.log(`${user.password} - ${password}`);
            if(user && user.password === password) {
                req.session.role = user.role;
                req.session.username = user.use;
                res.status(200).json({valid: true, role: user.role});
            } else {res.status(200).json({valid:false})}
        })
});

usersRouter.route('/logout').post( (req, res) => {
    try {
        req.session.destroy();
        res.status(200).json({value: 'session removed'})
    } catch (e) {console.log(`Error ${e} while removing current session.`)}
})

function AccessControlAdmin(req, res, next) {
    if(req.session.role && req.session.role === "admin") {next();}
    else {res.status(400).json( {error: 'Not available resource due to access permissions'} );}
}

function AccessControlBase(req, res, next) {
    if(req.session.role && req.session.role === "base") {next();}
    else {res.status(400).json( {error: 'Not available resource due to access permissions'} );}
}

export { usersRouter };