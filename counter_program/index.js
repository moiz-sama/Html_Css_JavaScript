
let count_txt;
count_txt = document.getElementById("counter").innerText;

let count_num = Number(count_txt);

document.getElementById("increment").onclick =  function() {
    count_num++;
    document.getElementById("counter").innerText = count_num;
}

document.getElementById("decrement").onclick =  function() {
    count_num--;
    document.getElementById("counter").innerText = count_num;
}

document.getElementById("reset").onclick =  function() {
    count_num = 0;
    document.getElementById("counter").innerText = count_num;
}


