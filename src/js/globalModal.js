var globalmodal = document.getElementById("GlobalModal");
var globalmodal1 = document.getElementById("GlobalModal1");
var globalmodal2 = document.getElementById("GlobalModal2");

var globalBtn = document.getElementById("GlobalBtn");
var globalBtn1 = document.getElementById("GlobalBtn1");
var globalBtn2 = document.getElementById("GlobalBtn2");

var globalspan = document.getElementsByClassName("global-article-close")[0];
var globalspan1 = document.getElementsByClassName("global-article-close1")[0];
var globalspan2 = document.getElementsByClassName("global-article-close2")[0];

var globalModals = [globalmodal, globalmodal1, globalmodal2];
var globalBtns = [globalBtn, globalBtn1, globalBtn2];
var globalSpans = [globalspan, globalspan1, globalspan2];

function setStyles5(){
    for(var i=0; i <= globalModals.length; i++){
        btns[i].onClick = () => {
            globalModals[i].style.display = "block";
        }

        window.onclick = function(event) {
            if (event.target == articles[i]) {
                globalModals[i].style.display = "none";
                }
            }
        
    }

    for(var i=0; i <= spans.length; i++){
        spans[i].onClick = () => {
            globalModals[i].style.display = "none";
        }
    }
}

setStyles5();

// globalBtn.onclick = function() {
//     globalmodal.style.display = "block";
//     }

// globalspan.onclick = function() {
//     globalmodal.style.display = "none";
//     }

// window.onclick = function(event) {
//     if (event.target == globalmodal) {
//         globalmodal.style.display = "none";
//         }
//     }

/*MODAL 2*/

// globalBtn1.onclick = function() {
//     globalmodal1.style.display = "block";
//     }

// globalspan1.onclick = function() {
//     globalmodal1.style.display = "none";
//     }

// window.onclick = function(event) {
//     if (event.target == globalmodal1) {
//         globalmodal1.style.display = "none";
//         }
//     }

/*MODAL 3*/

// globalBtn2.onclick = function() {
//     globalmodal2.style.display = "block";
//     }

// globalspan2.onclick = function() {
//     globalmodal2.style.display = "none";
//     }

// window.onclick = function(event) {
//     if (event.target == globalmodal2) {
//         globalmodal2.style.display = "none";
//         }
//     }
