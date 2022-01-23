const chekIn = document.getElementById('chekIn');
const chekOut = document.getElementById('chekOut');
chekOut.disabled = true;
let checkOutSecond, checkInSecond, calculateBreakTime = 0, CalculateInTime = 0;

function clickChekIn() {
    chekOut.disabled = false;
    chekIn.disabled = true;
    const todayCheckIn = new Date();
    checkInSecond = (todayCheckIn.getHours() * 3600) + (todayCheckIn.getMinutes() * 60) + todayCheckIn.getSeconds();
    if (checkOutSecond > 0) {
        const totalBreak = checkInSecond - checkOutSecond;
        calculateBreakTime = calculateBreakTime + totalBreak;
    }
}

function clickChekOut() {
    chekOut.disabled = true;
    chekIn.disabled = false;
    const todayCheckOut = new Date();
    checkOutSecond = (todayCheckOut.getHours() * 3600) + (todayCheckOut.getMinutes() * 60) + todayCheckOut.getSeconds();
    const totalTime = checkOutSecond - checkInSecond;
    CalculateInTime = CalculateInTime + totalTime;
    const table = document.getElementById("myTable");
    const row = `<tr><td>${secondsToHms(checkInSecond)}</td>
                     <td>${secondsToHms(checkOutSecond)}</td>
                     <td>${secondsToHms(totalTime)}</td></tr>`
    table.innerHTML += row;
    document.getElementById("show-total-intime").innerHTML = secondsToHms(CalculateInTime);
    document.getElementById("show-total-break").innerHTML = secondsToHms(calculateBreakTime);
}

function secondsToHms(d) {
    let h = Math.floor(d / 3600);
    let m = Math.floor(d % 3600 / 60);
    let s = Math.floor(d % 3600 % 60);
    h = h < 10 ? '0' + h : h;
    m = m < 10 ? '0' + m : m;
    s = s < 10 ? '0' + s : s;
    return h + ":" + m + ":" + s;
}
