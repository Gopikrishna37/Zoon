// Requiring modules
const express = require('express');
const app = express();
const mssql = require("mysql");

// Get request
app.get('/', function (req, res) {
	console.log("server", res)
	// Config your database credential
	const config = {
		authentication: {
			type: 'default',
			options: {
				userName: process.env.COMPUTERNAME + "\\" + process.env.USERNAME, // Use the current Windows user
				password: '', // Windows Authentication doesn't require a password
			},
		},
		server: 'localhost',
		database: 'StudentMark',
	}
	// Connect to your database
	mssql.connect(config, function (err) {

		// Create Request object to perform
		// query operation
		let request = new mssql.Request();

		// Query to the database and get the records
		request.query('select * from student1',
			function (err, records) {

				if (err) console.log(err)

				// Send records as a response
				// to browser
				res.send(records);

			});
	});
});

let server = app.listen(5000, function () {
	console.log('Server is listening at port 5000...');
});
