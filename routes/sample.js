var controller = require("../controllers/sample");
module.exports = app => {
    app.route('/')
     .get(controller.getSample)
     .post(controller.createSample);
     
    app.route('/:sample')
      .get(controller.getSample)
      .put(controller.updateSample)
      .delete(controller.deleteSample);
};