
// let count = 0;

// let countDown = setInterval(function(){
//     count++;
//    console.log("count : " + count);
// }, 1000)

// setTimeout(function(){
//     clearInterval(countDown)
//     console.log("hello");
// }, 5000)
 let dateformate = document.getElementById("mydate");
let timeformate = document.getElementById("hrmms");
let _setDays = document.getElementById("setdays")
let _days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
let zonebox = document.getElementById("zone-box");

function numformate(num){
    return num < 10 ? "0" + num : num;
}

function digitalclock(){
    let localDate = new Date();
   
    let hour = numformate(localDate.getHours());
    let minute = numformate(localDate.getMinutes());
    let second = numformate(localDate.getSeconds());
    let dd = localDate.getDay();
       
        timeformate.innerText = hour +" : " + minute + " : " + second ;
        document.getElementsByClassName("active-days")[0].classList.remove("active-days");
        document.getElementsByClassName("day-circle")[dd].classList.add("active-days");
   

}
    digitalclock();
    setInterval(digitalclock, 1000);

 function digitaldate(){
    let local_Date = new Date();
    let date = numformate(local_Date.getDate());
    let month = numformate(local_Date.getMonth());
    let year = numformate(local_Date.getFullYear());
        dateformate.innerText = date + " : " + month + " : " + year;

 }   
 digitaldate();



function digitaltimezone(){
    let local_time = new Date();
    let hour = numformate(local_time.getHours());

        if(local_time.getHours() >=12 && local_time.getHours()<=24){
            document.getElementsByClassName("ampm-circle")[0].classList.remove("active-days");
            document.getElementsByClassName("ampm-circle")[1].classList.add("active-days");
            }
            else{
                document.getElementsByClassName("ampm-circle")[1].classList.remove("active-days");
                document.getElementsByClassName("ampm-circle")[0].classList.add("active-days");
            }
    // let local_ampm = hour1>= 12 ? "PM" : "AM" 

    //zonebox.innerText= local_ampm;
    // document.getElementsByClassName("ampm-circle")[local_ampm].classList.add("active-days");
}

digitaltimezone();