 
$("#home").hide();
$("#resume").hide();
$("#contact").hide();
$("#skytext").hide();



$("#nresume").click(function() {
    $("#resume").show();
    $("#nresume").hide();
});

$("#ncontact").click(function() {
    $("#contact").show();
    $("#ncontact").hide();

});


$("#nhome").click(function() {
    $("#home").show();
    $("#nhome").hide();
    $("#skytext").delay(10000).fadeIn(10);
});