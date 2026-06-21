import { add, subtract, multiply, devide } from "./math.js"
import fs from 'fs/promises'


const command = process.argv[2]
const num1 = parseFloat(process.argv[3])
const num2 = parseFloat(process.argv[4])


if(command === 'add')
{
    const resutl = add(num1, num2)
    console.log(`Sum: ${resutl}`)

}
else if(command === 'sub'){
    const result = subtract(num1, num2)
    console.log(`Difference: ${result}`)
}

else if(command === 'mult')
{
    const result = multiply(num1, num2)
    console.log(`Result: ${result}`)
}
else if(command === 'div')
{
    const result = devide(num1, num2)
    console.log(`Result: ${result}`)
}


else if(command === 'read')
{
    const fileName = process.argv[3]
    if(!fileName){
        console.log("Usage: node cli.js readfile <filename>");
        process.exit(1)
    }
    try{
        const data = await fs.readFile(fileName, 'utf8');
        console.log(data)
    }
    catch(err)
    {
        console.log("Error reading a file", err.message)
    }
}

