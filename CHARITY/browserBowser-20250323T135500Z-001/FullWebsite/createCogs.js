var checkNew = document.getElementById("guysAnd");
var newSpace = document.getElementById("deadSpace");
var checkFoot = localStorage.getItem("wowReally");

if (checkFoot == "true") {
    document.getElementById("footLong").innerHTML = "Wow, you really did it?";
}

checkNew.addEventListener("click", newTrans);

function woahColor() {
    newSpace.style.backgroundColor = "lightpink";
}

function changeSite() {
    window.location.replace("loginPage.html");
}

function newTrans() {
    newSpace.style.paddingTop = "110%";
    newSpace.style.marginTop = "-110%";
    setTimeout(woahColor, 1000);
    setTimeout(changeSite, 3000);
}