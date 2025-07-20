(function chai(){
    console.log("DB Connected")//DB Connected
})();//semicolon to stop the flow of function

( (name)=>{
    console.log(`DB Connected Again, ${name}`)//DB Connected Again, Suryansh
})('Suryansh')