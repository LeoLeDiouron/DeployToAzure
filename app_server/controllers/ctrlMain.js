const index = function(req,res){
  res.render('index', {title:'Statistics of countries around the world.'});
};
module.exports = {
    index
};