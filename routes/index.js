
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Express' });
};

exports.onlycoin = function(req, res){

    res.render('onlycoinstyle', { title: 'Only coin style' });
}

exports.custom = function(req, res){
    res.render('custom', { title : 'Custom'});
}