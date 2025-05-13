"use strict";
// const small = 1;
// const medium = 2;
// const large = 3;
let mySize = 2 /* Size.Medium */;
console.log(mySize); // Output: 2
/*
Below is the TS Compiler generated code from above code

var Size;
(function (Size) {
    Size[Size["Small"] = 1] = "Small";
    Size[Size["Medium"] = 2] = "Medium";
    Size[Size["Size"] = 3] = "Size";
})(Size || (Size = {}));
let mySize = Size.Medium;
console.log(mySize); // Output: 2
*/ 
