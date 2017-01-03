var number = 430020;

//금액 숫자 가는 곳!!!

console.log("NUMBER loaded " + number);

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "원";
}

function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

$(document).ready(function() {
  var counter = 0;
  for(var i = 1; i < number / 100; ++i) {
    (function(index) {
      setTimeout(function() {
        counter += 100;
        
        if(counter / 100 == parseInt(number / 100)) {
          $('#funds').text(numberWithCommas(counter + number % 100));
          console.log("Finished!");
        } else {
          $('#funds').text(numberWithCommas(counter + getRandomArbitrary(1, 100)));
        }



      }, i * 1);
    })(i)
  }


});
