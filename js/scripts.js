$(document).ready(function() {
  //$('#blanks form').submit(function(event) {
    //var numberInput = $("input#number").val();
var number = parseInt(prompt("Ping Pong?"));
    for (var index = 1; index <= number; index += 1) {
      if (index % 15 === 0) {
        $('#list').append('<li>' + 'Ping-Pong' + '</li>');
      } else if (index % 3 === 0) {
          $('#list').append('<li>' + 'Ping' + '</li>');
      } else if (index % 5 === 0) {
          $('#list').append('<li>' + 'Pong' + '</li>');
      } else {
          $('#list').append('<li>' + index + '</li>');
      }
    };
    
    //$('.number').text(numberInput);
   

    //$('#list').show();
    
    //event.preventDefault();
  });
//});