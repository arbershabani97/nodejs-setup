const controller = require("./sample.controller");
const {sampleMiddleware} = require("./sample.middleware");

module.exports = app => {
    app.route('/api/sample')
       .get(sampleMiddleware, controller.getSamples)
       .post(controller.createSample);
     
    app.route('/api/sample/:sample')
       .get(controller.getSample)
       .put(controller.updateSample)
       .delete(controller.deleteSample);
};