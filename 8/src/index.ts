// In TS we can seperate no. using _ i.e. 123 is same as 1_2_3, makes code more readable.
let sales: number = 123_456_789;
let course: string = 'TypeScript';
let isPublished: boolean = true;

// TS can infer types of variables based on values
let salesX = 123_456_789;
let courseX = 'TypeScript';
let isPublishedX: boolean = true;
let level; // TS assumes it is of type any
