// This will not give error
// let numbers = [1, 2, '3'];

// This will give issue since we declared numbers variable as of number type array
// let numbers: number[] = [1, 2, '3'];

// We explicitly told TS Compiler that numbers will be type of number array.
// let numbers: number[] = [1, 2, 3];

// If we don't explicitly tell, then also here TS compiler will implicitly know it is of type number array.
let numbers = [1, 2, 3];

// This is implicitly of type any[]
let emptyArr = [];
