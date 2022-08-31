var N = Number(prompt("Мінімальне число"));
let M = Number(prompt("Максимальне число"));
const minNumber = N;
const maxNumber = M;
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
        var Sum_N_to_M=0;
        
        if (!skip_even_numbers) {
            do {
                
                counter++;
                N=N+counter;
            } while (counter <M);
        } else {
            do {
                if (counter%2 ==0) {
                    counter++;
                } else {
                    
                    
                    Sum_N_to_M=Sum_N_to_M+counter;
                    console.log("vuvid sumu "+Sum_N_to_M);
                    
                    counter++;
                    console.log("vuvid" + counter);
                    
                    if (counter==M) {
                        N=Sum_N_to_M;
                    }
                }
            } while (counter <=M);
        }
        
    
    console.log("sum=" + N);
    console.log("summmmmmmmmmm=" + Sum_N_to_M);
    
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
document.writeln(`Мінімальне число = <b> ${minNumber}; </b> <br>`);
document.writeln(`Максимальне число = <b> ${maxNumber}; </b> <br>`);
document.writeln(`Пропускаєм парні числа ? = <b> ${skip_even_numbers}; </b> <br>`);
document.writeln(`Сума = <b> ${Sum_N_to_M}; </b> <br>`);





/**const list = `
                <div>Задане число N ${minNumber}</div>
                <div>Задане число M ${maxNumber}</div>
                <div>Параметр boolean - ${skip_even_numbers}</div>
                <div>Відповідь = ${N}</div>`;

document.getElementById("calculation").innerHTML = list;




//let skip_even_numbers = confirm("пропускаєм парні числа?")**/

