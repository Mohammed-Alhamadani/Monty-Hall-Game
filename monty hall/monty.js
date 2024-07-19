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





