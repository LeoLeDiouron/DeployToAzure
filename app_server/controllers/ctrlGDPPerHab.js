const countries = function(req,res){
    res.render('gdpPerHab', {countries:[
            {country:'Qatar',gdpPerHab:'124,927',rank:'1'},
            {country:'Macau',gdpPerHab:'114,430',rank:'2'},
            {country:'Luxembourg',gdpPerHab:'109,192',rank:'3'},
            {country:'Singapore',gdpPerHab:'90,531',rank:'4'},
            {country:'Brunei',gdpPerHab:'76,743',rank:'5'},
            {country:'Ireland',gdpPerHab:'72,632',rank:'6'},
            {country:'Norway',gdpPerHab:'70,590',rank:'7'},
            {country:'Kuwait',gdpPerHab:'69,669',rank:'8'},
            {country:'United Arab Emirates',gdpPerHab:'68,245',rank:'9'},
            {country:'Switzerland',gdpPerHab:'61,360',rank:'10'},
        ]});
};
module.exports = {
    countries
};