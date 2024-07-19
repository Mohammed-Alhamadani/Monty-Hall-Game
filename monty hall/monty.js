let scr = document.getElementById("scr");
let choose = document.getElementById("choose");
let remove = document.getElementById("remove");
let stayValue = document.getElementById("stay");
let switchValue = document.getElementById("switch");
    

let stayCounter=0;
let switchCounter=0;



for (let i = 0; i <= 1000; i++) {
    

    let winningDoor = Math.floor(Math.random() * 3 + 1);

    scr.innerHTML = `The car is behind door number ${winningDoor}`;

    choiceValue = Math.floor(Math.random() * 3 + 1);

    choose.innerHTML = `The contestant choses door number ${choiceValue}`;

    do {
        removeDoor = Math.floor(Math.random() * 3 + 1);
    } while (removeDoor == winningDoor || removeDoor == choiceValue);
    remove.innerHTML = `The host removed door ${removeDoor}`

    if (winningDoor == choiceValue) {
        stayCounter++
        stayValue.innerHTML="Stay Counter= "+stayCounter/1000*100+"%";

    } else {
        switchCounter++
        switchValue.innerHTML="Switch Counter= "+switchCounter/1000*100+"%"

    }
};



const peopleBirthday = ["jan-1", "jun-5", "may-5", "march-3", "april-10", "jan-1", "july-7", "october-27", "march-3", "june-9", "october-6", "may-10", "april-10", "november-10", "december-6"];

const findMatches = (array, value) => {
  return array.filter((birthday) => birthday === value);
};

const matches = findMatches(peopleBirthday, "jan-1");
console.log(matches); // Output: ["jan-1", "jan-1"]

In this example, the findMatches function takes an array and a value as arguments. It uses the filter() method to create a new array with only the elements that match the value. The console.log statement will output an array with all the matches.

If you want to find all duplicates in the array, you can use a similar approach:

const findDuplicates = (array) => {
  return array.filter((birthday, index, self) => self.indexOf(birthday) !== index);
};

const duplicates = findDuplicates(peopleBirthday);
console.log(duplicates); // Output: ["jan-1", "march-3", "april-10"]

