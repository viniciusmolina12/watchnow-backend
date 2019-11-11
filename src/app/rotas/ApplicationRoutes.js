const ApplicationController = require('../controllers/ApplicationController');
const applicationController = new ApplicationController;

module.exports = (app) => {


    app.post(
        '/',
         applicationController.login()
        );



}

