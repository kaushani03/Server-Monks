function WriteToFile() { 
 	console.log("hello");
    var email = document.getElementById('email').value; 
    var passw  = document.getElementById('psw').value; 
    var passrep=document.getElementById('psw-repeat').value;
  
    if(passw!=passrep) {  
     alert("Password and Confirm Password does not match!");  
     return false;  
  }  
  if(passw.length < 8) {  
     alert("Password length must be atleast 8 characters"); 
     return false;  
  }   
  if(passw.length > 15) {  
     alert("Password length must not exceed 15 characters");  
     return false;  
  } 
    var blob = new Blob([email.value+","+passw.value],
                { type: "text/plain;charset=utf-8" });
    //saveAs(blob, "data.txt");
  const d = new Date();
  d.setTime(d.getTime() + (30*24*60*60*1000));
  let expires = "expires=" + d.toUTCString();
  document.cookie= email+","+passw+ ";" + expires + ";path=/";
  alert("Registered");
  window.location.replace("index.html");;
 } 

function Ulogin(){
var email = document.getElementById("email").value;
var password = document.getElementById("psw").value;
let decodedCookie = decodeURIComponent(document.cookie);
let user = decodedCookie.split(';');
//alert(user);
if ( email == "kaushanidatta2003@gmail.com" && password == "1234"){
alert ("Login successfully");
window.location.replace("dashboard.html");
}
else
{
alert ("Login unsuccessfully");
}
}