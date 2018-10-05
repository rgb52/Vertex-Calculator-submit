/// This javascript file serves to update the main storage file and ensure continious storage of calculations
var x = [];
var total;
var inp = localStorage.getItem("equationsPast");
//localStorage.all is the main holder of the records
if(localStorage.all){
var past = localStorage.getItem("all");
localStorage.setItem("all", inp + past);
}
///To avoid reseting "all" every time the file is opened all is only created if the if statement detects that "all" doesn't exist yet
else{
localStorage.setItem("all", inp);
}
//This function rights down the records from "all" as soon as the storage html is loaded
document.addEventListener("DOMContentLoaded", function(event){


var out = localStorage.getItem("all");
document.getElementById("rightHere").innerHTML =out;
//var i;
//for ( i = 0; i < x.length; i++){
//document.getElementById("rightHere").innerHTML +=x[i] ;
//}
});
