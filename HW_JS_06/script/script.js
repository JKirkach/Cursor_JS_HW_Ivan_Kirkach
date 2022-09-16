const students = [{
    name: "Tanya",
    course: 3,
    subjects: {
      math: [4, 4, 3, 4],
      algorithms: [3, 3, 3, 4, 4, 4],
      data_science: [5, 5, 3, 4]
    }
  }, {
    name: "Victor",
    course: 4,
    subjects: {
      physics: [5, 5, 5, 3],
      economics: [2, 3, 3, 3, 3, 5],
      geometry: [5, 5, 2, 3, 5]
    }
  }, {
    name: "Anton",
    course: 2,
    subjects: {
      statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
      english: [5, 3],
      cosmology: [5, 5, 5, 5]
    }
  }];

//----------------------------------------------------------------------------

//Function 1 яка повертає список предметів ДЛЯ КОНКРЕТНОГО СТУДЕНТА. Зверніть увагу – назву предмету необхідно повертати з великої літери, а _ – замінити на пробіл

function getSubjectByStudent(arr, student) {
    let subject = [];
    arr.forEach(element => {
           if (element.name === student) {   
              for (let i in Object.keys(element.subjects)){
                  subject = Object.keys(element.subjects).map((item) => {
                      return item.replaceAll("_", " ").replace(item[0], item[0].toUpperCase());})
              }
            }
        });

    return subject;
}
//console.log(Object.keys(element.subjects)[0][0]);
console.log(getSubjectByStudent(students, "Anton"));

//Function 2 яка поверне середню оцінку по усім предметам для переданого студента НЕ МАСИВА СТУДЕНТІВ.

function getAvgMarkByStudent(arr, student) {
    let avgMark;
    let subjectsLenght=0;
    arr.forEach(element => {
           if (element.name === student) {   
               avgMark = Object.values(element.subjects).flat().reduce((prev,item,index, arr) => {
                 subjectsLenght = Object.values(element.subjects).length;
                   return prev + item;               
              });
            }
        });

    return (avgMark/subjectsLenght).toFixed(2);
}

console.log(getAvgMarkByStudent(students, "Tanya"));

//Function 3 яка повертає інформацію загального виду по переданому студенту (вам знадобиться функція з попереднього завдання). ПОвинна бути виведена інформація: курс, ім'я, середня оцінка.

function studentInfo(arr, student) {
    let person = {};
    arr.forEach(element => {
        if (element.name === student) {
          person ={
            name : element.name,
            course : element.course,
            avgMark : getAvgMarkByStudent(arr, element.name)
          }
        }
        //console.log(person);
    });
    return person;
}

console.log(studentInfo(students, "Anton"));

//Function 4 яка повертає імена студентів у алфавітному порядку.

function studentByAlphabet (arr) {
    let names = [];
    for (let i in arr) {
        names.push(arr[i].name);
    }
   // console.log(names);
    return names.sort();
}

console.log(studentByAlphabet(students));

//Function 5 яка повертає кращого студента зі списку по показнику середньої оцінки.

function getBestStudent (students) {
    let person = [];
    let highestRank = 0;
    students.forEach(element => {
          person.push(
            {
              name : element.name,
              course : element.course,
              avgMark : getAvgMarkByStudent(students, element.name)
            }
          ); 
    });
          for(let i in person) {
              if (highestRank < person[i].avgMark) {
                highestRank = person[i].avgMark; 
              }
            }
      
    return highestRank;
}

console.log(getBestStudent(students));

//Function 6 яка повертає обє'кт, в якому ключі це букви у слові, а значення – кількість їх повторень.

function calculateWordLetters (word) {
    const wordArr = word.split("");
    let = wordObj = {};
    let letter;
    wordArr.forEach(item => {
        wordObj[item] = (wordObj[item] || 0) + 1;
      });
    return wordObj;
      console.log(wordArr);
}

console.log(calculateWordLetters("aaabbbbbssckd"));

document.writeln(`</br><b>функція яка повертає список предметів ДЛЯ КОНКРЕТНОГО СТУДЕНТА. Зверніть увагу – назву предмету необхідно повертати з великої літери, а _ – замінити на пробіл -</b> <span>${getSubjectByStudent(students, "Anton")}</span>`);
document.writeln(`</br><b>функція яка поверне середню оцінку по усім предметам для переданого студента НЕ МАСИВА СТУДЕНТІВ. -</b> <span>${getAvgMarkByStudent(students, "Tanya")}</span>`);
document.writeln(`</br><b>функція яка повертає інформацію загального виду по переданому студенту (вам знадобиться функція з попереднього завдання). ПОвинна бути виведена інформація: курс, ім'я, середня оцінка. -</b> <span>${studentInfo(students, "Anton")}</span>`);
document.writeln(`</br><b>функція яка повертає імена студентів у алфавітному порядку. -</b> <span>${studentByAlphabet(students)}</span>`);
document.writeln(`</br><b>функція яка повертає кращого студента зі списку по показнику середньої оцінки -</b> <span>${getBestStudent(students)}</span>`);
document.writeln(`</br><b>функція яка повертає обє'кт, в якому ключі це букви у слові, а значення – кількість їх повторень. -</b> <span>${calculateWordLetters("aaabbbbbssckd")}</span>`);