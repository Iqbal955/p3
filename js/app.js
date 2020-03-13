document.getElementById("name").focus();
var other = document.getElementById("other-title");
var selectTheme = document.getElementById("selectTheme");
var color = document.getElementById("color");
var colorlabel = document.getElementById("colors-js-puns");

console.log(other);



function hideOther()
{
    other.style.display = "none";
}


function hideSelectTheme()
{
 // selectTheme.style.display = "none";

}




if (selectTheme.selected == true) {
 
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







hideSelectTheme()

hideOther()
//hideColor()



