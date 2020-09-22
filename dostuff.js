/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function showerFunction() {
    document.getElementById("showerDropdown").classList.toggle("show");
}
function bathFunction() {
    document.getElementById("bathDropdown").classList.toggle("show");
}

function calcFunction() {
    document.getElementById("result").style.visibility = "visible";
    let shower = document.getElementById("showerlen").value;
    const showerrate = 5;
    let bath = document.getElementById("bathsize").value;
    let diff = Math.abs(bath - shower*showerrate);
    if (shower*showerrate <= bath) {
        let answer = "Take a shower! You will save ".concat(diff.toString(), " gallons of water.");
        document.getElementById("result").innerHTML = answer;
        console.log(answer);
    }
    else {
        let answer = "Take a bath! You will save ".concat(diff.toString(), " gallons of water.");
        document.getElementById("result").innerHTML = answer;
        console.log(answer);
    }
}