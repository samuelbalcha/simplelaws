
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
    res.render('custom', { title : 'Simplelaw'});
}

exports.client = function(req, res){
    res.render('client', { title : 'Simplelaw'});
}

exports.lawyers = function(req, res){
    res.render('lawyers', { title : 'Lawyers'});
}
exports.logo = function(req, res){
    res.render('logo', { title : 'Logos'});
}