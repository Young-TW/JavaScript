let a = 1;
console.log("a: ",a);
var b = 2;
console.log("b: ",b);
const c = 3;
console.log("c: ",c);

console.log("if: ");

if (a===1){
    console.log("a=1");
} else if (a===2){
    console.log("a=2");
} else{
    console.log("a!=1 or 2");
}

console.log("switch: ");

switch (b){
    case 1:
        console.log("b=1");
        break;
    case 2:
        console.log("b=2");
        break;
    case 3:
        console.log("b=3");
        break;
    default:
        console.log("b!=1 or 2 or 3");
        break;
}

console.log("For loop: ");

for (let i=1;i<=10;i++){
    console.log("i: ",i)
}

console.log("While loop: ");
z=0
while (z<10){
    console.log(z)
    z++;
}

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