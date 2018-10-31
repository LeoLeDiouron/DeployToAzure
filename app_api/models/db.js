const mongoose = require("mongoose");
const db_uri = "mongodb://LeoLD:5gzqk9uo@ds119663.mlab.com:19663/countries_stats";

mongoose.connect(db_uri);

mongoose.connection.on('connected', function() {
    console.log("Mongoose connected at " + db_uri);
});
mongoose.connection.on('error', function() {
    console.log("Mongoose error at " + db_uri);
});
mongoose.connection.on('disconnected', function() {
    console.log("Mongoose disconnected at " + db_uri);
});

require("./appSchema");
