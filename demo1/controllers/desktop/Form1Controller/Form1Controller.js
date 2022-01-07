define({ 

 //Type your controller code here 
  init : function()
  {
    this.view.Label0e973a819789b45.text="success";
  },
 validate : function(){
var username = document.getElementById("username");
var password = document.getElementById("password");
if ( username == "abc" && password == "abc#123"){
alert ("Login successfully");
// window.location = "success.html"; // Redirecting to other page.
// return false;
}
else{
//attempt --;// Decrementing by one.
alert("Login failed");
// Disabling fields after 3 attempts.
// if( attempt === 0){
// document.getElementById("username").disabled = true;
// document.getElementById("password").disabled = true;
// document.getElementById("submit").disabled = true;
return false;
}
},

 });