//Jan 1st 1970 00:00:00 am = Timestamp 0 {Unix epic}
// See docs at www.momentjs.com/docs

var moment = require('moment');

// var date = new Date();
// var months = ['Jan', 'Feb']
// console.log(date.getMonth());

// var date = moment();
// date.add(100, 'year').subtract(9, 'months');
// console.log(date.format('MMM Do, YYYY'));

// 10:35 am
// 6:01 am

var date = moment();
console.log(date.format('h:mm a'))