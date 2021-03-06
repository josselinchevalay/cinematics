 // app/routes.js

// grab the nerd model
module.exports = function(app, Db) {

	
	// server routes ===========================================================
	// handle things like api calls
	// authentication routes

	// sample api route
	// get all cinematic
	app.get("/api/cinematics", function(req, resp){
		resp.json(Db.where().value());
	});
	// post
	app.post("/api/cinematics", function(req, resp){
		//console.log(req.body);
		Db.push(req.body).value();
	});
	/*app.get('/api/nerds', function(req, res) {
		// use mongoose to get all nerds in the database
		Nerd.find(function(err, nerds) {

			// if there is an error retrieving, send the error. nothing after res.send(err) will execute
			if (err)
				res.send(err);

			res.json(nerds); // return all nerds in JSON format
		});
	});*/

	// route to handle creating (app.post)
	// route to handle delete (app.delete)

	// frontend routes =========================================================
	// route to handle all angular requests
	app.get('*', function(req, res) {
		res.sendfile('./public/views/index.html'); // load our public/index.html file
	});

};


