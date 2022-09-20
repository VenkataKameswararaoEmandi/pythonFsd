// const Array = (obj) => {
//     let a = [];
//     a = Object.entries(obj);
//     return a;
//   };
  
  
//   console.log(Array( {a: 1, b: 2 }));

const objtoArray = {
    a: 1, 
    b: 2
};
const entries = Object.entries(objtoArray);
console.log(entries)
