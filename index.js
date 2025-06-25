// index.js

// 1. Declare customerName globally with var
var customerName = 'bob';

function returnCustomerName() {
  return customerName;
}

// 2. Function to uppercase customerName
function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

// 3. Declare bestCustomer globally with var
var bestCustomer;

function setBestCustomer() {
  bestCustomer = 'not bob';
}

// 4. Overwrite bestCustomer
function overwriteBestCustomer() {
  bestCustomer = 'maybe bob';
}

// 5. Declare leastFavoriteCustomer as constant
const leastFavoriteCustomer = 'alice';

function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = 'bob'; // This will throw an error as expected
}