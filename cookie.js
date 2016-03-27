var pioneerSquare = {
  minNumber: 17,
  maxNumber: 88,
  avgCookie: 5.2,
  getCustomer: function() {
  Math.floor(Math.random() * (50-5)) + 5;
  }
}


var portlandAirport = {
  minNumber: 6,
  maxNumber: 24,
  avgCookie: 1.2,
  getCustomer: function() {
  Math.floor(Math.random() * (50-5)) + 5;
}
}

var washSquare = {
  minNumber: 11,
  maxNumber: 38,
  avgCookie: 1.9,
  getCustomer: function() {
  Math.floor(Math.random() * (50-5)) + 5;
}
}

var sellWood = {
  minNumber: 20,
  maxNumber: 48,
  avgCookie: 3.3,
  getCustomer: function() {
  Math.floor(Math.random() * (50-5)) + 5;
}
}

var pearlDis = {
  minNumber: 3,
  maxNumber: 24,
  avgCookie: 2.6,
  getCustomer: function() {
  Math.floor(Math.random() * (50-5)) + 5;
}
}

var locations = [pioneerSquare, portlandAirport, washSquare, sellWood, pearlDis];

function cookiesHr() {
  for(i = 0; i < locations.length; i++) {
    for(x = 0; x < 8; x++) {
      var cookes = locations[i].avgCookie * locations[i].getCustomer();
      //TODO:create a new propety for each ocject
    }
  }
}




//function addTotals(){
  //var storeList = document.getElementById("pioneerSquare");
  //listItem.innerHTML = pioneerSquare.getCookietotal();
  //var storeList = document.getElementById("portlandAirport");
  ///listItem.innerHTML = portlandAirport.getCookietotal();
  //var storeList = document.getElementById("washSquare");
//  listItem.innerHTML = washSquare.getCookietotal();
//  var storeList = document.getElementById("sellWood");
//  listItem.innerHTML = sellWood.getCookietotal();
//  var storeList = document.getElementById("pearlDis");
//  listItem.innerHTML = pearlDis.getCookietotal();
//}


//function addtoTable (){
  //var table = document.getElementById("storeList")
//}
