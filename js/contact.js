let question = prompt ('How many bottles do you want to order?');
console.log('question',);

if (question >= 5) {
     alert('Great! We hope you will enjoy!')
} else if (question < 5) {
    alert ('Did you know you can receive 20% off for 5+ bottles?')
} else {
     alert('We apologize, please call 888-123-4567')
     console.log ('Thats too bad')
}