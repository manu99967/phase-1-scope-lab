// 1. Declare customerName globally and initialize to 'bob'
let customerName = 'bob';

function returnCustomerName() {
  return customerName;
}

// 2. Function to uppercase customerName
function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

// 3. Declare bestCustomer (undefined initially)
let bestCustomer;

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
  // This line will cause an error because leastFavoriteCustomer is const
  leastFavoriteCustomer = 'bob';
}
