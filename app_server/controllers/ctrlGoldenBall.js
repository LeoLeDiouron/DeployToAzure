const winnerlist = function(req,res){
    res.render('goldenball', {winners:[
            {year:'1990',player:'Salvatore Schillaci (Italy)'},
            {year:'1994',player:'Romario (Brazil)'},
            {year:'1998',player:'Ronaldo (Brazil)'},
            {year:'2002',player:'Oliver Khan (Germany)'},
            {year:'2006',player:'Zinedine Zidane (France)'},
            {year:'2010',player:'Diego Forlan (Uruguay)'},
            {year:'2014',player:'Lionel Messi (Argentina)'},
            {year:'2018',player:'Luka Modric (Croacia)'},
        ]});
};
module.exports = {
    winnerlist
};