// 1-masala
function sumArry(arg1, arg2, arg3){
    let res = arg3.concat(arg2, arg1)
    return res
}
// console.log(sumArry([1, 2, 3], [4, 5, 6], [7, 8, 9]));


// 2-masala
function frist(arg){
    let res;
    let a = arg.find((value, index)=>{
        if(value%2==0 && value%5==0){
            return value
        }
    })
    for(let i = 0; i <= arg.length; i++){
        if(arg[i]==a){
            res = i**2
        }
    }
    return res
}
// let a = [1, 2, 3, 4, 5, 23, 22, 20]
// console.log(frist(a));


// 3-masala
function functionMins(arg){
    let a = arg.find((value) =>{
        return value<0
    })
    return a
}
// console.log(functionMins([1, 2, 3, -1]));


// 4-masala 
function functionToq(arg) {
    let counter = 0;
    for (const item of arg) {
        if(item%2==1&&item%3==0){
            counter++
        }
    }
    return counter
}
// console.log(functionToq([1, 22, 3, 4, 5, 9]));


// 5-masala
function findFunction(arr, value){
    let res;
    for (const item of arr) {
        if(item == value){
            res = "Bu qiymat mavjud"
            break
        }else{
            res = "Bunday qiymat mavjud emas"
        }
    }
    return res
}
// console.log(findFunction([1, 2, 3, 4, 5,], 3));


// 6-masala
 function reversFunction(arg){
    let b = String(arg)
    let a = b.split("").reverse().join("")
    let res = a.split(",")
    return res
 }
 let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
 console.log(reversFunction(a));