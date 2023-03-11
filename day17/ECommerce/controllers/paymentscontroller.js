

var Payments = require('../model/paymentsdal');

exports.getAll = function(req, res) {
  Payments.getAllPayments(function(err, payments) {
    if (err)
      res.send(err);
    res.send(payments);
  });
};



exports.getBy = function(req, res) {
  Payments.getpaymentsById(req.params.paymentId, function(err, payments) {
    if (err)
      res.send(err);
    res.json(payments);
  });
};

exports.update = function(req, res) {
  Payments.updateById(req.params.paymentId, new Payments(req.body), function(err, payments) {
    if (err)
      res.send(err);
    res.json(payments);
  });
};

exports.remove = function(req, res) {
  Payments.remove( req.params.paymentId, function(err, payments) {
    if (err)
      res.send(err);
    res.json({ message: 'payments successfully deleted' });
  });
};