let c1 = localStorage.getItem('c1');
if (c1 === null) {
    c1 = 0;
} else {
    c1 = parseInt(c1);
    document.getElementById("n1").innerText = c1;
}
document.getElementById("n1").onclick = function(){
    c1++;
    localStorage.setItem('c1', c1);
    document.getElementById("n1").innerText = c1;
}
document.getElementById("n1").oncontextmenu = function(e){
    e.preventDefault();
    c1--;
    localStorage.setItem('c1', c1);
    document.getElementById("n1").innerText = c1;
}