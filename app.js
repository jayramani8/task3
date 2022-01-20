let ChekIn;
let CheckOut;
let today;
let today1, calculateInTime = 0, calculateBreakTime = 0;
document.getElementById('chekOut').disabled = true;

document.getElementById('chekIn').addEventListener('click', (event) => {
    event.preventDefault();
    document.getElementById('chekIn').disabled = true;
    document.getElementById('chekOut').disabled = false;

    today = new Date();
    ChekIn = today.getHours() + ":" + today.getMinutes();


    let BreakDiffInTime = (today1.getTime() / 1000).toFixed(0);
    let BreakDiffOutTime = (today.getTime() / 1000).toFixed(0);

    let brakHours = Math.floor(((BreakDiffOutTime - BreakDiffInTime) / 3600) % 24);
    let brakMinutes = Math.floor((((BreakDiffOutTime - BreakDiffInTime) / 60) % 60));

    let totalBreakTime = (brakHours * 60) + brakMinutes;
    calculateBreakTime = calculateBreakTime + totalBreakTime;


});
document.getElementById('chekOut').addEventListener('click', (event) => {
    event.preventDefault();
    document.getElementById('chekIn').disabled = false;
    document.getElementById('chekOut').disabled = true;


    today1 = new Date();
    CheckOut = today1.getHours() + ":" + today1.getMinutes();

    let table = document.getElementById("myTable");

    let CheckInTime = (today.getTime() / 1000).toFixed(0);
    let CheckOutTime = (today1.getTime() / 1000).toFixed(0);

    let inHours = Math.floor(((CheckOutTime - CheckInTime) / 3600) % 24);
    let inMinuts = Math.floor((((CheckOutTime - CheckInTime) / 60) % 60));

    inHours = inHours < 10 ? '0' + inHours : inHours;
    inMinuts = inMinuts < 10 ? '0' + inMinuts : inMinuts;

    let totalTime = inHours + ":" + inMinuts;
    let TotalIntime = (inHours * 60) + inMinuts;

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

    let h = Math.floor(calculateInTime / 60);
    let m = calculateInTime % 60;
    h = h < 10 ? '0' + h : h;
    m = m < 10 ? '0' + m : m;
    document.getElementById("show-total-intime").innerHTML = (h + ":" + m);


});
document.getElementById('totalBreak').addEventListener('click', (event) => {
    event.preventDefault();

    let h = Math.floor(calculateBreakTime / 60);
    let m = calculateBreakTime % 60;
    h = h < 10 ? '0' + h : h;
    m = m < 10 ? '0' + m : m;
    document.getElementById("show-total-break").innerHTML = (h + ":" + m);
});
