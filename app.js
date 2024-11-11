

var displayInput = document.getElementById("displayInput")
function getVal(val) {
    displayInput.value += val;
}
function calculate() {
    displayInput.value = eval(displayInput.value);
}
function clearAll() {
    displayInput.value = "";
}






































// var displayInput = document.getElementById("displayInput");

// function getVal(val) {
//     displayInput.value += val;
// }

// function calculate() {
//     try {
//         displayInput.value = eval(displayInput.value);
//     } catch (error) {
//         displayInput.value = "Error";
//     }
// }

// function clearAll() {
//     displayInput.value = "";
// }
