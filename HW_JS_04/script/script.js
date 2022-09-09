const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];

const themes = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних"];

const marks = [4, 5, 5, 3, 4, 5];

const newPairStudents = studentDistribution(students);

//let randMark = Math.floor(Math.random() * 6);


// робимо пари хлопець і дівчина
function studentDistribution(students) {

    let pairStudent = [];
    let boy =[];
    let girl =[];

    for (let i = 0; i < students.length; i++) {
        let a = students[i];
        if (a[a.length-1] === 'а') {
            boy.push(students[i]+" ")  
        } else if (a[a.length-1] !== 'а') {
            girl.push(students[i]+" ")
        }
    }
    for (let i = 0; i < boy.length; i++) {
        pairStudent.push([boy[i], girl[i]]);  
    }

return pairStudent;

}
console.log(studentDistribution(students));

//присвоєння тем парам студентів
function studentsThemes(newPairStudents, themes) {
    studentsAndThemes = [];

    for (let i = 0; i < newPairStudents.length; i++) {
        studentsAndThemes.push([newPairStudents[i].join(" i "), themes[i]])

        
    }

    return studentsAndThemes;
}
console.log(studentsThemes(newPairStudents, themes));

//виставлення оцінок по окремості студенту
function studentMarks(students, marks) {
    arrStMarks = [];
    for (let i = 0; i < students.length; i++) {
        arrStMarks.push([students[i]+" ", marks[i]]) 
    }
    return arrStMarks;
}
console.log(studentMarks(students, marks));

function teamRandomMark(studentsTeam, theme, mark) {
    finalArr = [];
    for (let i = 0; i < studentsTeam.length; i++) {
        

        finalArr.push([" "+studentsTeam[i].join(" i ")+" "," "+theme[i], " "+Math.floor(Math.random() * (5) + 1)])
        
        
    }
    
    return finalArr;
}

console.log(teamRandomMark(newPairStudents, themes));


document.writeln(`</br><b>функція розподілу студентів на пари хлопець і дівчина -</b> <span>${studentDistribution(students)}</span>`);
document.writeln(`</br><b>функція присвоєння теми для команди -</b> <span>${studentsThemes(newPairStudents, themes)}</span>`);
document.writeln(`</br><b>функція присвоєння оцінок студенту -</b> <span>${studentMarks(students, marks)}</span>`);
document.writeln(`</br><b>функція присвоєння рандомних оцінок від 1 до 5 команді студентам за певну тему -</b> <span>${teamRandomMark(newPairStudents, themes)}</span>`);



let yyy = Math.floor(Math.random() * (5) + 1);

