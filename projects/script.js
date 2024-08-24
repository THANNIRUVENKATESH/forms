const fname = document.getElementById("fname");
const lname = document.getElementById("lname");
const contact = document.getElementById("contact");
const gmail = document.getElementById("gmail");
const pass = document.getElementById("pass");
const submit = document.getElementById("submit");
const result = document.getElementById("result");

function showData(inputName) {
  result.innerText = "\nFirst Name : " + inputName;
}
function showData1(inputName1) {
  result.innerText += "\nLast Name : " + inputName1;
}
function showData2(inputName2) {
  result.innerText += "\nContact : " + inputName2;
}
function showData3(inputName3) {
  result.innerText += "\nGmail : " + inputName3;
}
function showData4(inputName4) {
  result.innerText += "\nPassword : " + inputName4;
}

submit.onclick = function () {
  showData(fname.value);
  showData1(lname.value);
  showData2(contact.value);
  showData3(gmail.value);
  showData4(pass.value);
};
// result.innerText += "\nLast Name : " + inputName;
// result.innerText += "\nContact : " + inputName;
// result.innerText += "\nGmail: " + inputName;
// result.innerText += "\nPassword : " + inputName;
