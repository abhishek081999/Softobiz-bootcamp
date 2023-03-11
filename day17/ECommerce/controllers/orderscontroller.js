
var Order = require('../model/ordersdal');

exports.getAll = function(req, res) {
  Order.getAllTask(function(err, order) {
    if (err)
      res.send(err);
    res.send(order);
  });
};

exports.insert = function(req, res) {
  
  var new_order= new Order(req.body);

  //handles null error 
   if(!new_order.order || !new_order.status){
      res.status(400).send({ error:true, message: 'Please provide order/status' });
    }
   else{
    Order.createOrder(new_order, function(err, order) {
      if (err)
      res.send(err);
    res.json(order);
    });
  }
};

exports.getBy = function(req, res) {
  Order.getOrderById(req.params.orderId, function(err, order) {
    if (err)
      res.send(err);
    res.json(order);
  });
};

exports.update = function(req, res) {
  Order.updateById(req.params.taskId, new Order(req.body), function(err, order) {
    if (err)
      res.send(err);
    res.json(order);
  });
};

exports.remove = function(req, res) {
  Order.remove( req.params.orderId, function(err, order) {
    if (err)
      res.send(err);
    res.json({ message: 'Order successfully deleted' });
  });
};