var controller = require("../controllers/sample");
module.exports = app => {
    app.route('/api/sample')
     .get(controller.getSamples)
     .post(controller.createSample);
     
    app.route('/api/sample/:sample')
      .get(controller.getSample)
      .put(controller.updateSample)
      .delete(controller.deleteSample);
};