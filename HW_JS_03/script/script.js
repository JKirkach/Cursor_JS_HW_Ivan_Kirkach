document.writeln(`функція 4 зарплата без податку - <span>${salaryAfterTax(1000, "eur")}</span>`);
document.writeln(`</br>функція 3 формат імені - <span>${formatName("IVAN")}</span>`);
document.writeln(`</br>функція 6 повторення букви - <span>${countLetter("x", "Xenotransplantation")}</span>`);
document.writeln(`</br>функція 7 конвертер валют - <span>${convertCurrency("100UAH")}</span>`);
document.writeln(`</br>функція 9 генерація паролю - <span>${createPassword(6)}</span>`);
document.writeln(`</br>функція 1 найбільше число в числі - <span>${getMaxDigit(8263)}</span>`);
document.writeln(`</br>функція 12 чи є слово паліндром - <span>${palindrom("did")}</span>`);



function salaryAfterTax (num, currency) {
    
    let tax = 19.5;
    let pureSalary = num - (num/100)*tax;
    if (currency == "uah") {
        return (pureSalary + " uah");
    } 
    if (currency == "usd") {
        return (pureSalary + " usd")
    }
    if (currency == "eur") {
        return (pureSalary + " eur")
    }
}


function formatName (name) {
    let arrName =name.split('');
    for (let i = 0; i < name.length; i++) {
        if (i<1) {
            arrName[i] = arrName[i].toUpperCase();
            //console.log(arrName[i]);
        } else {
            arrName[i] = arrName[i].toLowerCase();
           // console.log(arrName[i]);
        }
        
    }
    name = arrName.join("");
    return name;
}

function countLetter(char, word) {
    let counter = 0;
    let arrWord = word.split('');
    for (let i = 0; i < arrWord.length; i++) {
        arrWord[i] = arrWord[i].toLowerCase();
    }
    for (let i = 0; i < arrWord.length; i++) {
        if (char.length>1) {
            console.log("error");
        } else {
            if (char[0] == arrWord[i]) {
                counter ++
            }
        }
        
    }
    console.log(counter);
    return counter;
}


function convertCurrency(money) {
    arrMoney = money.split("");
    let volume = arrMoney;
    let currency = arrMoney[arrMoney.length-1];
    if (currency == "$") {
        volume.length = volume.length-1;
        volume = volume.join("");
        volume = Number(volume);
        volume = volume*40;
        return volume + " $";
    }

    if (currency == "H") {
        volume.length = volume.length-3;
        volume = volume.join("");
        volume = Number(volume);
        volume = volume/40;
        return volume + " UAH";
        
   } 
    
   // console.log("aasasdasd");
   
   
   //console.log(typeof(volume+"-*-*-*-*-*"));
   //console.log(typeof(arrMoney));
   //console.log(arrMoney);

 
  
    
    
}



//convertCurrency("100$");




console.log("---------------------------------");


function createPassword(passLenght) {
    let passArray = [];
    let password="";
    if (passLenght == undefined) {
        passLenght = 8;
    }
    passArray.length = passLenght+1;
    for (let i = 1; i < passArray.length; i++) {
        passArray[i] = Math.floor(Math.random()*10);
        //console.log(passArray[i]);
        password = password+passArray[i];
        
    }
   return password;
}

function getMaxDigit(number) {
    number = number.toString();
    number = number.split("");
    for (let i = 0; i < number.length; i++) {
        Number(number[i]);
       console.log( typeof(number[i]));
    }
    for (let i = 0; i < number.length; i++) {
        if (number[0] < number[i] ) {
            number[0] < number[i]
        }
        
    }
    return number[0];
}

getMaxDigit(8263);



createPassword();


function palindrom (word) {
    palindrom = word.split("");
    let counter = 0;

    for (let i = 0; i < palindrom.length; i++) {
        if (palindrom[i] == palindrom[(palindrom.length-1)-i]) {
            console.log("+");
            counter++;
        }
    }
    if (counter == palindrom.length) {
        return true;
        console.log("+++");
    } else { console.log("---"); return false;}
}

