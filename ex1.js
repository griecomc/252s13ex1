//function that validates street
function validateStreet()
{
//gets data from input form
var x=inputform.stad1.value;
//if there is no data, then say that it must be filled out
if (x==null || x=="")
  {
  alert("Street Address must be filled out!");
  return false;
  }
}
function validateCity()
{
var x=inputform.city.value;
if (x==null || x=="")
  {
  alert("City must be filled out!");
  return false;
  }
}
function validateEmail()
{
var x=inputform.useremail.value;
//next few lines specify that there must be @ and . characters in the input
//variable for @ sign, at the first occurrence of @
var atpos=x.indexOf("@");
//variable for the "." in .com
var dotpos=x.lastIndexOf(".");
//the first character can't be @, the . position from the end has to be 2 from it
if (atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length)
  {
  alert("Not a valid e-mail address");
  return false;
  }
}

//w3schools was used for help with the code!