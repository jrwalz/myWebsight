
"use strict";
/*
   Filename: formsubmit.js

   Purpose: The purpose of this program is to simply report on a
            successful completition of a valid Web form.

            When the form is submitted, the onsubmit event handler
            verifies that the form data is complete and valid.
            An alert box is displayed notifying the user.
*/

var accountType = document.getElementById("acctype");
var fullName = document.getElementById("username");
var email = document.getElementById("email");
var telephone = document.getElementById("telephone");
var pwd = document.getElementById("pwd");
var message = document.getElementById("message");



window.onload = function() {
   document.forms[0].onsubmit = function() {
      if (this.checkValidity()) {
         alert("Thank you for your submission" + " " + accountType.value + ".");
         fullName.value = "";
         email = "";
         pwd.value = "";
         telephone.value = "";
         message.value = "";
         return false;
      }
   };
};