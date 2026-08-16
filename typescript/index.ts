let a = 90;
a=67
// a="pol"
console.log(a);
// Inference => sabse pehli bar jo data aap pass karoge uska data type wo khud ko assign krdega


//ANNOTATION => data type hum provide krenge 
let b:string = "10"; 

// PRIMITIVE DATA TYPES
// String
// Boolean
// Number
// undefined
// BigInt
// Symbol

// ARRAY
let arr: any[] = [1,2,3,4,5,6,"try",true];
// any=> kuch bhi data type rkhlo
// unkown=> kuch bhi do pr update krte wkt dikkat hogi..kyuki unkown data type hai toh merko nhi pta kisse update krna
// hum unkown api ke time use krte kyuki tb hume pata nhi hota ki number ayega , string ayega kya ayega 
// never => kuch bhi nhi aana chaiye