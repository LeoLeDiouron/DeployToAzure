const countries = function(req,res){
    res.render('population', {countries:[
            {country:'China',population:'1,381',rank:'1'},
            {country:'India',population:'1 347',rank:'2'},
            {country:'United States',population:'327',rank:'3'},
            {country:'Indonesia',population:'264',rank:'4'},
            {country:'Brazil',population:'207',rank:'5'},
            {country:'Pakistan',population:'207',rank:'6'},
            {country:'Nigeria',population:'186',rank:'7'},
            {country:'Bangladesh',population:'160',rank:'8'},
            {country:'Russia',population:'146',rank:'9'},
            {country:'Japan',population:'126',rank:'10'},
        ]});
};
module.exports = {
    countries
};