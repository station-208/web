$(document).ready(function() {
  $('.line_split').each(function(index) {

    var words = $(this).text().split(" ");
    $(this).text("");

    for(var i = 0; i < words.length; ++i) {
      $(this).append("<p class='line_split_word'>" + words[i] + "</p>");
    }

    console.log(words);
  });
});
