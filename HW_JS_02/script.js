let N = Number(prompt("Мінімальне число"));
let M = Number(prompt("Максимальне число"));
const minNumber = N;
const maxNumber = M;
var Sum_N_to_M = 0;
let whole_num_N = Number.isInteger(N);
let whole_num_M = Number.isInteger(M);
//let IntN = parseInt(N); альиернатива
console.log("N is " + typeof(N));
console.log("M is " + typeof(M));


if (Number.isInteger(minNumber) && Number.isInteger(maxNumber)) {
    if (minNumber>maxNumber) {
        alert("помилка, мінімальне число більше за максимальне");
        console.log("error - N >M");
    } else {

        var skip_even_numbers = confirm("пропускаєм парні числа?");
        let counter = N;
        
        if (!skip_even_numbers) {
            Sum_N_to_M=N;
            do {
                counter++;
                Sum_N_to_M=Sum_N_to_M+counter;
            } while (counter <M);
        } else {
            do {
                if (counter%2 ==0) {
                    counter++;
                } else {
                    Sum_N_to_M+=counter;
                    counter++;
                }
            } while (counter <=M);
        }
        
    console.log("sum=" + Sum_N_to_M);
    }
    
} else {
    if (!Number.isInteger(minNumber) && !Number.isInteger(maxNumber)) {
        alert("N i M не цілі числа")
    } else {
        if (!Number.isInteger(minNumber)) {
            alert("N не ціле число")
        } else {
            alert("M не ціле число")
        }
    }
}

const list = `
                <div>Задане мінімальне число N ${minNumber}</div>
                <div>Задане максимальне число M ${maxNumber}</div>
                <div>Параметр boolean - ${skip_even_numbers}</div>
                <div>Відповідь = ${Sum_N_to_M}</div>`;

document.getElementById("calculation").innerHTML = list;




//let skip_even_numbers = confirm("пропускаєм парні числа?")
