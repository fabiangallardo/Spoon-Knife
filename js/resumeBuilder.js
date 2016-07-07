/*
This is empty on purpose! Your code to build the resume will go here.
 */
 /*$("#main").append("Fabian Gallardo ");
 var fun = " yo Soy Fabian asombroso ";
 console.log(fun);

 var fun2 = fun.replace(" asombroso"," fun ");
 console.log(fun2);

$("#main").append(fun2);
*/


var name = HTMLheaderName.replace("%data%",bio.name);
$("#header").append(name);
$("#header").append(internationalizeButton);

var role = HTMLheaderRole.replace("%data%",bio.role);
$("#header").append(role);

var tel = HTMLmobile.replace("%data%",bio.contacts.tel);
$("#header").append(tel);

var mail = HTMLemail.replace("%data%",bio.contacts.mail);
$("#header").append(mail);

var locations = HTMLlocation.replace("%data%",bio.locations);
$("#header").append(locations);


var photo = HTMLbioPic.replace("%data%",bio.photo);
$("#header").append(photo);



$(document).click(function (loc)
{
console.log(loc.pageX);
console.log(loc.pageY);
});


var displayWorks = function()
  {
     for (index in jasonWorks.works)
         {	
	$("#workExperience").append(HTMLworkStart); 

	var employer = HTMLworkEmployer.replace("%data%",jasonWorks.works[index].employer);
	$(".work-entry:last").append(employer);

	var title = HTMLworkTitle.replace("%data%",jasonWorks.works[index].title);
	$(".work-entry:last").append(title); 

	var dates = HTMLworkDates.replace("%data%",jasonWorks.works[index].yearSince +"-" + jasonWorks.works[index].yearUntil);
	$(".work-entry:last").append(dates);

	var locationWork = HTMLworkLocation.replace("%data%",jasonWorks.works[index].locationWork);
	$(".work-entry:last").append(locationWork);


	var descriptionWork = HTMLworkDescription.replace("%data%",jasonWorks.works[index].description);
	$(".work-entry:last").append(descriptionWork);
       }
  }


displayWorks();
// Agrego empleos



// agregar education

$("#education").append(HTMLschoolStart);

var place = HTMLschoolName.replace("%data%",educations[0].place);
$("#education").append(place);
var degree = HTMLschoolDegree.replace("%data%",educations[0].description);
$("#education").append(degree);

var datesSchool = HTMLschoolDates.replace("%data%",educations[0].year);
$("#education").append(datesSchool);


/*
var HTMLschoolName = '<a href="#">%data%';
var HTMLschoolDegree = ' -- %data%</a>';
var HTMLschoolDates = '<div class="date-text">%data%</div>';
var HTMLschoolLocation = '<div class="location-text">%data%</div>';
var HTMLschoolMajor = '<em><br>Major: %data%</em>';

*/

if (bio.skills !== undefined)
{
  $("#header").append(HTMLskillsStart);
   var skills = bio.skills.join(" ");
   skills =  HTMLskills.replace("%data%",bio.skills);
  $("#header").append(skills);
}


function inName(name) {
    // body...
      var names = name.trim().split(" ");
      names[0] = names[0].slice(0,1).toUpperCase() + names[0].slice(1).toLowerCase();
      names[1] =  names[1].toUpperCase(); 
      return names.join(" ");
 
}




