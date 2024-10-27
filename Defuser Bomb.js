let timerEl = document.getElementById("timer");
let defuserEl = document.getElementById("defuser");


let counter = 10;
let intervalId = setInterval(function() {
    counter = counter - 1;
    timerEl.textContent = counter;
    if (counter === 0) {
        timerEl.textContent = "BOOM!!!";
        clearInterval(intervalId);
    }
}, 1000);

defuserEl.addEventListener("keydown", function(event) {
    let bombDefuserText = defuserEl.value;
    if (event.key === "Enter" && bombDefuserText === "defuse" && counter !== 0) {
        timerEl.textContent = "You did it!!!";
        clearInterval(intervalId);
    }
});