
/*
 * GET home page.
 */
// var product = require('../controllers/product');

// var all_product = product.get_product;


exports.index = function(req, res){
  res.render('index/index',{title:'index'});
};
