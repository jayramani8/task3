
var ChekIn;
var CheckOut;
var today;
var today1, calculateInTime = 0, calculateBreakTime = 0;
document.getElementById('chekOut').disabled = true;

document.getElementById('chekIn').addEventListener('click', (event) => {
    event.preventDefault();
    document.getElementById('chekIn').disabled = true;
    document.getElementById('chekOut').disabled = false;

    today = new Date();
    ChekIn = today.getHours() + ":" + today.getMinutes();

    var table = document.getElementById("myTable");

    var BreakDiffInTime = (today1.getTime() / 1000).toFixed(0);
    var BreakDiffOutTime = (today.getTime() / 1000).toFixed(0);

    var brakHours = Math.floor(((BreakDiffOutTime - BreakDiffInTime) / 3600) % 24);
    var brakMinutes = Math.floor((((BreakDiffOutTime - BreakDiffInTime) / 60) % 60));

    var totalBreakTime = (brakHours * 60) + brakMinutes;
    calculateBreakTime = calculateBreakTime + totalBreakTime;


});
document.getElementById('chekOut').addEventListener('click', (event) => {
    event.preventDefault();
    document.getElementById('chekIn').disabled = false;
    document.getElementById('chekOut').disabled = true;


    today1 = new Date();
    CheckOut = today1.getHours() + ":" + today1.getMinutes();

    var table = document.getElementById("myTable");

    var CheckInTime = (today.getTime() / 1000).toFixed(0);
    var CheckOutTime = (today1.getTime() / 1000).toFixed(0);

    var inHours = Math.floor(((CheckOutTime - CheckInTime) / 3600) % 24);
    var inMinuts = Math.floor((((CheckOutTime - CheckInTime) / 60) % 60));

    inHours = inHours < 10 ? '0' + inHours : inHours;
    inMinuts = inMinuts < 10 ? '0' + inMinuts : inMinuts;

    var totalTime = inHours + ":" + inMinuts;
    var TotalIntime = (inHours * 60) + inMinuts;

    calculateInTime = calculateInTime + TotalIntime;
    // console.log(totalTime);
    let row = `<tr>
            <td>${ChekIn}</td>
            <td>${CheckOut}</td>
            <td id="intime">${totalTime}</td>
            </tr>`
    table.innerHTML += row;


});

document.getElementById('totalTime').addEventListener('click', (event) => {
    event.preventDefault();

    var h = Math.floor(calculateInTime / 60);
    var m = calculateInTime % 60;
    h = h < 10 ? '0' + h : h;
    m = m < 10 ? '0' + m : m;
    document.getElementById("show-total-intime").innerHTML = (h + ":" + m);


});
document.getElementById('totalBreak').addEventListener('click', (event) => {
    event.preventDefault();

    var h = Math.floor(calculateBreakTime / 60);
    var m = calculateBreakTime % 60;
    h = h < 10 ? '0' + h : h;
    m = m < 10 ? '0' + m : m;
    document.getElementById("show-total-break").innerHTML = (h + ":" + m);
});
