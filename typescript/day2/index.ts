type UserObj={
    name:string,
    age:number,
    company:string,
    address:{
        street:string,
        city:string,
        state:string,
    }
}

let userObj:UserObj = {
    name:"akshat",
    age:23,
    company:"apple",
    address:{
        street:"usa road2",
        city:"paris",
        state: "london",
    },
};
// UserObj.name = 90;
// typescript internal tk jata hai object ke
// yhi chez agar js mein krunga merko koi prob nhi hogi kyuki wo refrence save krta hai 

// FUNCTIONS : 
let sum =(a:number,b:number):number=>{
    return a+b;
};
let respone:number = sum(20,30);
console.log(respone);

let sum2 =(a:number, b:()=> number):number=>{
    console.log(a);
    let data = b();
    return a+data;
};
sum2(78,()=>{
    return 10;
});

// this question was in machine coding round THIS IS A CURRYING FUNCTION
let sum3 = (a:number)=>{
    return (b:number)=>{
        if(b!==undefined) return sum3(a+b);
        return a;
    };
};

let data = sum3(89)(78)();
console.log(data);

// Rest Parameter
let sum4 = (...rest:number[]):number=>{
   let data = rest.reduce((acc,val)=>acc+val,0);
   return data;
}
let result = sum4(67,89,34,12,35);
console.log(result);