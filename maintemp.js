document.addEventListener('DOMContentLoaded',function() {
  var button1 = document.getElementById('submit');
  var button2 = document.getElementById('clear');
  var tempConv = function(F) {
    var C = Math.round((F - 32) * (5/9));
    return C;
  };

  button1.addEventListener('click',function() {
    var temp = document.querySelector(".temp").value;
    console.log(temp);
    var C = tempConv(temp);
    console.log(C);
    document.getElementById('output').value = C;
  });

  button2.addEventListener('click',function() {
    alert("HERE")
    var tempClear = document.querySelector(".temp").value;
    var D = tempConv(tempClear);
    //console.log(C);
    tempClear = "";
    document.querySelector(".temp").value = D
    document.getElementById('output').value = D;
  });

});



