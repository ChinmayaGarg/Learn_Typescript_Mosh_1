// const small = 1;
// const medium = 2;
// const large = 3;

// By default TS compiler assigns value 0, 1... and so on, if nothing is assigned.
// enum Size {
//   Small,
//   Medium,
//   Size
// }

// Here, we rely on compiler to set the value for other members.
// enum Size {
//   Small = 1,
//   Medium,
//   Size
// }
// let mySize:Size = Size.Medium;
// console.log(mySize); // Output: 2
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

//If we make enum constant then the generated code by tsc compiler is very concise compared to if we don't put enum.
const enum Size {
  Small = 1,
  Medium,
  Size
}
let mySize: Size = Size.Medium;
console.log(mySize); // Output: 2
/*
Below is the TS Compiler generated code from above code, after setting enum to constant
let mySize = 2 ; // Size.Medium 
console.log(mySize); // Output: 2
*/
