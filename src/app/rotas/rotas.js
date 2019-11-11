const UserRoutes = require('./UserRoutes');
const MovieRoutes = require('./MovieRoutes');
const ApplicationRoutes = require('./ApplicationRoutes');

module.exports = (app) => {

    ApplicationRoutes(app);
    UserRoutes(app);
    MovieRoutes(app);
    
}
