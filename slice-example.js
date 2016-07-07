var s = "audacity";
var mayuscula = "";
var udacityizer = function(s) {  
    // Right now, the variable s === "audacity"
    // Manipulate s to make it equal to "Udacity"
    // Your code goes here!
    
    mayuscula = "holaaaaa";
   // mayuscula = mayuscula.toUpperCase();
       
   s = s[1].toUpperCase() + s.slice(2);
  //  s = s.slice(1,1);
    return s;
};


console.log(mayuscula);
// Did your code work? The line below will tell you!
console.log(udacityizer(s));
