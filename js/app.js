document.getElementById("name").focus();
var email = document.getElementById("email");
var other = document.getElementById("other-title");
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



function hideOther()
{
    other.style.display = "none";
}


function hideSelectTheme()
{
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



    if (activityclicked.checked) {


        totalactivityCost += activitycostint;
        console.log(totalactivityCost);
        activityLabel.textContent = "Total: " + totalactivityCost + " $"
        var datadayandtime = activityclicked.getAttribute(`data-day-and-time`);
        //console.log(datadayandtime + "date and time");


    }



    
    for (i = 0; i < activityinput.length; i++) {

      
        var datadayandtimeI = activityinput[i].getAttribute(`data-day-and-time`);
       
        if (datadayandtime === datadayandtimeI && activityclicked !== activityinput[i]) {

            console.log(activityinput[i]);

            if (activityclicked.checked) {

                activityinput[i].disabled = true;

            }

            else if (activityclicked.checked = false)
            {
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


paymentelement.addEventListener("click", (e) =>
{
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

        document.getElementById("name").style.borderColor = "white";


    }

    else
    {
        document.getElementById("name").style.borderColor = "red";

    }


}

const emailValidator = () => {


    var emailInput = document.getElementById("mail").value;
    console.log(emailInput);
    var emailindex = emailInput.indexOf("@");
    var emaillastindex = emailInput.lastIndexOf(".");

    console.log(emailindex + "this is the index");
    console.log(emaillastindex + "this is after index");

    if (emailindex > 1 && emaillastindex > emailindex + 1) {
        document.getElementById("mail").style.borderColor = "yellow";
        return true;
    }

    else {
        document.getElementById("mail").style.borderColor = "red";
        return false;

    }

}



const activityValidator = () =>
{


    for (i = 0; i < activityinput.length; i++)
    {
        if (activityinput[i].checked)
        {
            activityform.style.borderColor = "green";
            console.log("white");
            return true;
        }

       
            activityform.style.borderColor = "red";
            return false;

        }



}


const validatecardnumber = () => {

    const cardnumberInput = cardnumber.value;

    if (cardnumber.value === "") {
        console.log("no value entered");
        creditcardmissingtext.textContent = "No data entered";

    }
    else if (cardnumberInput.length > 16) {
        creditcardmissingtext.textContent = "Enter a number between 13-16 characters";
        console.log("more than 16");





    }

    else if (cardnumberInput.length < 13) {
    
      creditcardmissingtext.textContent = "Enter a number more than 13 digits";
        console.log("less than 13");
    }

    else if (cardnumberInput.length >= 13 || cardnumberInput.length <= 16) {

        creditcardmissingtext.textContent = "Success";

        console.log("Success");

      var ccNum =  document.getElementById("cc-num");
            ccNum.style.borderColor = "green";


    }
        // const vaildUserInputEmail = (/^[A-za-z0-9]+@+[A-za-z0-9]+\.[A-za-z]{2,3}$/).test(userInputEmail.value);
        // return vaildUserInputEmail;
    
}


hideOther();

form.addEventListener("submit", (e) => {


    console.log("works");
    e.preventDefault();
    nameValidator();
    emailValidator();
    activityValidator();
    validatecardnumber();
   



});
