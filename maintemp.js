document.addEventListener('DOMContentLoaded',function() {
  var button1 = document.getElementById('submit');
  var button2 = document.getElementById('clear');
  var tempConv = function(F) {
    var C = Math.round((F - 32) * (5/9));
    return C;
  };

  button1.addEventListener('click',function() {
    var temp = document.querySelector(".temp").value;
    var C = tempConv(temp);
    document.getElementById('output').value = C;
  });

  button2.addEventListener('click',function() {
    var tempClear = "";
    document.querySelector(".temp").value = tempClear;
    document.getElementById('output').value = tempClear;
  });

});



