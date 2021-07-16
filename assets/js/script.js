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

function submitForm() {
   // Get the first form with the name
   // Usually the form name is not repeated
   // but duplicate names are possible in HTML
   // Therefore to work around the issue, enforce the correct index
   var frm = document.getElementsByName('contact-form')[0];
   frm.submit(); // Submit the form
   frm.reset();  // Reset all form data
   return false; // Prevent page refresh
}