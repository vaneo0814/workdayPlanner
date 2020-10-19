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
        console.log(txtInput);
    })

    function updateColor() {
        var time = parseInt(moment().hour());
        console.log(time);
        if (time === 9) {
            $("#9 #event").addClass("present");
        }
        else if (time > 9) {
            $("#9 #event").removeClass("present");
            $("#9 #event").addClass("past");
            $("#9 #event").attr('readonly', 'readonly'); //user can longer input a task once the time log has passed.
        }
        if (time === 10) {
            $("#10 #event").addClass("present");
        }
        else if (time > 10) {
            $("#10 #event").removeClass("present");
            $("#10 #event").addClass("past");
            $("#10 #event").attr('readonly', 'readonly');
        }
        if (time === 11) {
            $("#11 #event").addClass("present");
        }
        else if (time > 11) {
            $("#10 #event").removeClass("present");
            $("#10 #event").addClass("past");
            $("#11 #event").attr('readonly', 'readonly');
        }
        if (time === 12) {
            $("#12 #event").addClass("present");
        }
        else if (time > 12) {
            $("#12 #event").removeClass("present");
            $("#12 #event").addClass("past");
            $("#12 #event").attr('readonly', 'readonly');
        }
        if (time === 13) {
            $("#13 #event").addClass("present");
        }
        else if (time > 13) {
            $("#13 #event").removeClass("present");
            $("#13 #event").addClass("past");
            $("#13 #event").attr('readonly', 'readonly');
        }
        if (time === 14) {
            $("#14 #event").addClass("present");
        }
        else if (time > 14) {
            $("#14 #event").removeClass("present");
            $("#14 #event").addClass("past");
            $("#14 #event").attr('readonly', 'readonly');
        }
        if (time === 15) {
            $("#15 #event").addClass("present");
        }
        else if (time > 15) {
            $("#15 #event").removeClass("present");
            $("#15 #event").addClass("past");
            $("#15 #event").attr('readonly', 'readonly');
        }
        if (time === 16) {
            $("#16 #event").addClass("present");
        }
        else if (time > 16) {
            $("#16 #event").removeClass("present");
            $("#16 #event").addClass("past");
            $("#16 #event").attr('readonly', 'readonly');
        }
        if (time === 17) {
            $("#17 #event").addClass("present");
        }
        else if (time > 17) {
            $("#17 #event").removeClass("present");
            $("#17 #event").addClass("past");
            $("#17 #event").attr('readonly', 'readonly');
        }
    }


    function clear() { //I want this function to clear local storage once a new day has started.
        if (time === 0) { //0 being midnight aka a new day.
            $("#9 #event").val(localStorage.removeItem("9"));
            $("#10 #event").val(localStorage.removeItem("10"));
            $("#11 #event").val(localStorage.removeItem("11"));
            $("#12 #event").val(localStorage.removeItem("12"));
            $("#13 #event").val(localStorage.removeItem("13"));
            $("#14 #event").val(localStorage.removeItem("24"));
            $("#15 #event").val(localStorage.removeItem("15"));
            $("#16 #event").val(localStorage.removeItem("16"));
            $("#17 #event").val(localStorage.removeItem("17"));
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
    clear();
});
