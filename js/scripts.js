$(document).ready(function(){
  $("form").submit(function(event){
  var userInput = parseInt($("#number").val());
  var total = 0;
  console.log(typeof userInput);
  for(var i=userInput; i>=1; i-=1){
  total += (i * (i -1));
  alert(total);

}
  event.preventDefault();
  });
});


// var iceCreamFlavors = ["mango","vanilla","berries"];
//  for (var index = 0; index < iceCreamFlavors.length; index += 1) {
//    document.write(iceCreamFlavors[index] + "<br>");
