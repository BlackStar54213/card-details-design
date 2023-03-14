function updateDetails(){
    //to print the holder name
    
        var cardName = document.getElementById("cardholdername").value;
        document.getElementById("cardname").innerHTML=(cardName);


    //to print the card number

        var cardNumber = document.getElementById("cardholdernumber").value;
        document.getElementById("cardnumber").innerHTML=(cardNumber);
    

    // to print the exp date
    
        var cardMonth = document.getElementById("month").value;
        var cardYear = document.getElementById("year").value;
        document.getElementById("carddate").innerHTML=(cardMonth +"/" +cardYear);
    
    
    //to print the cvc
        var expDate = document.getElementById("exp").value;
        document.getElementById("cvc").innerHTML=(expDate);
     
}

function myFunction() {
    document.getElementById("complete").style.visibility = "hidden";
  }
  function myFunctional() {
    document.getElementById("complete").style.visibility = "visible";
    
  }

