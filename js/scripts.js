$(document).ready(function() {
  $('#blanks form').submit(function(event) {
    var numberInput = $("input#number").val();
    for (var index = 1; index <= number; index += 1)
    
    $('.number').text(numberInput);
   

    $('#list').show();
    
    event.preventDefault();
  });
});