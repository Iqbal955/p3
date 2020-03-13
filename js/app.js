document.getElementById("name").focus();
var other = document.getElementById("other-title");
var selectTheme = document.getElementById("selectTheme");
var color = document.getElementById("color");
var colorlabel = document.getElementById("colors-js-puns");
var design = document.getElementById("design");
console.log(other);



function hideOther()
{
    other.style.display = "none";
}


function hideSelectTheme()
{
 // selectTheme.style.display = "none";

}


design.addEventListener("change", event => {
       //1Select, nothing changes, 
       //2change, it goes to the else statement regardless
        //3 click, it goes to the else statement regardless

    if (event.selectTheme.selected == "true") { // returns error select theme is undefined
         //1 (event.SelectTheme) works

        function hideColor() {

            color.style.display = "none";
            var newselectID = document.createElement("select");
            var option = document.createElement("option");
            option.textContent = "Please choose theme";
            newselectID.appendChild(option);
            colorlabel.appendChild(newselectID);

            console.log("here");

        }

        hideColor()


    }

    else {

        console.log("in here");



    }
});







hideSelectTheme()

hideOther()
//hideColor()



