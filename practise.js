let item = [12, 2, [1, 3, [4, 6, 7]]];  //finding sum
// //using flat method
const flatArray = item.flat(Infinity)
// console.log((flatArray));
const flatSum = flatArray.reduce((acc, curr) => { return acc + curr }, 0)
// console.log(flatSum);
//using recursive normal method
const sumrecurive = function flatArrayfn(arr) {
    return arr.reduce((prev, curr) =>
        prev + (Array.isArray(curr) ? flatArrayfn(curr) : curr), 0)
}
// console.log(sumrecurive(item));

//------------------------------covert to obj-----------------------------

let arrToObj = [["John", 12], ["Jack", 13], ["Matt", 14]] //covert to obj
let obj = arrToObj.reduce((acc, [key, value]) => {
    acc[key] = value
    return acc
}, {})
// console.log(obj);

//using object.fromentries to create obj from arr reverse to object.entries
let objres = Object.fromEntries(arrToObj)
// console.log(objres);

//--------------------modify obj using fromentries and entries--------------------
const objmodify = { John: 12, Jack: 13, Matt: 14 }
let objToarray = Object.entries(objmodify).filter(([key, value]) => value > 13)  //[ [ 'Matt', 14 ] ]
let res = Object.fromEntries(objToarray)  //{ Matt: 14 }
// console.log(res);

let modObjValues = Object.fromEntries(
    Object.entries(objmodify).map(([key, value]) => [key, value + 5])  //{ John: 17, Jack: 18, Matt: 19 }
)
// console.log(modObjValues);

//------------------------convert two arrays to object----------------

let arr1 = [1, 2, 3, 4]
let arr2 = ["ram", "shyam", "sita", "gita"]
// console.log(Object.fromEntries( arr1.map((key,index)=> [key,arr2[index]]))); //{ '1': 'ram', '2': 'shyam', '3': 'sita', '4': 'gita' }

let res2 = arr1.reduce((acc, curr, index) => {
    return {
        ...acc,
        [curr]: arr2[index]
    }
}, {})
// console.log(res2);

//----------------------2 obj same or not----------------------------
let Person1 = {
    name: "durgesh",
    age: {
        age: 12,
    },
    c: [1, 2, 3, 4],
};

let Person2 = {
    name: "durgesh",
    age: {
        age: 12,
    },
    c: [1, 2, 3, 4],
};
function checkEqual(a, b) {
    if (typeof a !== "object" || typeof b !== "object" || a === null || b === null) { return false }
    let keys1 = Object.keys(a);
    let keys2 = Object.keys(b);
    if (keys1.length !== keys2.length) { return false }
    for (key in a) {
        if (!b.hasOwnProperty(key)) {
            return false
        } else {
            if (a[key] !== b[key]) {
                if (typeof a[key] === "object" || typeof b[key] === "object") { return checkEqual(a[key], b[key]) }
                return false
            }
        }
    }
    return true
}
// console.log(checkEqual(Person1, Person2))

//inbuilt methods
// console.log(JSON.stringify(Person1)===JSON.stringify(Person2));  


function deepEqualUsingClone(obj1, obj2) {
    return structuredClone(obj1) === structuredClone(obj2);
}

// console.log(deepEqualUsingClone(Person1, Person2)); // false not working

//using lodash method  npm install lodash
const _ = require("lodash");
// console.log(_.isEqual(Person1, Person2)); // true


//--------------------------remove falsy values-----------------------------
let x=[23, 0, "gfg", false, true, NaN, 12, "hi", undefined, [], "" ,null]
// console.log(x.filter((a)=> a ))  //empty array is truth value in js
// console.log(x.filter((a)=> !a ))

let falsyIndexes= x.map((a,index)=>{   
    if(!a){
        return index    
    }
}).filter((a)=> {
    if(a !==undefined){
        return a
    }
})
// console.log(falsyIndexes);   // if we use map for condition it dives undefined for false values so chain filter (i.e map deosnot remove elements from array)

//------------------------swap array elements-------------------------------
let arraySwap= [1,2,3,4,5,6]
//1
// console.log(arraySwap);
// [arraySwap[0], arraySwap[1]] =[arraySwap[1], arraySwap[0]]

// console.log(arraySwap)

//2
// let [first,second, ...rest] =arraySwap
// console.log([second, first, ...rest]);

//3
// let newArray= arraySwap.slice(0,2)
// let swappedusingSlice= [newArray[1],newArray[0], ...arraySwap.slice(2)]
// console.log(swappedusingSlice);

//4
arraySwap.splice(0,2, arraySwap[1],arraySwap[0])
// console.log(arraySwap);

//-------------------------------------------------------

let x1=["C++","Java","JS","Python"]
let out_put=["C++","Python","Java","JS"]

// let splarraly= x1.splice(3,1)
// x1.splice(1,0,...splarraly)
// console.log(x1);

let res1= out_put.map((item)=> x1.find((el)=>el===item))
// console.log(res1);

//------------------remove elemnt------------------------

let arrayRemoveEl= [1,2,3,4,5,6,4,4]
let targetEl=4
let usingFilter=arrayRemoveEl.filter((ele)=> ele !==targetEl)
// console.log(usingFilter);

let usingSet=new Set(arrayRemoveEl)
usingSet.delete(targetEl) //object { 1, 2, 3, 5, 6 }
let resu2=[...usingSet]
// console.log(resu2);  //array

let usingReduce=arrayRemoveEl.reduce((acc,curr)=>{
       if(curr !== targetEl){
        acc.push(curr)
       }
       return acc
},[])
// console.log("reduce",usingReduce);

//-------------------shift element to req position--------------

let arrayShift=[1,2,3,4,5,6]   //[1,2,6,3,4,5]
let target=6
let moved=2
function shiftFn(array,target,moved){
    let filterarr=array.filter((ele)=>ele !==target)
     console.log("hey",[...filterarr.slice(0,moved), target, ...filterarr.slice(moved)]);
}
shiftFn(arrayShift,target,moved)

//---------------------------------------------




















