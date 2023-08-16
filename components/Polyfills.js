
// Array.prototype.SarangMap = function (Fun) { 

//     let lis = [];
//     for (let el of this) { 
//         lis.push(Fun(el));
//     }

//     return lis;
// }

// let arr = [1, 2, 3];

// // let res = arr.SarangMap((el) => el * 2);

// // console.log(res);





// Array.prototype.SarangFilter = function (Fun) { 

//     let arr = [];

//     for (let el of this) { 
//         if (Fun(el)) { 
//             arr.push(el);
//         }
//     }

//     return arr;
// }


// // let res = arr.SarangFilter((el) => el % 2 !== 0);
// // console.log(res);


// Array.prototype.SarangReduce = function (Fun,initialValue) { 

//     let acc = initialValue;

//     for (let curr of this) { 
//         acc = Fun(acc, curr);
//     }
//     return acc;
// }

// let res = arr.SarangReduce((acc, curr) => { 
//     acc = acc + curr;
//     return acc;
// }, 0)

// console.log(res);




// Flatten the array


let array = [1, [2, [2, 2]], 2, 6];

function FlattenArray(array) { 
    let res = [];
    for (let el of array) { 
        if (Array.isArray(el)) {
            let childArray = FlattenArray(el);
            res.push(...childArray);
        } else { 
            res.push(el);
        }
    }
    return res;
}

// console.log(FlattenArray(array));



// polyfill of split function

// String.prototype.Sarangsplit = function (delimiter) { 
//     let res = [];
//     if (delimiter === "") return Array.from(this);

//     function SplitString(str) { 
//         let index = str.indexOf(delimiter);
//         if (index >= this.length) { 
//             return;
//         }

//         // if found the index
//         if (index >= 0) {
//             // if found the delimiter so split the string
//             let subStr = str.substring(0,index);
//             res.push(subStr);
//             SplitString(str.substring(index + delimiter.length));
//         } else { 
//             res.push(str);
//         }
//     }

//     SplitString(this);

//     return res;
// }

// let aee = "Sarang is player but he is great".Sarangsplit("is");
// console.log(aee);




// polyfill of setTimeout

function MyPrint() { 
    console.log("Sarang");
}

// setTimeout(MyPrint, 3000);

function SarangTimeout(cf, time) { 

    let timer = new Date().getTime();
    
    while (true) { 
        
        let currTime = new Date().getTime();
        if (currTime - timer >= time) { 
            break;
        }
    }
    cf();
}



// SarangTimeout(MyPrint, 3000);



// polyfill of time Interval
function SarangTimeInterval(cf, time) { 
    
    let timer = new Date().getTime();
    
    while (true) { 
        let currTime = new Date().getTime();
        if (currTime - timer >= time) { 
            cf();
            timer = new Date().getTime();
        }
    }

}

// SarangTimeInterval(MyPrint, 1000);



// polyfill of indexOf
String.prototype.SarangindexOf = function (char, position) { 
    if (position >= this.length) return -1;

    for (let idx = position; idx < this.length; idx++) { 
        if (this.charAt(idx) === char) { 
            return idx;
        }
    }
    return -1;
}


let rrr  = "Sarang".SarangindexOf("a",60);
console.log(rrr);




