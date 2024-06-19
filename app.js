function calc(){
    let num1=new Number(document.getElementById("num1").value);
    let num2=new Number(document.getElementById("num2").value);
    let operator=document.getElementById("operator").value;

    let lblOutput=document.getElementById("output");

    switch(operator){
        case "+":lblOutput.innerHTML=num1+num2;break;
        case "-":lblOutput.innerHTML=num1-num2;break;
        case "*":lblOutput.innerHTML=num1*num2;break;
        case "/":lblOutput.innerHTML=num1/num2;break;
        default:lblOutput.innerHTML="Invalid Operator";
    }
    
}