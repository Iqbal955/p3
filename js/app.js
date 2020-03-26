document.getElementById("name").focus();
var email = document.getElementById("email");
var other = document.getElementById("other-title");

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

var creditcard = document.querySelector('option[value="credit card"]');
var creditcardfield = document.querySelector(".col-6");
var creditcardmissingtext = document.createElement('p');
creditcardfield.appendChild(creditcardmissingtext);
var pleaseSelectTheme = document.createElement("option");
color.appendChild(pleaseSelectTheme);
pleaseSelectTheme.selected = true;
pleaseSelectTheme.innerHTML = "Please Select Theme";


console.log(form);
creditcard.selected = true;
//creditcardform.style.display = "none";
bitcoinform.style.display = "none";
paypalform.style.display = "none";



function hideOther() {
    other.style.display = "none";
}

jobtitle.addEventListener("change", (event) => {

    if (event.target.value === "other") {


        other.style.display = "block";

        console.log("other pressed");
    }
});

function hideSelectTheme() {
    // selectTheme.style.display = "none";

}


design.addEventListener("change", (event) => {
    //1Select, nothing changes, 
    //2change, it goes to the else statement regardless
    //3 click, it goes to the else statement regardless

    if (event.target.value === "select theme") {




        for (i = 0; i < color.length; i++) {


            color[i].style.display = "none";
            pleaseSelectTheme.style.display = "block";
            pleaseSelectTheme.selected = true;


        }





    }

    else if (event.target.value === "js puns") {



        for (i = 0; i < color.length; i++) {

            color.style.display = "block";
            color[i].style.display = "none";
            color[i].selected = false;
            var cornflowerblue = document.querySelector('option[value="cornflowerblue"]');
            var darkslategrey = document.querySelector('option[value="darkslategrey"]');
            var gold = document.querySelector('option[value="gold"]');


            cornflowerblue.selected = true;
            darkslategrey.selected = true;
            gold.selected = true;
            cornflowerblue.style.display = "block";
            darkslategrey.style.display = "block";
            gold.style.display = "block";
            pleaseSelectTheme.style.display = "none";









        }

    }





    else if (event.target.value === "heart js") {



        for (i = 0; i < color.length; i++) {

            color.style.display = "block";
            color[i].style.display = "none";
            color[i].selected = false;
            var tomato = document.querySelector('option[value="tomato"]');
            var steelblue = document.querySelector('option[value="steelblue"]');
            var dimgrey = document.querySelector('option[value="dimgrey"]');


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

var activityLabel = document.createElement("label");
activity.appendChild(activityLabel);


var totalactivityCost = 0;

activity.addEventListener("change", (e) => {

    var activityclicked = event.target;

    var activitycost = activityclicked.getAttribute("data-cost");
    var activitycostint = parseInt(activitycost);

    var datadayandtime = activityclicked.getAttribute(`data-day-and-time`);

    if (activityclicked.checked) {


        totalactivityCost += activitycostint;
        console.log(totalactivityCost);
        activityLabel.textContent = "Total: " + "$" + totalactivityCost;

        //console.log(datadayandtime + "date and time");


    }
    else {



        totalactivityCost -= activitycostint;
        console.log(totalactivityCost);
        activityLabel.textContent = "Total: " + "$" + totalactivityCost;


    }




    for (i = 0; i < activityinput.length; i++) {


        var datadayandtimeI = activityinput[i].getAttribute(`data-day-and-time`);

        if (datadayandtime === datadayandtimeI && activityclicked !== activityinput[i]) {

            console.log(activityinput[i]);

            if (activityclicked.checked) {

                activityinput[i].disabled = true;

            }

            else {
                activityinput[i].disabled = false;
                console.log("not checked");

            }




        }



    }

}



);


var paymentelement = document.getElementById("payment");
var selectpayment = document.querySelector('option[value="select method"]')
console.log(selectpayment);


paymentelement.addEventListener("click", (e) => {
    for (i = 0; i < paymentelement.length; i++) {
        selectpayment.style.display = "none";



        if (e.target.value == "credit card") {



            creditcardform.style.display = "block";
            bitcoin.style.display = "none";
            paypalform.style.display = "none";


            //       creditcard.style.display = "block";

        }

        else if (e.target.value == "paypal") {


            paypalform.style.display = "block";
            bitcoin.style.display = "none";
            creditcardform.style.display = "none";


        }
        else if (e.target.value == "bitcoin") {

            bitcoin.style.display = "block";
            paypalform.style.display = "none";
            creditcardform.style.display = "none";

        }



        // if (e.target.value === "select method") {
        //    paymentelement.style.display == none;


        // }

        //  for (i = 0; i < paymentelement.length; i++) {


        // console.log(paymentelement[i])





        //}

    }

});


const nameValidator = () => {

    var nameInput = document.getElementById("name").value;

    if (nameInput.length > 0) {

        document.getElementById("name").style.borderColor = "green";
        return true;

    }

    else {
        document.getElementById("name").style.borderColor = "red";
       
        return false;

    }


}

var emailInput = document.getElementById("mail").value;



const emailValidator = () => {




    var emailInput = document.getElementById("mail").value;
    console.log(emailInput);
    var emailindex = emailInput.indexOf("@");
    var emaillastindex = emailInput.lastIndexOf(".");

    console.log(emailindex + "this is the index");
    console.log(emaillastindex + "this is after index");

    if (emailindex > 1 && emaillastindex > emailindex + 1) {
        document.getElementById("mail").style.borderColor = "red";
        return true;
    }

    else {
        document.getElementById("mail").style.borderColor = "red";
        return false;

    }

}



emailInput.addEventListener("keyup", emailValidator)




activityerrormessage = document.createElement("label");
activityform.appendChild(activityerrormessage);
const activityValidator = () => {


    for (i = 0; i < activityinput.length; i++) {
        if (activityinput[i].checked) {
            activityform.style.borderColor = "green";
            console.log("activity chosen");
            activityerrormessage.textContent = "";
            return true;
        }


        activityform.style.borderColor = "red";

        activityerrormessage.textContent = "Please choose atleast one activity";
        activityerrormessage.style.color = "red";

        return false;

    }



}


const validatecardnumber = () => {

    const cardnumberInput = cardnumber.value;



    if (cardnumber.value === "") {
        console.log("no value entered");
        creditcardmissingtext.textContent = "The credit card field cannot be empty, please use a valid credit-card";
        creditcardmissingtext.style.color = "red";

        return false;

    }
    else if (cardnumberInput.length > 16) {
        creditcardmissingtext.textContent = "Enter a number between 13-16 characters";
        creditcardmissingtext.style.color = "red";

        return false;





    }

    else if (cardnumberInput.length < 13) {

        creditcardmissingtext.textContent = "Enter a number more than 13 digits";
        creditcardmissingtext.style.color = "red";
        return false;
    }

    else if (cardnumberInput.length >= 13 || cardnumberInput.length <= 16) {

        creditcardmissingtext.textContent = "✓";

        creditcardmissingtext.style.color = "green";

        var ccNum = document.getElementById("cc-num");
        ccNum.style.borderColor = "green";

        return true;


    }
    // const vaildUserInputEmail = (/^[A-za-z0-9]+@+[A-za-z0-9]+\.[A-za-z]{2,3}$/).test(userInputEmail.value);
    // return vaildUserInputEmail;

}
var cardnumberzipmissing = document.createElement("label");
var cardnumberzipinput = document.querySelector(".col-3");
cardnumberzipinput.appendChild(cardnumberzipmissing);

const cardnumerzipvalidtor = () => {


    var cardzipValue = cardzip.value;


    if (cardzipValue.length == 5) {

        cardnumberzipmissing.textContent = "OK";

        cardnumberzipmissing.style.color = "green";
        return true;


    }

    else {


        cardnumberzipmissing.textContent = "Please enter a 5 digit number";
        cardnumberzipmissing.style.color = "red";

        return false;


    }
}

var cvvMissingText = document.createElement("label");

var cvvparent = cvv.parentNode.insertBefore(cvvMissingText, cvv.nextSibling);
console.log(cvvparent);



const hideCVV = () => {

    var cvvInput = cvv.value;
    console.log(cvvInput + "this is the cvvInput");

    if (cvvInput.length == 3) {

        console.log("3!!");
        cvvMissingText.textContent = "OK";
        cvvMissingText.style.color = "green";
        return true;


    }

    else {
        console.log("not 3");
        cvvMissingText.textContent = "Please enter a valid 3 digit number";
        cvvMissingText.style.color = "red";
        return false;




    }

}



hideOther();


form.addEventListener("submit", (e) =>
{

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

    if (!activityValidator()) {

        console.log("activity not chosen");
        e.preventDefault();
    }



        validatecardnumber();

        if (!validatecardnumber) {

            console.log("no cardnumber");
            e.preventDefault();


    }

    cardnumerzipvalidtor();


    if (!cardnumberzipinput) {


        console.log("no zip");
        e.preventDefault();

    }

    if (!hideCVV) {


        console.log("no cvv");

        e.preventDefault();


    }


    



});
