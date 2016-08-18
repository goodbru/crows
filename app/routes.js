 // app/routes.js

// grab the schedule model we just created
var Schedule = require('./models/schedule');

    module.exports = function(app) {

        // server routes ===========================================================
        // handle things like api calls
        // authentication routes

        // sample api route
        app.get('/api/schedules', function(req, res) {
            // use mongoose to get all schedules in the database
            Schedule.find(function(err, schedules) {

                // if there is an error retrieving, send the error. 
                                // nothing after res.send(err) will execute
                if (err)
                    res.send(err);

                res.json(schedules); // return all schedules in JSON format
            });
        });

        // route to handle creating goes here (app.post)
        // route to handle delete goes here (app.delete)

        // frontend routes =========================================================
        // route to handle all angular requests
        app.get('*', function(req, res) {
            res.sendfile('./public/index.html'); // load our public/index.html file
        });

    };

    // lsof -n -i :3000 | grep LISTEN
// kill -9 16599
