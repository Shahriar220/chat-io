const moment = require('moment')

// var date = moment();
// date.add(1, 'years')
// console.log(date.format('MMM Do, YYYY'));
var createdAt = 1234
var date = moment(createdAt);
console.log(date.format('h:mm a'))