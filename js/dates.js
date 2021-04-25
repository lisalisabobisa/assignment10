//STEP 1
// let d = function(month) {
//     return new Date(month).getDate();
// };
// console.log(d(3));

//STEP 2
// let month = function(monthName) {
//     months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
//     return months[monthName.getMonth()];
// };
// console.log(month(new Date("11/14/1981")));

//STEP 3
// let weekend = function(isit) {
//     let d = new Date(isit);
//     if (d.getDay() === 6 || d.getDay() === 0) {
//         return "weekend";
//     } 
// }
// console.log(weekend('11/14/1981'));

//STEP 4
// let d = new Date();
// let weekday = new Array(7);
// weekday[0] = "Sunday";
// weekday[1] = "Monday";
// weekday[2] = "Tuesday";
// weekday[3] = "Wednesday";
// weekday[4] = "Thursday";
// weekday[5] = "Friday";
// weekday[6] = "Saturday";

// console.log(weekday[d.getDay() + 6]);


//STEP 5
// let d = new Date();
// let weekday = new Array(7);
// weekday[0] = "Sunday";
// weekday[1] = "Monday";
// weekday[2] = "Tuesday";
// weekday[3] = "Wednesday";
// weekday[4] = "Thursday";
// weekday[5] = "Friday";
// weekday[6] = "Saturday";

// console.log(weekday[d.getDay()].slice(0,1));
