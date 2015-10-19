$(document).ready(function() {
  var number = parseInt(prompt("Enter a number to play Ping-Pong"));

  for (var index = 1; index <= number; index += 1) {
    if (index % 15 === 0) {
      $('#list').append('<li>' + 'Ping-Pong!' + '</li>');
    } else if (index % 3 === 0) {
      $('#list').append('<li>' + 'Ping!' + '</li>');
    } else if (index % 5 === 0) {
      $('#list').append('<li>' + 'Pong!' + '</li>');
    } else {
      $('#list').append('<li>' + index + '</li>');
      }
    };
  });