document.getElementById("alertString").onclick = function () {
    let fullName = "Muhammad Nazim Azam"
    alert(fullName)
    let statement = "alert('Muhammad Nazim Azam')"
    document.getElementById("statement").innerHTML = statement;
    // document.getElementById("statement").innerHTML = null ;
}

document.getElementById("alertNumber").onclick = function () {
 alert(123)
 let statement = "alert('123')"
 document.getElementById("statement").innerHTML = statement;

}
document.getElementById("variableNames").onclick = function () {
    
    let statement = "<ul><li>Variable names must start with a letter, an underscore ( _ ) or a dollar sign ( $ ).</li>Variable names cannot contain spaces.<li>Variables cannot be the same as reserved keywords such as if or const .</li><li>By convention, JavaScript variable names are written in camelCase.</li></ul>"
    document.getElementById("output").innerHTML = statement;

}
document.getElementById("camelCaseExamples").onclick = function () {
    
    let statement1 = "<ul><li>webDevelopment</li><li>frontEndWebDevelopment</li><li>backEndWebDevelopment</li></ul>"
    document.getElementById("output").innerHTML = statement1;

}
document.getElementById("sum2Numbers").onclick = function () {
    
    let num1 = 10;
    let num2 = 20;
    let sum = num1 + num2;
    let statement = "let num1 =" + num1 + ";<br> let num2 =" + num2 + ";<br> let sum ="+ sum +";"
    document.getElementById("statement").innerHTML = statement
    document.getElementById("output").innerHTML = sum;
    

}
document.getElementById("subtract2Numbers").onclick = function () {
    
    let num1 = 30;
    let num2 = 20;
    let subtract = num1 - num2;
    let statement = "let num1 =" + num1 + ";<br> let num2 =" + num2 + ";<br> let subtract ="+ subtract +";"
    document.getElementById("statement").innerHTML = statement
    document.getElementById("output").innerHTML = subtract;
}
document.getElementById("multiply2Numbers").onclick = function () {
    
    let num1 = 10;
    let num2 = 20;
    let multiply = num1 * num2;
    let statement = "let num1 =" + num1 + ";<br> let num2 =" + num2 + ";<br> let multiply ="+ multiply +";"
    document.getElementById("statement").innerHTML = statement
    document.getElementById("output").innerHTML = multiply;
    
}
document.getElementById("divide2Numbers").onclick = function () {
    
    let num1 = 10;
    let num2 = 20;
    let divide = num1 / num2;
    let statement = "let num1 =" + num1 + ";<br> let num2 =" + num2 + ";<br> let multiply ="+ divide +";"
    document.getElementById("statement").innerHTML = statement
    document.getElementById("output").innerHTML = divide;
    
}

document.getElementById("someCalculation").onclick = function () {
    
    let num1 = 36;
    let num2 = 6;
    let num3 = 3;
    let num4 = 2;
    let num5 = 4;
    let num6 = 5;

    let someCalculation = num1 / num2 * num3 + num4 ** num5 - (num3+num6);
    let statement = "Some Calculation = 36 / 6 * 3 + 2 * * 4 - ( 3 + 5 )" 
    document.getElementById("statement").innerHTML = statement
    document.getElementById("output").innerHTML = someCalculation;
    

}












document.getElementById("clearStatement").onclick = function () {
    document.getElementById("statement"). innerHTML = "";
}
document.getElementById("clearOutput").onclick = function () {
    document.getElementById("output"). innerHTML = "";
}