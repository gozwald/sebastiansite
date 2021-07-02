$(function() {
    $('#icon1').click(function() {
        $('#icon').show();
        $('#icon1').hide();
        $('.float').show();
    });
    $('#icon').click(function() {
        $('#icon1').show();
        $('#icon').hide();
        $('.float').hide();
    });
});