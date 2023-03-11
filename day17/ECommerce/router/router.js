module.exports = function(app) {
  var taskController = require('../controllers/taskcontroller');
  var orderController = require('../controllers/ordersController');
  var paymentController = require('../controllers/paymentsController');
  app.route('/api/tasks')
     .get(taskController.getAll)
     .post(taskController.insert);
   
  app.route('/api/tasks/:taskId')
      .get(taskController.getBy)
      .put(taskController.update)
      .delete(taskController.remove);

  
  app.route('api/orders')  
  .get(orderController.getAll) 
  .post(orderController.insert);

  app.route('/api/orders/:orderId')
  .get(orderController.getBy)
  .put(orderController.update)
  .delete(orderController.remove);


  app.route('api/payments')  
  .get(paymentController.getAll) 
  
  app.route('/api/payments/:orderId')
  .get(paymentController.getBy)
  

};