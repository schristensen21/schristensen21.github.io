/* Procedure for when calculate button is clicked */
function calcFunction() {
    // Result banner becomes visible
    document.getElementById("result").style.visibility = "visible";

    // Calculate water used
    let shower = document.getElementById("showerlen").value;
    const showerrate = 5;
    let bath = document.getElementById("bathsize").value;
    let diff = Math.abs(bath - shower*showerrate);

    // Show message based on which uses less water
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