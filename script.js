var newSeq = []; // new
var actionSeq = []; // done
function newAction() {
  let seq = Math.floor(Math.random() * 4) + 1;
    newSeq.push(seq);
    console.log(newSeq);
    document.getElementById("h1").innerHTML = `Level ${newSeq.length}`;
    actionSeq = [];
    var allButtons = document.querySelectorAll("button");
    for (let i = 0; i < allButtons.length; i++) {
    if (allButtons[i].value == seq) {
        allButtons[i].classList.add("crad-light");
        setTimeout(() => {allButtons[i].classList.remove("crad-light");}, 1200);
        break;
    }
    }
}
newAction();
/* -------------------------------------------------------------------------- */
function doAction(button) {
    btnValue = Number(button.value);
    actionSeq.push(btnValue);
    check();
    button.classList.add("crad-light");
    setTimeout(() => {button.classList.remove("crad-light");}, 400);
    var audio = new Audio(`sounds/${btnValue}.mp3`).play();
}
//-----------------------------------------------------wrong()
function wrong() {
    document.getElementById("h1").innerHTML = "Wrong , press any key to start";
    let box = document.getElementById("box1");
    box.classList.add("wrong-light");
    setTimeout(() => {
        box.classList.remove("wrong-light");
    }, 100);
    var audio = new Audio("sounds/0.mp3").play();
    newSeq = [];
    actionSeq = [];
}
// ----------------------------------------------------------check()
function check() {
    flage = true;
    if (newSeq.length == actionSeq.length) {
        for (let i = 0; i < newSeq.length; i++) {
            if (actionSeq[i] != newSeq[i]) {
                flage = false;
                wrong();
                break;
            }
        }
    if (flage == true) 
    newAction();
    } else {
        for (let i = 0; i < actionSeq.length; i++) {
            if (actionSeq[i] != newSeq[i]) {
                flage = false;
                wrong();
                break;
            }
        }
    }
}