
// let hrs = document.getElementById("hrs");
// let min = document.getElementById("min");
// let sec = document.getElementById("sec");



// setInterval(()=>{
//     let  currentTime = new Date();
// hrs.innerHTML = currentTime.getHours();
// min.innerHTML = currentTime.getMinutes();
// sec.innerHTML = currentTime.getSeconds();

// },1000)

let hrs = document.getElementById("hrs");
let min = document.getElementById("min");
let sec = document.getElementById("sec");

setInterval(() => {
    let currentTime = new Date();
    let hours = currentTime.getHours() % 4; // Convert to 4-hour format
    hours = hours === 0 ? 4 : hours; // If it results in 0, display as 4 (to avoid 0 o'clock)
    
    hrs.innerHTML = hours;
    min.innerHTML = currentTime.getMinutes();
    sec.innerHTML = currentTime.getSeconds();
}, 1000);
