$(document).ready(function() {
//moment to display date and time
function time() {
    $("#date").text(moment().format('MMMM Do YYYY, h:mm:ss a'));
}
setInterval(time, 1000);

$(".saveBtn").on("click", function() {
    var txtInput = $(this).siblings("#event").val();
    var hour = $(this).parent().attr("id");
    localStorage.setItem(hour, txtInput);
    console.log(txtInput);
})

function updateColor () {
    var time = parseInt(moment().hour());
    console.log(time);
    if (time >= 9 && time < 10) {
        $("#9 #event").addClass("present");
        $("#event").addClass("future");
    }
    else {
        $("#9 #event").removeClass("present");
        $("#9 #event").addClass("past");
        $("#9 #event").attr('readonly','readonly'); //user can longer input a task once the time log has passed.
    }
    if (time >= 10 && time < 11) {
        $("#10 #event").addClass("present");
        $("#event").addClass("future");
    }
    else {
        $("#10 #event").removeClass("present");
        $("#10 #event").addClass("past");
        $("#10 #event").attr('readonly','readonly');
    }
    if (time >= 11 && time < 12) {
        $("#11 #event").addClass("present");
        $("#event").addClass("future");
    }
    else {
        $("#10 #event").removeClass("present");
        $("#10 #event").addClass("past");
        $("#10 #event").attr('readonly','readonly');
    }
    if (time >= 12 && time < 13) {
        $("#12 #event").addClass("present");
        $("#event").addClass("future");
    }
    else {
        $("#12 #event").removeClass("present");
        $("#12 #event").addClass("past");
        $("#12 #event").attr('readonly','readonly');
    }
    if (time >= 13 && time < 14) {
        $("#1 #event").addClass("present");
        $("#event").addClass("future");
    }
    else {
        $("#13 #event").removeClass("present");
        $("#13 #event").addClass("past");
        $("#13 #event").attr('readonly','readonly');
    }
    if (time >= 14 && time < 15) {
        $("#2 #event").addClass("present");
        $("#event").addClass("future");
    }
    else {
        $("#14 #event").removeClass("present");
        $("#14 #event").addClass("past");
        $("#14 #event").attr('readonly','readonly');
    }
    if (time >= 15 && time < 16) {
        $("#3 #event").addClass("present");
        $("#event").addClass("future");
    }
    else {
        $("#15 #event").removeClass("present");
        $("#15 #event").addClass("past");
        $("#15 #event").attr('readonly','readonly');
    }
    if (time >= 16 && time < 17) {
        $("#4 #event").addClass("present");
        $("#event").addClass("future");
    }
    else {
        $("#16 #event").removeClass("present");
        $("#16 #event").addClass("past");
        $("#16 #event").attr('readonly','readonly');
    }
    if (time >= 17 && time < 18) {
        $("#5 #event").addClass("present");
        $("#event").addClass("future");
       
    }
    else {
        $("#17 #event").removeClass("present");
        $("#17 #event").addClass("past");
        $("#17 #event").attr('readonly','readonly');
    }
}

function clear() { //I want this function to clear local storage once a new day has started.
    if (time === 0) { //0 being midnight aka a new day.
        $("#event").val(localStorage.removeItem("#event"));
    }
}


$("#9 #event").val(localStorage.getItem("9"));
$("#10 #event").val(localStorage.getItem("10"));
$("#11 #event").val(localStorage.getItem("11"));
$("#12 #event").val(localStorage.getItem("12"));
$("#1 #event").val(localStorage.getItem("1"));
$("#2 #event").val(localStorage.getItem("2"));
$("#3 #event").val(localStorage.getItem("3"));
$("#4 #event").val(localStorage.getItem("4"));
$("#5 #event").val(localStorage.getItem("5"));

updateColor();
time();
clear();
});
