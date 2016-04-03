var storeInfo = function(min, max, average, location) {
  this.minNumber = min;
  this.maxNumber = max;
  this.avgCookie = average;
//  this.cookies = cookies; *need to create array
//  this.totalCookies= total; *need to create array
  this.listId = location;
  this.getCustomer = function() {
  return Math.random() * (this.maxNumber - this.minNumber) + this.minNumber;
  }
}

var pioneerSquare = new storeInfo (17, 88, 5.2, "PioneerSquare");
var portlandAirport = new storeInfo (6, 24, 1.2, "PortlandAirport");
var washSquare = new storeInfo (11, 38, 1.9, "WashingtonSquare");
var sellWood = new storeInfo (20, 48, 3.3, "Sellwood");
var pearlDis = new storeInfo (3, 24, 2.6, "PearlDistrict");


var stores = [pioneerSquare, portlandAirport, washSquare, sellWood, pearlDis];
var hours = ["10:00 am", "11:00 am", "12:00 pm", "1:00 pm", "2:00 pm", "3:00 pm", "4:00 pm", "5:00 pm"];

for(var storeIndex = 0; storeIndex < stores.length; storeIndex++){
  var totalCookies = 0;
  for(var hoursIndex = 0; hoursIndex < hours.length; hoursIndex++){
    var store = stores[storeIndex];
    var cookieSold = Math.round(store.avgCookie * store.getCustomer());
  //  store.cookies.push(cookieSold);
    totalCookies += cookieSold;


    document.getElementById(store.listId).innerHTML += "<tr><td>" + hours[hoursIndex] + "</td><td>" + cookieSold + "</td></tr>"
  }
    document.getElementById(store.listId).innerHTML += "<tr><td>Total</td><td> " + totalCookies + "</td></tr>"
}


//function addStores() {
//  var table = document.getElementById(storeList);

//}





// var pioneerSquare = {
//   minNumber: 17,
//   maxNumber: 88,
//   avgCookie: 5.2,
//   cookies: [],
//   totalCookies: 0,
//   listId: "PioneerSquare",
//   getCustomer: function() {
//   return Math.random() * (this.maxNumber - this.minNumber) + this.minNumber;
//   }
// }
//
// var portlandAirport = {
//   minNumber: 6,
//   maxNumber: 24,
//   avgCookie: 1.2,
//   cookies: [],
//   totalCookies: 0,
//   listId: "PortlandAirport",
//   getCustomer: function() {
//   return Math.random() * (this.maxNumber - this.minNumber) + this.minNumber;
// }
// }
//
// var washSquare = {
//   minNumber: 11,
//   maxNumber: 38,
//   avgCookie: 1.9,
//   cookies: [],
//   totalCookies: 0,
//   listId: "WashingtonSquare",
//   getCustomer: function() {
//   return Math.random() * (this.maxNumber - this.minNumber) + this.minNumber;
// }
// }
//
// var sellWood = {
//   minNumber: 20,
//   maxNumber: 48,
//   avgCookie: 3.3,
//   cookies: [],
//   totalCookies: 0,
//   listId: "Sellwood",
//   getCustomer: function() {
//   return Math.random() * (this.maxNumber - this.minNumber) + this.minNumber;
// }
// }
//
// var pearlDis = {
//   minNumber: 3,
//   maxNumber: 24,
//   avgCookie: 2.6,
//   cookies: [],
//   totalCookies: 0,
//   listId: "PearlDistrict",
//   getCustomer: function() {
//   return Math.random() * (this.maxNumber - this.minNumber) + this.minNumber;
//   }
// };
//
