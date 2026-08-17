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


let arr1:string[] = ["akshat","tiwari"];
let arr2 : boolean[] = [true,false,true,false];

// TUPLES
let arr3:[number,number,string,boolean] = [23,45,"hello",true];

// HOW TO WRITE ARRAY OF OBJECTS IN TUPLES
let data : [{name:string},{name:number},{name:boolean}] = [
    {name:"pol"},{name:12},{name:true}
]

// ENUMS => Option

enum Role{
    ADMIN,
    SUP_ADMIN,
    USER,
}

let role : Role = Role.ADMIN;
// in 3 options se hi kuch select kr skte ho 

// UNION => JB EK SE JYDA KI NEED HO VARIABLE KO BANANE KE LIYE TOH TB HUM UNION USE KRTE HAI
let yolo: string|number|boolean|bigint="rahul";
yolo = 45;
yolo =90n;
yolo: false;

// LITERALS => JB VALUES MEIN AAP OPTION DE RHE HOTE HO
type Status = "pending"|"success"|"error";
let status:Status="success";