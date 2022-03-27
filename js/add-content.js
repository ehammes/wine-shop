// let firstName = prompt('What is your name?');
// let age = prompt("What is your age?")
// let favoriteWine = prompt ("What is your favorite wine?");
// alert('Hello' + firstName);

const btn = document.getElementById('btn');

btn.addEventListener('click', function onClick(event) {
console.log(event.target);
  document.body.style.backgroundColor = 'green';
});

let wine = prompt ('What kind of wine are you looking for?');
console.log('wine', wine, typeof wine);

if (wine === 'Pinot Noir') {
    alert('Great Choice! We have some in stock!')
} else if (wine === 'Pinot Grigio') {
    alert ('We apologize, we are out of stock.')
} else if (wine === 'Cabernet Sauvignon') {
    alert('We have a great selection of Cabs!')
} else {
    alert('We have plenty of recommendations we can provide!')
}

const aNumber = Number(window.prompt("How many bottles of wine do you want to purchase?"));
if (aNumber == 0) {
    alert('Can we provide a recommendation?')
} else if (aNumber >= 1) {
    alert ('You qualify for a discount!')
} else {
    alert ('Do not forget to try a free tasting!')
}

if (window.confirm("Do you need further assistance?")) {
    window.open('Contact-Us.html', "Thanks for Visiting!");
  }


// CONDITIONALS
// based on something else --> 
// 1 > 5 --> False
// 'Josh' - 7 --> False

// IF TRUE
// if (firstName === 'Alex') {
//    alert ('WELCOME ALEX!')
//} 
// ELSE aka OTHERWISE --> FALSE
// else {
// alert('YOU ARE NOT ALLOWED!')
// }

// document.write('<h3>' + 'hello' + firstName + '</h3>');