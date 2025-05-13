// Eg: Suppose we have a function and it has a parameter, and we have lots of functions like this because we are converting a JS project into TS project.
// It will be imposible for us to annotate every parameter of every function with any.
// There is a second option as well, in tsconfig.json under "Type Checking" section mark "noImplicitAny" as false;
// The secoond option is not recommended as we will loose the major benefit of typescript.
function render(document) {
  console.log(document);
}
