document.getElementById("name").focus();
var name = document.getElementById("name");
var other = document.getElementById("other-title");
var selectTheme = document.getElementById("selectTheme");
var color = document.getElementById("color");
var userpayment = document.getElementById("user-payment");
var colorlabel = document.getElementById("colors-js-puns");
var design = document.getElementById("design");
console.log(other);
var activity = document.querySelector(".activities");
var activityinput = document.querySelectorAll(".activities input");
var creditcardform = document.getElementById("credit-card");
var paypalform = document.getElementById("paypal");
var bitcoinform = document.getElementById("bitcoin");
var form = document.querySelector("form");
console.log(form);

creditcardform.style.display = "none";
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


   //     for (i = 0; i < colorlabel.length; i++) {



            color.style.display = "none";


        }





  //  }

    else if (event.target.value === "js puns") {



        for (i = 0; i < color.length; i++) {

            color.style.display = "block";
            color[i].style.display = "none";
            var cornflowerblue = document.querySelector('option[value="cornflowerblue"]');
            var darkslategrey = document.querySelector('option[value="darkslategrey"]');
            var gold = document.querySelector('option[value="gold"]');

            cornflowerblue.style.display = "block";
            darkslategrey.style.display = "block";
            gold.style.display = "block";








        }
    
    }





    else if (event.target.value === "heart js") {



        for (i = 0; i < color.length; i++) {

            color.style.display = "block";
            color[i].style.display = "none";
            var tomato = document.querySelector('option[value="tomato"]');
            var steelblue = document.querySelector('option[value="steelblue"]');
            var dimgrey = document.querySelector('option[value="dimgrey"]');

            tomato.style.display = "block";
            steelblue.style.display = "block";
            dimgrey.style.display = "block";








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

            else {
                activityinput[i].disabled = false;
                console.log("test");

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


            var creditcard = document.querySelector('option[value="credit card"]');
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

    var nameInput = name.value;
  
    if (nameInput.length > 0) {

        name.style.borderColor = "white";


    }

    else
    {
        name.style.borderColor = "red";

    }


}

const emailValidtor = () => {

    var emailInput = email.value;
    
 


}


form.addEventListener("submit", (e) => {


    console.log("works");
    e.preventDefault();
    nameValidator();
   



});
