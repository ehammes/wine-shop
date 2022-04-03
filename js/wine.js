function question (winequestion){
   if (winequestion) {
       winequestion = "How many wine glasses would you like to see?"
   }
    let wineprompt = prompt(winequestion);
    console.log("question", winequestion)
   
    for(let x = 0; x < wineprompt; x++) {
        document.write("<img src=/wine-shop/Images/red_wine_glass/jpeg>")
    }}
question();