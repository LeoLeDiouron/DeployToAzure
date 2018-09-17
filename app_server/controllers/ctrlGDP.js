const countries = function(req,res){
    res.render('gdp', {countries:[
            {country:'China',gdp:'23,159',rank:'1'},
            {country:'United States',gdp:'19,390',rank:'2'},
            {country:'India',gdp:'9,459',rank:'3'},
            {country:'Japan',gdp:'5,428',rank:'4'},
            {country:'Germany',gdp:'4,170',rank:'5'},
            {country:'Russia',gdp:'4,007',rank:'6'},
            {country:'Indonesia',gdp:'3,242',rank:'7'},
            {country:'Brazil',gdp:'3,240',rank:'8'},
            {country:'United Kingdom',gdp:'2,914',rank:'9'},
            {country:'France',gdp:'2,835',rank:'10'},
        ]});
};
module.exports = {
    countries
};
