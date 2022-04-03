function winegame(){
    let userAnswer = prompt('Guess how many wine bottles we have!\r\Tip: Guess 500');
    let correctAnswer = 500;
    let attempts = 5;

    for (let i = 1; i < attempts; i++){
        while (userAnswer < 1 || userAnswer > 1000){
            userAnswer = prompt('Please Try Again, enter a number between 1 and 1000');
        }   
        if (userAnswer == correctAnswer){
            alert('Correct! Use code 10OFF at checkout to receive 10% off!');
            break;
        } else if (userAnswer > correctAnswer){
            userAnswer = prompt('Sorry that is too high, please try again!');      
        } else if (userAnswer < correctAnswer){
            userAnswer = prompt('Sorry, that is too low, please try again!');
        }
        if (i == 4){
                alert('Sorry, the correct answer is ' + correctAnswer);
        }
    }
}         