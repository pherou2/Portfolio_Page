// JavaScript File

var personalData = {firstname:"Phil",
    lastname:"Heroux",
    phone:"847-648-2497",
    email:"philheroux@outlook.com",
    address:"Deerfield,IL  ·  60015",
    project:"Portfolio Page"};
    
    
document.getElementById("title").innerHTML = personalData.project;
document.getElementsByClassName("mb-0")[0].innerHTML = personalData.firstname+" "+personalData.lastname;
document.getElementsByClassName("subheading mb-5")[0].innerHTML = personalData.address +"  ·  "+personalData.phone;


var projects = [
    {"name":"IT202 Project 1", "display":"true", "description":"My first webpage displaying my hobbies"+
        " and links to corresponding sites", "image":"./proj1IT202.PNG", "codeURL":"https://github.com/pherou2/IT202/tree/master/project1",
        "siteURL":"https://pherou2.github.io/IT202/project1/index.html"},
    {"name":"IT202 Project 2", "display":"true", "description":"Project manipulating elements of bootstrap component"
        , "image":"./proj2IT202.PNG", "codeURL":"https://github.com/pherou2/IT202/tree/master/project2",
        "siteURL":"https://pherou2.github.io/IT202/project2/index.html"},
    {"name":"IT202 Project 3", "display":"true", "description":"Querying and displaying City of Chicago data portal food inspections"+
        " with a search menu and the location of the inspection on google maps", "image":"./proj3IT202.PNG", "codeURL":"https://github.com/pherou2/IT202/tree/master/project3",
        "siteURL":"https://pherou2.github.io/IT202/project3/index.html"},
    {"name":"IT202 Project 4", "display":"true", "description":"Space game where user ship gains points from touching green orb"+
        " and loses lives from touching the red orb", "image":"./proj4IT202.PNG", "codeURL":"https://github.com/pherou2/IT202/tree/master/project4",
        "siteURL":"https://pherou2.github.io/IT202/project4/index.html"},
    {"name":"IT202 Lab9", "display":"true", "description":"Lab that generates a circle with a random size and color on click"
        , "image":"./App9IT202.PNG", "codeURL":"https://github.com/pherou2/IT202/tree/master/App9",
        "siteURL":"https://pherou2.github.io/IT202/App9/index.html"},
    {"name":"Android Phone Dialer App", "display":"true", "description":"2 activity app that directs user to enter a number with a certain format and then populates"+ 
        " phone dial with number upon click", "image":"./PhoneDialerApp.PNG", "codeURL": "https://github.com/pherou2/Android-Phone-Dial-App"}

    ];


for (var currProj in projects) {
    console.log(currProj);
    console.log(projects[currProj].name);
    
    var clone = $("#card").clone();
    console.log(clone);
    clone.find(".card-title").text(projects[currProj].name);
    clone.find(".card-text").text(projects[currProj].description);
    clone.find("#github").attr("href",projects[currProj].codeURL);
    clone.find("#weburl").attr("href",projects[currProj].siteURL);
    clone.find("#projImage").attr('src', projects[currProj].image );
    //clone.src(projects[currProj].image);
    //console.log(clone.find("#projImage").src);
    clone.css("display","block");

    console.log($("#github").attr("href"));
    console.log($("#weburl").attr("href"));
    
    if(projects[currProj].display == "true"){
        $("#projects").append(clone);
    }

}