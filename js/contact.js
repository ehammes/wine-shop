function winegame(){
    let userAnswer = prompt('Guess how many wine bottles we have\r\Tip: Guess 500');
    let correctAnswer = 500;
    let attempts = 5;

    for (let i = 1; i < attempts; i++){
        while (userAnswer < 1 || userAnswer > 500){
            userAnswer = prompt('Please Try Again!');
        }   
        if (userAnswer == correctAnswer){
            alert('Correct! Use code 10OFF at checkout to receive 10% off!');
            break;
        } else if (userAnswer > correctAnswer){
            userAnswer = prompt('Sorry that is too high, please try again!');      
        } else if (userAnswer < correctAnswer){
            userAnswer = prompt('Sorry, that is too low, please try again!');
        }
        if(i = 7){
                alert('The correct answer was ' + correctAnswer);
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