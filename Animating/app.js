$('.spoiler').hide();

// When the button is pressed
$('button').on('click', function(){
  //Show the spoiler text
  $('.spoilerButton').hide()
  $('.spoiler').fadeIn(400);
});
