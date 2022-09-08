window.onload = function(){
document.getElementById("namehead").onclick = doSomething;
let checker = 1;
function doSomething(){
    console.log("Hello World!");
    if (checker==1)
    {
    checker = 0;
    document.getElementById("namehead").style.color = "#ff0000";
    }
    else {
        console.log("Hope this works instead!");
        checker = 1;
        document.getElementById("namehead").style.color = "blue";
    }
}
}