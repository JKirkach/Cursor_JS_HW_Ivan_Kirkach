function getRandomArray(length, min, max) {
    let arr = [];
    arr.length = length;
    arr.fill(0);

    let arr2 = arr.map(function(item, i) {
        return Math.floor(Math.random() * (max-min) + min);
    });
    return arr2;
  }

  console.log(getRandomArray(8,5,9));
//1


 
  function average(...numbers) {
    let sum = 0;
    let avg = numbers.length;
    for (let i = 0; i < numbers.length; i++) {
        
        if (Number.isInteger(numbers[i])) {
            sum+=numbers[i];
        } else {avg--;}
    }
    return sum/avg;
  }

  console.log(average(1,5,1.5,4));
//3


  function filterEvenNumbers(...numbers) {
    let evNumbers = numbers.filter((element) => {
       if (element % 2) {
          return element;
       }
    });
    return evNumbers;
  } 

  console.log(filterEvenNumbers(1,2,3,4,5,6));
//5


  function positiveNumbers(...numbers) {
    let posNum = numbers.filter((element) => {
       if (element > 0) {
          return element;
       }
    });
    return posNum;
  } 

  console.log(positiveNumbers(1,2,3,4,-2,6));
//6

  function getDividedByFive(...numbers) {
    let divideByFive = numbers.filter((element) => {
       if (Number.isInteger(element/5)) {
          return element;
       }
    });
    return divideByFive;
  } 

  console.log(getDividedByFive(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 60, 3, 2));
//7



  





function dividedByThree (word) {
    const newWord = word.toLowerCase().replaceAll(" ", "");
    const lastWordThree = newWord.match(/.{1,3}/g);
    return lastWordThree;
    }

    console.log(dividedByThree("abrakadabra"));
//9


document.writeln(`</br><b>функція яка повертає масив випадкових цілих чисел -</b> <span>${getRandomArray(8,5,9)}</span>`);
document.writeln(`</br><b>функція яка рахує середнє арифметичне всіх переданих в неї аргументів -</b> <span>${average(1,5,1.5,4)}</span>`);
document.writeln(`</br><b>функція яка фільтрує парні числа передані як аргументи функції -</b> <span>${filterEvenNumbers(1,2,3,4,5,6)}</span>`);
document.writeln(`</br><b>функція яка порахує кількість чисел більших 0 -</b> <span>${positiveNumbers(1,2,3,4,-2,6)}</span>`);
document.writeln(`</br><b>функція яка яка відфільтрує усі елементи в масиві та залишить тільки ті, які діляться на ціло на 5 -</b> <span>${getDividedByFive(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 60, 3, 2)}</span>`);
document.writeln(`</br><b>функція яка яка розбиває кожне слово на умовні склади по 3 букви -</b> <span>${dividedByThree("abrakadabra")}</span>`);