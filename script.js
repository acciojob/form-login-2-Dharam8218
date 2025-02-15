//your JS code here. If required.
const firstName = document.getElementsByName("First Name")[0];
const lastName = document.getElementsByName("Last Name")[0];
const phoneNumber = document.getElementsByName("Phone Number")[0];
const emailID = document.getElementsByName("Email ID")[0];

document.getElementById("submit").addEventListener("click",alert1);
function alert1(){
	alert(`First Name: ${firstName.value} Last Name: ${lastName.value} Phone Number: ${phoneNumber.value} Email ID: ${emailID.value}`);
}
