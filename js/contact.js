function winegame () {
    let userAnswer = prompt ('Guess how many wine bottles we have')
    let correctAnswer = 500;
    let attempts = 5

    while (userAnswer < 1 || userAnswer > 100) {
        userAnswer = prompt ('Please Try Again!')
}
    if (userAnswer == 500){
        alert ('Correct! Use code 10OFF at checkout to receive 10% off!');
    } else if (userAnswer != 500) {
        alert ('Sorry, that is incorrect');
    }
}

// let question = prompt ('How many bottles do you want to order?');
// console.log('question',);

// if (question >= 5) {
//     alert('Great! We hope you will enjoy!')
// } else if (question < 5) {
//    alert ('Did you know you can receive 20% off for 5+ bottles?')
// } else {
//    alert('We apologize, please call 888-123-4567')
//    console.log ('Thats too bad')
// }