// Step 1. --> Head to the airport via cab/uber, train, bus
// Step 2. 

// DECLARE function
// Arguments = function input

// let airport = 'SEA airport';
// let cab = 'taxi';
// let checkin = 'get ticket';

// Pass data into your functions
function gototheairport(airport, cab, checkin){
    // Checking to make sure all inputs are here
    if (airport) {
        console.log ('Where is the airport')
    } else {
        console.log ('Sorry, you are lost')
    }
// All your code/logic lives here
let travel = 'Here is how to arrive to the ' + airport + ' via ' + cab + ' and then ' + checkin;
console.log('HELLO!', travel);

return travel
}

// Call/invoke function
gototheairport();
