function skillsMember() 
{
    var member = document.getElementById("member").value;
    var skills = document.getElementById("skills").value;
    var memberSkills = document.getElementById("memberSkills").value;
    var memberSkills = member + " has " + skills + " skills.";
    document.getElementById("memberSkills").innerHTML = memberSkills;
}

