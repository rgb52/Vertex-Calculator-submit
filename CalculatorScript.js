//This adds some global variables that will be used later
// Admitedly there are bits of miscellenious code that don't do anything but are left over from design iterations for the file
var record = [];
var input = "";


var thoseRecs ="";
document.addEventListener("DOMContentLoaded", function(event){
var newRecords = "";


function aj() {
var tag = document.getElementsByTagName("div")[0];
tar = tag.innerHTML;

$.ajax({
type: "POST",
url: "samePgRecs.py",
data: { param: tar }


}).done(function() {



});
}
//This creates a local storage variable that will transfer the data
 function getText() {
 var intput = document.getElementById('today').innerHTML;
 localStorage.setItem("equationsPast", intput);
}
window.addEventListener('beforeunload', function(event) {
  getText();
}
);

$("#showRecords").click(function(){

beforeWego();
});

function getEquation(part1, part2){
  var create = part1 + part2;
  create = create.split(' ').join('');
  return create;
}
//This function is what produces and adds the time stamp to the final output string that will serve as the record
function keeper(update) {

update = update.reduce(getEquation);
var cur = new Date();

var par =  update + " Time of Calculation: " + cur.toUTCString()  + "</br>";
thoseRecs += par;
document.getElementById("today").innerHTML = thoseRecs;
getText();

///historyLib.getElementById('Records').appendChild(par);
}
//Result variable is what will hold the the answer to the users inputed equation
  var result = 0.0;
  var equat = [];


  //$('#showRecords').unbind('click').click(function(){


///  })
//This function is what is used by the clear button to clear the input bar of the calculator
function clearing() {
equat = [];
document.getElementById("equation").value = equat;
}
///This detects which cell of the table has been pressed and then takes the text inside the table cell to add it to a line of string that will later be converted into actual equation
$('#calculator tr td').unbind('click').click(function(){
///This variable retrieves the text inside the table cell
   var keyPressed = this.innerHTML;

//This branch of the if statement is what tells the program to solve the equation and produce the record
if (keyPressed.indexOf("=") >= 0){

///completeEqua serves to as an array which holds both the requested equation and the answer
var completeEqua = equat;
completeEqua.push(keyPressed);
//The line below solves the equation
result = eval(document.getElementById("equation").value);
completeEqua.push(result);
///This line creates the record of the calculation
keeper(completeEqua);
///This line finally delivers the answer
  document.getElementById("equation").value = result;
  aj();
  //These next two lines make sure that the result is the only argument being compiled right now
  equat = [];
  equat.push(result);

}
else if (keyPressed.indexOf("CLEAR") >= 0) {
  clearing();
}
//Surprisingly only the equal and clear buttons required their own branch of the if statement the rest could pretty much be processed in the same way
else{
  equat.push(keyPressed);

  document.getElementById("equation").value = equat.reduce(getEquation);
}


})

///This function calls for the storage of information before opening up the record page
function beforeWego() {
getText();
location.replace("simpleStorage.html");

}

}
);
function saving() {
apj();
///}
}
