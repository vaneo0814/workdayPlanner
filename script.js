$(document).ready(function () {
    //moment to display date and time
    function time() {
        $("#date").text(moment().format('MMMM Do YYYY, h:mm:ss a'));
    }
    setInterval(time, 1000);

    $(".saveBtn").on("click", function () {
        var txtInput = $(this).siblings("#event").val();
        var hour = $(this).parent().attr("id");
        localStorage.setItem(hour, txtInput);
    })

    function updateColor() {
        var time = parseInt(moment().hour());
        console.log(time);
        if (time === 9) {
            $("#9 #event").addClass("present");
            $("#10 #event").addClass("future");
            $("#11 #event").addClass("future");
            $("#12 #event").addClass("future");
            $("#13 #event").addClass("future");
            $("#14 #event").addClass("future");
            $("#15 #event").addClass("future");
            $("#16 #event").addClass("future");
            $("#17 #event").addClass("future");
        }
        else if (time > 9) {
            $("#9 #event").removeClass("present");
            $("#9 #event").addClass("past");
        }
        if (time === 10) {
            $("#10 #event").addClass("present");
            $("#11 #event").addClass("future");
            $("#12 #event").addClass("future");
            $("#13 #event").addClass("future");
            $("#14 #event").addClass("future");
            $("#15 #event").addClass("future");
            $("#16 #event").addClass("future");
            $("#17 #event").addClass("future");

        }
        else if (time > 10) {
            $("#10 #event").removeClass("present");
            $("#10 #event").addClass("past");
        }
        if (time === 11) {
            $("#11 #event").addClass("present");
            $("#12 #event").addClass("future");
            $("#13 #event").addClass("future");
            $("#14 #event").addClass("future");
            $("#15 #event").addClass("future");
            $("#16 #event").addClass("future");
            $("#17 #event").addClass("future");
        }
        else if (time > 11) {
            $("#11 #event").removeClass("present");
            $("#11 #event").addClass("past");
        }
        if (time === 12) {
            $("#12 #event").addClass("present");
            $("#13 #event").addClass("future");
            $("#14 #event").addClass("future");
            $("#15 #event").addClass("future");
            $("#16 #event").addClass("future");
            $("#17 #event").addClass("future");
        }
        else if (time > 12) {
            $("#12 #event").removeClass("present");
            $("#12 #event").addClass("past");
        }
        if (time === 13) {
            $("#13 #event").addClass("present");
            $("#14 #event").addClass("future");
            $("#15 #event").addClass("future");
            $("#16 #event").addClass("future");
            $("#17 #event").addClass("future");
        }
        else if (time > 13) {
            $("#13 #event").removeClass("present");
            $("#13 #event").addClass("past");
        }
        if (time === 14) {
            $("#14 #event").addClass("present");
            $("#15 #event").addClass("future");
            $("#16 #event").addClass("future");
            $("#17 #event").addClass("future");
        }
        else if (time > 14) {
            $("#14 #event").removeClass("present");
            $("#14 #event").addClass("past");
        }
        if (time === 15) {
            $("#15 #event").addClass("present");
            $("#16 #event").addClass("future");
            $("#17 #event").addClass("future");
        }
        else if (time > 15) {
            $("#15 #event").removeClass("present");
            $("#15 #event").addClass("past");
        }
        if (time === 16) {
            $("#16 #event").addClass("present");
            $("#17 #event").addClass("future");
        }
        else if (time > 16) {
            $("#16 #event").removeClass("present");
            $("#16 #event").addClass("past"); 
        }
        if (time === 17) {
            $("#17 #event").addClass("present"); 
        }
        else if (time > 17) {
            $("#17 #event").removeClass("present");
            $("#17 #event").addClass("past");
        }
        if (time === 0) { //I want the local storage to clear and start fresh when a new day has begun..0 being midnight aka a new day.
            window.localStorage.clear();
          }
    }

    $("#9 #event").val(localStorage.getItem("9"));
    $("#10 #event").val(localStorage.getItem("10"));
    $("#11 #event").val(localStorage.getItem("11"));
    $("#12 #event").val(localStorage.getItem("12"));
    $("#13 #event").val(localStorage.getItem("13"));
    $("#14 #event").val(localStorage.getItem("24"));
    $("#15 #event").val(localStorage.getItem("15"));
    $("#16 #event").val(localStorage.getItem("16"));
    $("#17 #event").val(localStorage.getItem("17"));

    updateColor();
    time();
});
