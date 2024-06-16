
function print(x){
    if(x==0){
        return 
    }
    console.log(x)
    print(x-1)
}
// print(5)


// function printSum(i,n,sum){
//     if(i==n){
//         sum = sum+i
//         console.log(sum)
//         return 
//     }
//     sum = sum+i
//     printSum(++i,n,sum)
// }
// printSum(1,5,0)
// const holder = {}
// function factorial(n){
//     if(n==1){
//         return 1
//     }
//     return factorial(n-1) * n
// }
// console.log(factorial(3))


function fibseries(n){
    const x=0
    const y =1

    console.log(x)
    console.log(y)
    function fib(q,w,i){
        if(n==i){
            return
        }
        const sum = q+w
        console.log(sum)
        fib(w,sum,i+1)
    }
    fib(x,y,1)
}
// fibseries(10)
// console.log("------------------")
function test(n){
    let x=0
    let y =1

    console.log(x)
    console.log(y)
    for(let i=1;i<n;i++){
        let sum = x+y
        console.log(sum)
        x=y
        y=sum
    }
}
// test(10)


function power(i,n){
    if(n==0){
        return 1
    }
    return i * power(i,n-1)
}
console.log(power(2,3))