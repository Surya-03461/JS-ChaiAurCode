// Immedidiately Invoked Funtion Expression(IIFE)

(function chai(){
    console.log("DB Connected")
})();//semicolon to stop the flow of function

( ()=>{
    console.log("DB Connected Again")
})()