var pioneerSquare = {
  minNumber: 17,
  maxNumber: 88,
  avgCookie: 5.2,
  cookies: [],
  totalCookies: 0,
  listId: "PioneerSquare",
  getCustomer: function() {
  return Math.random() * (this.maxNumber - this.minNumber) + this.minNumber;
  }
}

var portlandAirport = {
  minNumber: 6,
  maxNumber: 24,
  avgCookie: 1.2,
  cookies: [],
  totalCookies: 0,
  listId: "PortlandAirport",
  getCustomer: function() {
  return Math.random() * (this.maxNumber - this.minNumber) + this.minNumber;
}
}

var washSquare = {
  minNumber: 11,
  maxNumber: 38,
  avgCookie: 1.9,
  cookies: [],
  totalCookies: 0,
  listId: "WashingtonSquare",
  getCustomer: function() {
  return Math.random() * (this.maxNumber - this.minNumber) + this.minNumber;
}
}

var sellWood = {
  minNumber: 20,
  maxNumber: 48,
  avgCookie: 3.3,
  cookies: [],
  totalCookies: 0,
  listId: "Sellwood",
  getCustomer: function() {
  return Math.random() * (this.maxNumber - this.minNumber) + this.minNumber;
}
}

var pearlDis = {
  minNumber: 3,
  maxNumber: 24,
  avgCookie: 2.6,
  cookies: [],
  totalCookies: 0,
  listId: "PearlDistrict",
  getCustomer: function() {
  return Math.random() * (this.maxNumber - this.minNumber) + this.minNumber;
}
};

var stores = [pioneerSquare, portlandAirport, washSquare, sellWood, pearlDis];
var hours = ["10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm"];

for(var storeIndex = 0; storeIndex < stores.length; storeIndex++){
  for(var hoursIndex = 0; hoursIndex < hours.length; hoursIndex++){
    var store = stores[storeIndex];
    var cookieSold = Math.round(store.avgCookie * store.getCustomer());
    store.cookies.push(cookieSold);
    store.totalCookies += cookieSold;
    document.getElementById(store.listId).innerHTML += "<li>" + hours[hoursIndex] + ": " + cookieSold + "</li>"
  }
      document.getElementById(store.listId).innerHTML += "<li>Total: " + store.totalCookies + "</li>"
}
