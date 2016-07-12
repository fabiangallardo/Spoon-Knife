var skills = ["Analista","Programador"];
/*var contacts =[{"mail": "gallardo_fabian@hotmail.com"},
                      {"tel" : "3515178410"}];
*/

var proyects = {
"proyects" :[
		{
		"yearSince" : "2016",
		"yearUntil"   : "Today",
		"name"        : "DTH",
		"description" : "alta baja mensajes del servicio de telvision satelital para Claro Paraguay, Uruguay y Argentina"
	            }
		]
	}
	;

proyects.display = function ()
{
   for (var index in proyects.proyects)
  {
     $("#projects").append(HTMLprojectStart); 

    var proyectTitle = HTMLprojectTitle.replace("%data%",proyects.proyects[index].name);
    $(".project-entry:last").append(proyectTitle);

     var projectDates = HTMLprojectDates.replace("%data%",proyects.proyects[index].yearSince + " " + proyects.proyects[index].yearUntil );
    $(".project-entry:last").append(projectDates);

     var projectDescription = HTMLprojectDescription.replace("%data%",proyects.proyects[index].description);
    $(".project-entry:last").append(projectDescription);

    

  }
};

var jasonWorks = {
	"works": [{
		"yearSince": "2006",
		"yearUntil": "Today",
		"locationWork": "Claro",
		"description": "Identificar los requerimientos de los usuarios solicitantes, a través de reuniones y/o conferencias con los interesados, generación de minutas, generación de una solicitud de requerimiento.",
		"role": "Analista funcional/Desarrollador",
		"employer": "Vates",
		"title": "Tareas actuales como analista funcional/Desarrollador en el modulo provisioning para Claro"
	},
	{
	          "yearSince": "2004",
		"yearUntil": "2005",
		"locationWork": "Thinksoft",
		"description": "En Thinksoft realizábamos la administración, el mantenimiento y el desarrollo de requerimientos de Diferentes Hospitales y Prepagas como GEA, MET, Clínica del Sol, Hospital Español, Hospital Italiano, etc",
		"role": "Desarrollador",
		"employer": "Thinksoft",
		"title": "Desarrollador, Implementador, Tester"	
	}]

};

var jasonEducations = {
	"educations": [{
		"place": "Universidad Blas Pascal",
		"year": "2008",
		"description": "Maestría en Ingeniería de Software de la Universidad de La Plata - aprobado - sin Tesis"
	}, {
		"place": "FAMAF",
		"year": "2008",
		"description": "Especialidad de Sistemas Distribuidos -FAMAF - no terminado"

	}],
	"courses": [{
		"place": "www.coursera.com",
		"year": "2016",
		"description": "HTML CSS JAVASCRIPT INTRO"
	}, {
		"place": "www.coursera.com",
		"year": "2016",
		"description": "Bootstrap"

	}]
};


var education = {
	"year" : 2008,
	"place": "Universidad Blas Plascal", 
	"description":"Maestría en Ingeniería de Software de la Universidad de La Plata. -2008- (Terminado de cursar)"
};

var educations = [];

educations.push(education);



var work =  {
	        "yearSince": 2001,
	        "yearUntil": "Today" ,
	        "locationWork" : "Claro" ,
	        "description": "Identificar los requerimientos de los usuarios solicitantes, a través de reuniones y/o conferencias con los interesados, generación de minutas, generación de una solicitud de requerimiento.",
	        "role" : "Analista funcional/Desarrollador",
	        "employer":"Vates",
	        "title": "Tareas actuales como analista funcional/Desarrollador en el modulo provisioning para Claro"
};


var works = [];


var bio = {
	"name"    : "Fabian Gallardo",
	"role"      : "Analista Programador",
          "edad"     : 37,
          "skills"     : skills,
          "contacts": {
          	"mail": "gallardo_fabian@hotmail.com",
           "tel" : "3515178410"
          },
          "photo"    : "http://pre04.deviantart.net/9942/th/pre/f/2011/173/5/b/aioria_by_dragonartes-d3jnuit.jpg",
          "locations"  :"Cordoba-Argentina"
};



function getBio() {
	// body..
	return bio;
}
