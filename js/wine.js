function question (winequestion){
   if (!winequestion) {
       winequestion = "How many wine glasses would you like to see?"
   }
    let wineprompt = prompt(winequestion);
    let winepic = "https://images.unsplash.com/photo-1630369160812-26c7604cbd8c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80"
    console.log("question", winequestion);
   
    for(let x = 0; x < wineprompt; x++) {
        document.write('<img src="' + winepic + '">')
    }}
question();