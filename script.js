var a = Number(prompt("Primul numar:"));
var b = Number(prompt("Al doilea numar:"));
var op = prompt('Enter operator: ');


switch(op){
    case '+':
        result = a+b;
        break;
    case '-':
        result = a-b;
        break;   
    case '*':
        result = a*b;
        break;     
    case '/':
        result = a/b;
        break;
}

console.log(result);