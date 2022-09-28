import './style.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import 'bootstrap/dist/css/bootstrap-grid.css';

function ChangeURL() {
    document.getElementById("webimg").src = document.getElementById('URLid').value;
}
function ChangePX() {
    document.getElementById("webimg").width = document.getElementById('PX_Width').value;
}
function Changekeret() {
    document.getElementById("webimg").border = document.getElementById('keret').value;
}
function ChangeSzin() {
    document.getElementById("webimg").style.borderColor = document.getElementById('keretszin').value;
}
let ok = false;
function Dark() {
if(ok == false){
    ok = true;
} else {
    ok = false
}

if(ok==true) {
document.body.style.backgroundColor = '#000000';
document.body.style.color = '#FFFFFF';
document.getElementById('darkmode').innerHTML = "Világos mód";
}else{
document.body.style.backgroundColor = '#FFFFFF';
document.body.style.color = '#000000';
document.getElementById('darkmode').innerHTML = "Sötét mód";
}

}


function init(){
    document.getElementById('URLid').addEventListener('change',ChangeURL);
    document.getElementById('PX_Width').addEventListener('input',ChangePX);
    document.getElementById('keret').addEventListener('input',Changekeret);
    document.getElementById('keretszin').addEventListener('input',ChangeSzin);

    document.getElementById('darkmode').addEventListener('click',Dark);

}

document.addEventListener('DOMContentLoaded',init);