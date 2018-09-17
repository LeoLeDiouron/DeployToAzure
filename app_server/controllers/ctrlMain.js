const index = function(req,res){
  res.render('index', {title:'FIFA World Cup statistics'});
};
module.exports = {
    index
};