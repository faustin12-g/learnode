process.stdout.write('Enter your name here: ')
process.stdin.on('data', (data)=>{
    const userInput = data.toString().trim()
    console.log('You typed: ', userInput.toUpperCase())
    process.stdout.write('Enter an other: ')
})