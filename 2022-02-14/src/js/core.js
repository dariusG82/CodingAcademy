function clickButton(){
    if(document.getElementById("flex-container").style.visibility == "hidden"){
        document.getElementById("flex-container").style.visibility = "visible";
        document.getElementById("main").style.backgroundColor = "white";
        document.getElementById("flex-container-2").style.visibility = "hidden";
    } else {
        document.getElementById("flex-container").style.visibility = "hidden";
        document.getElementById("main").style.backgroundColor = "grey";
        document.getElementById("flex-container-2").style.visibility = "visible";
    }
}