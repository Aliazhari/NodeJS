const MongoClient = require('mongodb').MongoClient;
const credentials = require("./credentials.js");

// mongodb://<dbuser>:<dbpassword>@ds115768.mlab.com:15768/cs602db

// const dbUrl = 'mongodb://' + credentials.username +
// 	':' + credentials.password + '@' + credentials.host + ':' + credentials.port + '/' + credentials.database;
var dbUrl = 'mongodb://127.0.0.1:27017/cs602db';
    console.log(dbUrl);

MongoClient.connect(dbUrl,  (err, client) => {
		if (err) throw err;
		console.log('Successfully connected to',
			client.s.options.dbName);

		// Do database operations
		
		client.close();
});