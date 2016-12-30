var number = 430020;

//금액 숫자 가는 곳!!!

console.log("NUMBER loaded " + number);

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "원";
}

var counter = 0;
for(var i = 0; i < number; ++i) {
  (function(index) {
    setTimeout(function() {
      counter++;
      $('#funds').text(numberWithCommas(counter));

    }, i * 1);
  })(i)

}
