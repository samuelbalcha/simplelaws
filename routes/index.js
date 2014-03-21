
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Express' });
};

exports.onlycoin = function(req, res){

    res.render('onlycoinstyle', { title: 'Only coin style' });
}