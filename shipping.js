/* 
less than 2 is $1.10
less than 6 is $2.20
less than 10 is $3.70
more than 10 is $3.80
*/

function myFunction(){

var weight = document.getElementById("weightId").value
var distance = document.getElementById("distance").value

if (weight <= 2){

    var cost = 1.10 * distance / 500

} else if (weight > 2 && weight <=6){

    var cost = 2.20 * distance / 500

} else if (weight > 6 && weight >= 10){

    var cost = 3.70 * distance / 500

} else (weight > 10);{

    var cost = 3.80 * distance / 500
}

document.getElementById("report").innerHTML = report

}