const SectionController = require('../controllers/SectionController');
const sectionController = new SectionController;

module.exports = (app) => {

    
    app.get(
        '/api/sections/:id',
         sectionController.list()
        );


    app.get(
        '/api/seats/:id',
            sectionController.listSeats()
        );
 



}

