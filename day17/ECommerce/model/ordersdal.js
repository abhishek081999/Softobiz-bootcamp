

var sql = require('./db');

var Order=function(order ){
  this.order=order.order;
    this.status=order.status;
    this.created_at=new Date();
};

//C Operation code

Order.createOrder = function (newOrder, result) {    
    sql.query("INSERT INTO orders set ?", newOrder, function (err, res) {
            if(err) {
              console.log("error: ", err);
              result(err, null);
            }
            else{
              console.log(res.insertId);
              result(null, res.insertId);
            }
        });           
};


Order.getOrderById = function (orderId, result) {
    sql.query("Select * from orders where orderid = ? ", 
               orderId, function (err, res) {             
                                                if(err) {
                                                    console.log("error: ", err);
                                                    result(err, null);
                                                }
                                                else{
                                                    result(null, res);     
                                                }
        });   
};


// Order.getAllOrder = function (result) {
//     sql.query("Select * from orders", function (err, res) {
//             if(err) {
//               console.log("error: ", err);
//               result(null, err);
//             }
//             else{
//               console.log('orders : ', res);  
//               result(null, res);
//             }
//         });   
// };

Order.getAllOrder = function (result) {
  sql.query("Select * from orders", function (err, res) {
          if(err) {
            console.log("error: ", err);
            result(null, err);
          }
          else{
            console.log('tasks : ', res);  
            result(null, res);
          }
      });   
};
// order.updateById = function(id, order, result){
//     sql.query("UPDATE orders SET order = ? WHERE id = ?", [order.order, id], function (err, res) {
//             if(err) {
//                   console.log("error: ", err);
//                   result(null, err);
//                }
//              else{   
//                result(null, res);
//               }
//       }); 
//   };



  Order.remove = function(orderid, result){
    sql.query("DELETE FROM orders WHERE id = ?", [orderid], function (err, res) {
                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{
                    result(null, res);
                }
            }); 
};


module.exports= Order;