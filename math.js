export function add(a,b)
{
    return a+b;
}


export function subtract(a,b){
    return a-b;
}

export function multiply(a, b)
{
    return a*b
}

export function devide(a, b)
{
    if(b===0)
        return "Error: Cannot divide by zero"
    return a/b
}