// app/models/schedule.js
// grab the mongoose module
var mongoose = require('mongoose');

// define our schedule model
// module.exports allows us to pass this to other files when it is called
module.exports = mongoose.model('Schedule', {
    name : {type : String, default: ''}
});