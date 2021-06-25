console.log("Function: ");

function p (a,b){
    let c = a + b;
    return c;
}
let tt = p (a,b);
console.log(tt);



let h = 1;
function fact(n){
    if (n === 1){
        return h;
    }else{
        h = n * h;
        n--;
        return fact(n);
    }
}
let g = prompt();
console.log(fact(g));