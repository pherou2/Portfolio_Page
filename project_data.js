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


var projects = [
    {"name":"IT202 Project 1", "display":"true", "description":"My first webpage displaying my hobbies"+
        " and links to corresponding sites", "image":"", "codeURL":"https://github.com/pherou2/IT202/tree/master/project1",
        "siteURL":"https://pherou2.github.io/IT202/project1/index.html"},
    {"name":"IT202 Project 2", "display":"true", "description":"Project manipulating elements of bootstrap component"
        , "image":"", "codeURL":"https://github.com/pherou2/IT202/tree/master/project2",
        "siteURL":"https://pherou2.github.io/IT202/project2/index.html"},
    {"name":"IT202 Project 3", "display":"true", "description":"Querying and displaying City of Chicago data portal food inspections"+
        " with a search menu and the location of the inspection on google maps", "image":"", "codeURL":"https://github.com/pherou2/IT202/tree/master/project3",
        "siteURL":"https://pherou2.github.io/IT202/project3/index.html"},
    {"name":"IT202 Project 4", "display":"true", "description":"Space game where user ship gains points from touching green orb"+
        " and loses lives from touching the red orb", "image":"", "codeURL":"https://github.com/pherou2/IT202/tree/master/project4",
        "siteURL":"https://pherou2.github.io/IT202/project4/index.html"},
    {"name":"IT202 Lab9", "display":"true", "description":"Lab that generates a circle with a random size and color on click"
        , "image":"", "codeURL":"https://github.com/pherou2/IT202/tree/master/App9",
        "siteURL":"https://pherou2.github.io/IT202/App9/index.html"}
    ];


for (var currProj in projects) {
    
    console.log(projects[currProj].name);
    
    var clone = $("#card").clone();
    console.log(clone);
    clone.find(".card-title").text(projects[currProj].name);
    clone.find(".card-text").text(projects[currProj].description);
    $("#github").attr("href",projects[currProj].codeURL);
    $("#weburl").attr("href",projects[currProj].siteURL);


    console.log($("#github").attr("href"));
    console.log($("#weburl").attr("href"));
    
    //if(projects[currProj].display == "true"){
        $("#projects").append(clone);
    //}

}