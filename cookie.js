var storeInfo = function(min, max, average, location) {
  this.minNumber = min;
  this.maxNumber = max;
  this.avgCookie = average;
  this.listId = location;
  this.getCustomer = function() {
  return Math.random() * (this.maxNumber - this.minNumber) + this.minNumber;
  }
  this.writeHeader = function() {
    document.getElementById("stores").innerHTML += "<h3>" + this.listId + "</h3>"
  }
  this.writeTable = function() {
    var storeTable = "<table>"
    for(var hoursIndex = 0; hoursIndex < hours.length; hoursIndex++){
      var cookieSold = Math.round(this.avgCookie * this.getCustomer());
      totalCookies += cookieSold;
      storeTable += "<tr><td>" + hours[hoursIndex] + "</td><td>" + cookieSold + "</td></tr>"
    }
      storeTable += "<tr><td>Total</td><td> " + totalCookies + "</td></tr></table>"
      document.getElementById("stores").innerHTML += storeTable
  }
}

var pioneerSquare = new storeInfo (17, 88, 5.2, "Pioneer Square");
var portlandAirport = new storeInfo (6, 24, 1.2, "Portland Airport");
var washSquare = new storeInfo (11, 38, 1.9, "Washington Square");
var sellWood = new storeInfo (20, 48, 3.3, "Sellwood");
var pearlDis = new storeInfo (3, 24, 2.6, "Pearl District");

var stores = [pioneerSquare, portlandAirport, washSquare, sellWood, pearlDis];
var hours = ["10:00 am", "11:00 am", "12:00 pm", "1:00 pm", "2:00 pm", "3:00 pm", "4:00 pm", "5:00 pm"];

for(var storeIndex = 0; storeIndex < stores.length; storeIndex++){
  var totalCookies = 0;
  var store = stores[storeIndex];
  store.writeHeader();
  store.writeTable();
}












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
