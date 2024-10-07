
function generateMultiples() {
    const number = document.getElementById("numberInput").value;
    const outputContainer = document.getElementById("outputContainer");
    outputContainer.innerHTML = '';
    if (number === "") {
        alert("Please enter a number!");
        return;
    }
    let multiples = [];
    for (let i = 1; i <= 10; i++) {
        multiples.push(number * i);
    }
    outputContainer.textContent = `Multiples of ${number}: ${multiples.join(', ')}`;
}
function checkEven(){
    const number = document.getElementById("num").value;
    const op = document.getElementById("op");
    if (number === "") {
        alert("Please enter a number!");
        return;
    }
    op.textContent  = number%2===0 ? "even number":"odd number";

}

function sum(){
    const num1 = document.getElementById("num1").value;
    const num2 = document.getElementById("num2").value;
    // const sum = num1.parseInt()+num2.parseInt();
    const sum =parseInt(num1) + parseInt(num2)
    const op3 = document.getElementById('op3');
    op3.innerHTML = '';
    op3.textContent = `total sum : ${sum}`
}

function greatest(){
    const number1 = document.getElementById("n1").value;
    const number2 = document.getElementById("n2").value;
    const number3 = document.getElementById("n3").value;
     const op4 = document.getElementById("op4");
  
    if(number1>number2){
        if(number1>number3){
            op.textContent= `${number1} is greatest`;
        }else{
            op.textContent= `${number2} is greatest`;
        }
    }else if(number2>number3){
        op.textContent= `${number2} is greatest`;
    }else{
        op.textContent= `${number3} is greatest`;
    }
   

}


