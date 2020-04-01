document.getElementById("name").focus(); //Focus on the name ID when the browser opens



//All variables from the DOM
var email = document.getElementById("email");
var other = document.getElementById("other-title");
var colorLabelHeadline = document.getElementById("colorlabel");
var jobtitle = document.getElementById("title");
var selectTheme = document.getElementById("selectTheme");
var color = document.getElementById("color");
var userpayment = document.getElementById("user-payment");
var colorlabel = document.getElementById("colors-js-puns");
var design = document.getElementById("design");
console.log(other);
var activityform = document.querySelector('.activities legend');
var activity = document.querySelector(".activities");
var activityinput = document.querySelectorAll(".activities input");
var creditcardform = document.getElementById("credit-card");
var paypalform = document.getElementById("paypal");
var bitcoinform = document.getElementById("bitcoin");
var form = document.querySelector("form");
var cardnumber = document.getElementById("cc-num");
var cardmonth = document.getElementById("");
var cardzip = document.getElementById("zip");
var cvv = document.getElementById("cvv");
var payPalFormI = document.querySelector("#payment option[value='paypal']");
var bitCoinFormI = document.querySelector("#payment option[value='bitcoin']");
// Getting the creditcard fields and creating the missing text fields
var creditcard = document.querySelector('option[value="credit card"]');
var creditcardfield = document.querySelector(".col-6");
var creditcardmissingtext = document.createElement('p');
creditcardfield.appendChild(creditcardmissingtext);
var pleaseSelectTheme = document.createElement("option");
color.appendChild(pleaseSelectTheme);




//Setting the Please select theme to the selected when the page opens and setting it's inner text to Please select theme
pleaseSelectTheme.selected = true;
pleaseSelectTheme.innerHTML = "Please Select Theme";

//Setting creditcard to selected
creditcard.selected = true;
//creditcardform.style.display = "none";
bitcoinform.style.display = "none";
paypalform.style.display = "none";




color.style.display = "none"; //startes of hiding the color for exceeds expectations
//Targetting the other option in the HTML and hiding it

colorLabelHeadline.style.display = "none";
function hideOther() {
    other.style.display = "none";
}

jobtitle.addEventListener("change", (event) => { //adding event listener on job title 

    if (event.target.value === "other") { //if the value is other it is shown


        other.style.display = "block";

        //   console.log("other pressed");
    }


    else {


        other.style.display = "none";
    }
});

function hideSelectTheme() {
    // selectTheme.style.display = "none";

}



design.addEventListener("change", (event) => { //adding the eventlistener og the design 


    if (event.target.value === "select theme") { //if the value is "select theme"




        for (i = 0; i < color.length; i++) { //loops through all the colors and hides them and shows please select theme

          
            color[i].style.display = "none";
            pleaseSelectTheme.style.display = "block";
            pleaseSelectTheme.selected = true;


        }





    }

    

    else if (event.target.value === "js puns") { //if the value is chosen as "js puns"



        for (i = 0; i < color.length; i++) { //it loops through all the colors
            colorLabelHeadline.style.display = "block";
            color.style.display = "block"; //displays all colors in case they were hidden before by the other function of select theme, so it doesnt return an error saying its undefined and already hidden
            color[i].style.display = "none"; //resetting all
            color[i].selected = false; //setting the already selected to false

            //selecting all options
            var cornflowerblue = document.querySelector('option[value="cornflowerblue"]');
            var darkslategrey = document.querySelector('option[value="darkslategrey"]');
            var gold = document.querySelector('option[value="gold"]');


            //setting them to true
            cornflowerblue.selected = true;
            darkslategrey.selected = true;
            gold.selected = true;
            cornflowerblue.style.display = "block";
            darkslategrey.style.display = "block";
            gold.style.display = "block";
            pleaseSelectTheme.style.display = "none";









        }

    }





    else if (event.target.value === "heart js") { //if the event of the event listener is heart js 



        for (i = 0; i < color.length; i++) { //loops through all colors
            colorLabelHeadline.style.display = "block";
            color.style.display = "block"; //displays all
            color[i].style.display = "none"; //resets all of them and thereby hides all of them
            color[i].selected = false; //removes the selected ones

            //targetting the options and setting them to true
            var tomato = document.querySelector('option[value="tomato"]');
            var steelblue = document.querySelector('option[value="steelblue"]');
            var dimgrey = document.querySelector('option[value="dimgrey"]');

            //setting the selected ones to true and displaying the value and hiding please select theme
            tomato.selected = true;
            steelblue.selected = true;
            dimgrey.selected = true;

            tomato.style.display = "block";
            steelblue.style.display = "block";
            dimgrey.style.display = "block";
            pleaseSelectTheme.style.display = "none";








        }
    }



}


);


//creating the activelabel if there is any errors
var activityLabel = document.createElement("label");
activity.appendChild(activityLabel);


var totalactivityCost = 0; //setting the activity cost to 0

activity.addEventListener("change", (e) => { //creating event listener 

    var activityclicked = event.target; //creating an variable for the activityclicked such that it can be used

    var activitycost = activityclicked.getAttribute("data-cost"); //getting the data-cost of the event clicked 
    var activitycostint = parseInt(activitycost); //the intial is a string, so converting the string to an int

    var datadayandtime = activityclicked.getAttribute(`data-day-and-time`); //getting the date and time

    if (activityclicked.checked) { //if the event is clicked


        totalactivityCost += activitycostint; //adding the converted parseInt value to the total activitycost
        //console.log(totalactivityCost);  logging it out
        activityLabel.textContent = "Total: " + "$" + totalactivityCost; //the label displays the total

        //console.log(datadayandtime + "date and time");


    }
    else {


        //else, that is it is unchecked  (no need for else if)
        totalactivityCost -= activitycostint; //subtract it
        //       console.log(totalactivityCost);
        activityLabel.textContent = "Total: " + "$" + totalactivityCost;


    }




    for (i = 0; i < activityinput.length; i++) { //runs through all activityInputs


        var datadayandtimeI = activityinput[i].getAttribute(`data-day-and-time`); //gets the attributes day and time

        if (datadayandtime === datadayandtimeI && activityclicked !== activityinput[i]) {
            //if day and time of the clicked day and time, is equal to any of the other activityInputs in the list, and the it is not the one that is clicked

            //      console.log(activityinput[i]);

            if (activityclicked.checked) { //and if the the activity is clicked

                activityinput[i].disabled = true; //setting all of the activity to disabled that are not in alignment with the if statement

            }

            else { //else it iremoves the disabled fields
                activityinput[i].disabled = false;
                //  console.log("not checked");

            }




        }



    }

}



);
//the payment varibales and the select method

var paymentelement = document.getElementById("payment");
var selectpayment = document.querySelector('option[value="select method"]')
//console.log(selectpayment);


paymentelement.addEventListener("click", (e) => { //adding an event listener to the paymentelement
    for (i = 0; i < paymentelement.length; i++) {
        selectpayment.style.display = "none"; //hiding all if select method is chosen



        if (e.target.value == "credit card") { //if the e.target.value == credit card


            creditcardform.selected = true;
            creditcardform.style.display = "block"; //display the creditcard form
            bitcoin.style.display = "none"; //hide the bitcoin
            paypalform.style.display = "none"; //hide the paypal


            //       creditcard.style.display = "block";

        }

        else if (e.target.value == "paypal") { //if the e.target.value == to option paypal

            paypalform.selected = true;
            paypalform.style.display = "block"; //display the paypalform
            bitcoin.style.display = "none"; //hide the bitcoin
            creditcardform.style.display = "none"; //hide the creditcardfomr
           


        }
        else if (e.target.value == "bitcoin") { //if target value is bitcoin

            bitcoin.selected = true;
            bitcoin.style.display = "block"; //show bitcoin
            paypalform.style.display = "none"; //hide paypal
            creditcardform.style.display = "none"; //hide creditcard

        }




    }

});



const payPalOption = () =>

{
    if (payPalFormI.selected === true) {
        creditcard.selected = false;


        console.log("pay pal chosen");

        return true;



    }

    else {
        console.log("Paypal not chosen");
        return false;

    }
   

}


const bitCoinOption = () =>
{


    if (bitCoinFormI.selected === true) {
        creditcard.selected = false;
        console.log("Bit coin chosen");
        return true;
    }
    else
    {

        console.log("bit coin not chosen");
        return false;

    }

}

/*
const bitCoinInput = () => {


    if (bitcoinform.selected = true) {

        console.log("bitcoin selected");

        return true;

    }

}
*/

const nameValidator = () => { //function of name validator

    var nameInput = document.getElementById("name").value; //gets the user value og the input

    if (nameInput.length > 0) { //if the value is more than 0

        document.getElementById("name").style.borderColor = "green"; //set it to green
        return true; //return true

    }

    else {
        document.getElementById("name").style.borderColor = "red"; //else set it to red

        return false; // return false

    }


}

var emailKeyUp = document.getElementById("mail"); //get id of email 



const emailValidator = () => { //function of emailvalidator




    var emailInput = document.getElementById("mail").value; //getting value of user on the mail input
    // console.log(emailInput);
    var emailindex = emailInput.indexOf("@"); //saves the indexOf i.e before @
    var emaillastindex = emailInput.lastIndexOf("."); //saves the last bit after the .

    // console.log(emailindex + "this is the index");
    //  console.log(emaillastindex + "this is after index");

    if (emailindex > 1 && emaillastindex > emailindex + 1) { //if the value of the email index is more than 1, and emaillast
        document.getElementById("mail").style.borderColor = "green"; //set border to green
        return true;
    }

    else {
        document.getElementById("mail").style.borderColor = "red"; // else set style border to green
        return false;

    }

}



emailKeyUp.addEventListener('keyup', emailValidator); //creating the email validator and listening for keyups




activityerrormessage = document.createElement("label"); //creating the activity error message
activityform.appendChild(activityerrormessage); //appending it
const activityValidator = () => { //creating function for the activityvalidtaor


    for (i = 0; i < activityinput.length; i++) { //goes through all activityinputs

        if (activityinput[i].checked) { //if anyone of them is checked set it to green
            activityform.style.borderColor = "green";
            //      console.log("activity chosen");
            activityerrormessage.textContent = ""; //set the error message to empty
            return true; //returns true
        }

        else {
            activityform.style.borderColor = "red"; //if it returns true, it will skip this code, if not it will go here no need for else

            activityerrormessage.textContent = "Please choose atleast one activity"; //sets error message
            activityerrormessage.style.color = "red"; //sets the color to red
        //returns false
        }
        

    }



}


const validatecardnumber = () => {

    const cardnumberInput = cardnumber.value; //getting the user value

    if (creditcard.selected === true) {

        console.log("credit card form selected");

        if (cardnumber.value === "") { //if there is no input the error message displays
            //   console.log("no value entered");
            creditcardmissingtext.textContent = "The credit card field cannot be empty, please use a valid credit-card";
            creditcardmissingtext.style.color = "red";

            return false;
            //returns false
        }

        //if it is more than 16
        else if (cardnumberInput.length > 16) {
            creditcardmissingtext.textContent = "Enter a number between 13-16 characters";
            creditcardmissingtext.style.color = "red";

            return false;





        }
        //if it is less than 13

        else if (cardnumberInput.length < 13) {

            creditcardmissingtext.textContent = "Enter a number more than 13 digits";
            creditcardmissingtext.style.color = "red";
            return false;
        }

        else if (cardnumberInput.length >= 13 || cardnumberInput.length <= 16) {

            //if between 13 and 16
            creditcardmissingtext.textContent = "✓";

            creditcardmissingtext.style.color = "green";

            var ccNum = document.getElementById("cc-num");
            ccNum.style.borderColor = "green";

            return true;


        }

    }

        else {
                console.log("creditcard not selected");
                return false;

              }

    return false;
    // const vaildUserInputEmail = (/^[A-za-z0-9]+@+[A-za-z0-9]+\.[A-za-z]{2,3}$/).test(userInputEmail.value);
    // return vaildUserInputEmail;

}

//creating the zip missing label
var cardnumberzipmissing = document.createElement("label");
var cardnumberzipinput = document.querySelector(".col-3");
cardnumberzipinput.appendChild(cardnumberzipmissing);

const cardnumerzipvalidtor = () => {
    //creating the cardnumber zip function
    if (creditcard.selected === true) {

        var cardzipValue = cardzip.value; //getting user input


        if (cardzipValue.length == 5) { //if equal to 5 its ok

            cardnumberzipmissing.textContent = "OK";

            cardnumberzipmissing.style.color = "green";
            return true;


        }

        else {
            //enter 5 digit number

            cardnumberzipmissing.textContent = "Please enter a 5 digit number";
            cardnumberzipmissing.style.color = "red";

            return false;


        }
    }

    return false;
}

//creates errortext for cvv
var cvvMissingText = document.createElement("label");

var cvvparent = cvv.parentNode.insertBefore(cvvMissingText, cvv.nextSibling);
console.log(cvvparent);


//should be called cvv validator
const hideCVV = () => {


    if (creditcard.selected === true) {

        var cvvInput = cvv.value; //gets cvv value from the user
        //console.log(cvvInput + "this is the cvvInput");

        if (cvvInput.length == 3) { //if the value is 3

            // console.log("3!!");
            cvvMissingText.textContent = "OK";
            cvvMissingText.style.color = "green";
            return true;


        }

        else { //if it is not 3
            console.log("not 3");
            cvvMissingText.textContent = "Please enter a valid 3 digit number";
            cvvMissingText.style.color = "red";
            return false;




        }
    }

    return false;

    
}



hideOther(); //the hide other  function is called


creditcardform.addEventListener("keyup", validatecardnumber);
creditcardform.addEventListener("keyup", cardnumerzipvalidtor);
creditcardform.addEventListener("keyup", hideCVV);



form.addEventListener("submit", (e) => {
    //the event listener listens on each function, it calls it first to check it and read through it, if there is anywhere where it returns
    //false, the !function() is ran and the e.preventDefault is then run
    nameValidator();
    if (!nameValidator()) {

        e.preventDefault();
        console.log("No name");

    }

    emailValidator();

    if (!emailValidator()) {

        e.preventDefault();
        console.log("No email");


    }





  activityValidator();


    if (!activityValidator()) 

   {

    console.log("activity not chosen");
        e.preventDefault();

    }

    if (payPalFormI.selected === true) {

        payPalOption();
    }


    if (bitCoinFormI.selected === true) {

        bitCoinOption();
    }



    if (creditcard.selected === true) {

        validatecardnumber();


        if (!validatecardnumber()) {
            console.log("no cardnumber");
            e.preventDefault();


        }
    }
    




    if (creditcard.selected === true) {

        cardnumerzipvalidtor();


        if (!cardnumerzipvalidtor()) {


                console.log("no zip");
                e.preventDefault();

            }

    }



    if (creditcard.selected === true) {

        hideCVV();

            if (!hideCVV()) {


                console.log("no zip");

                e.preventDefault();


        }
    }









});
