let c1 = localStorage.getItem('c1');
if (c1 === null) {
    c1 = 0;
} else {
    c1 = parseInt(c1);
    document.getElementById("n1").innerText = c1;
}

document.addEventListener("click", function(event){
    if (event.target.id == "n1"){
    c1++;
    localStorage.setItem('c1', c1);
    document.getElementById("n1").innerText = c1;
    }
});

document.addEventListener("contextmenu", function(event){
    event.preventDefault();
    if (event.target.id == "n1"){
    c1--;
    localStorage.setItem('c1', c1);
    document.getElementById("n1").innerText = c1;
    }
});
