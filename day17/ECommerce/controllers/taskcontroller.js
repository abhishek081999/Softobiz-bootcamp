
var Order = require('../model/taskdal');

exports.getAll = function(req, res) {
  Order.getAllTask(function(err, task) {
    if (err)
      res.send(err);
    res.send(task);
  });
};

exports.insert = function(req, res) {
  
  var new_order= new Order(req.body);

  //handles null error 
   if(!new_order.order || !new_order.status){
      res.status(400).send({ error:true, message: 'Please provide order/status' });
    }
   else{
    Order.createTask(new_task, function(err, task) {
      if (err)
      res.send(err);
    res.json(task);
    });
  }
};

exports.getBy = function(req, res) {
  Order.getTaskById(req.params.taskId, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};

exports.update = function(req, res) {
  Order.updateById(req.params.taskId, new Task(req.body), function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};

exports.remove = function(req, res) {
  Task.remove( req.params.taskId, function(err, task) {
    if (err)
      res.send(err);
    res.json({ message: 'Task successfully deleted' });
  });
};