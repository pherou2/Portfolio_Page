// JavaScript File

var personalData = {firstname:"Phil",
    lastname:"Heroux",
    phone:"847-648-2497",
    email:"philheroux@outlook.com",
    address:"2750 Forest Ct.  ·  Deerfield,IL  ·  60015",
    project:"Portfolio Page"};
    
    
document.getElementById("title").innerHTML = personalData.project;
document.getElementsByClassName("mb-0")[0].innerHTML = personalData.firstname+" "+personalData.lastname;
document.getElementsByClassName("subheading mb-5")[0].innerHTML = personalData.address +"  ·  "+personalData.phone;





