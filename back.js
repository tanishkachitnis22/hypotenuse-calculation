const btnclick = document.querySelector('#btn');
const input1 = document.querySelector('#side1');
const input2 = document.querySelector('#side2');
const display = document.querySelector('#output');



 function calculatehypo()
 {
    const sd1 = Number(input1.value);
    const sd2 = Number(input2.value);
    const result = Math.hypot(sd1,sd2);
    display.innerText = "The length of hypotenuse is" + result;
}
btnclick.addEventListener("click",calculatehypo);
