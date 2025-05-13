// 1, 'Mosh'
// Exactly 2 elements allowed, 1st should be number and 2nd should be string
let user: [number, string] = [1, 'Mosh'];
// When a tuple is compiled by TS compiler it is compiled as regular JS array

// Below will give compilation error "source has 3 elements but target allows only 2"
// let user: [number, string] = [1, 'Mosh', 0];

// Exception/Bug: We can call this method and store the third value in the array and the TS compiler will not complain
user.push(1);
