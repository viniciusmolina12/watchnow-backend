const UserRoutes = require('./UserRoutes');
const MovieRoutes = require('./MovieRoutes');
const ApplicationRoutes = require('./ApplicationRoutes');
const SectionRoutes = require('./SectionRoutes');

module.exports = (app) => {

    ApplicationRoutes(app);
    UserRoutes(app);
    MovieRoutes(app);
    SectionRoutes(app);
    
}
