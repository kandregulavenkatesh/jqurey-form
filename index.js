$('#submit').on('click', function(event) {
    var firstName = $.trim($('#fname').val());
    var lastName = $.trim($('#lname').val());
    var email = $.trim($('#email').val());
    var mobile = $.trim($('#mobile').val());
    var dob = $.trim($('#dob').val());
    var adharcard = $.trim($('#adhar').val());
    var address = $.trim($('#addres').val());
    var mother_tounge = $.trim($('#language').val());
    var numRows = $('#table').find('tr').length;
    var newRow = $(`<tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td><button id="dtl"class="btn btn-danger" onclick="onDelete()">Delete</button></td></tr>`);
    var cols = newRow.children();
    cols.eq(0).text(numRows + 0);
    cols.eq(1).text(firstName);
    cols.eq(2).text(lastName);
    cols.eq(3).text(email);
    cols.eq(4).text(mobile);
    cols.eq(5).text(dob);
    cols.eq(6).text(adharcard);
    cols.eq(7).text(address);
    cols.eq(8).text(mother_tounge );
    newRow.appendTo('#table');

});
function onDelete() {
    if ($("#table").remove());
        
}

$("#fname").keypress(function (e) {
    if (e.which > 48 && e.which < 57) { return false}
});
$("#lname").keypress(function (e) {
    if (e.which > 48 && e.which < 57) { return false}
});

$("#mobile").keypress(function (e) {
    if (e.which == 8) { return true }
    else {   
        if (e.which < 48 || e.which > 57) { return false; }
    }
});
function ename() {
    var email1 = document.getElementById('email').value;
    var mailrex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (email1.match(mailrex)) {
        $('#email').css('border-color', '1px solid green'); 
        return true;
    }
    else {

        $('#email').css('border-color', '1px solid red'); 
        return false;

    }


}