var sampleArray = [0,0,7];
var name = 'cAmEROn PittMAN';
var space = name.indexOf(' ');
var firstName =   name[0].toUpperCase()  +   name.slice(1, space).toLowerCase() + name.slice(space, name.length).toUpperCase();



var incrementLastArrayElement = function(_array) {
    var newArray = [];
    // Your code should make newArray equal to an array that has the same
    // values as _array, but the last number has increased by one.
    
    // For example:
    // _array = [1, 2, 3];
    // turns into:
    // newArray = [1, 2, 4];
    
    // Your code goes in here!
    newArray = _array;
    newArray[newArray.length-1] = newArray[newArray.length-1] +1;
    
    // Don't delete this line!
    return newArray;
};

var firstName;

var name = firstName[1].toUpperCase;

// Did your code work? The line below will tell you!
console.log(incrementLastArrayElement(sampleArray));
//console.log(name.indexOf(' '));
console.log(firstName);




/*function inName(name) {
    // body...
      var names = name.trim().split(" ");
      names[0] = names[0].slice(0,1).toUpperCase() + names[0].slice(1).toLowerCase();
      names[1] =  names[1].toUpperCase(); 
      return names.join(" ");
 
}

console.log(inName("fabian gallardo"));*/