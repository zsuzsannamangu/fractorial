function factorial(number){
  for(var i=number; i>1; i-=1){
    // console.log(i, number)
    number *= (i-1);
  }
  return number
}
// console.log(factorial(3) === 6)
// console.log(factorial(5) === 120)
// console.log(factorial(10) === 3628800)

$(document).ready(function(){
  $("form").submit(function(event){
    var number = parseInt($("#number").val());
    $("#answer").val(factorial(number));
    event.preventDefault();
  });
});


// $(document).ready(function(){
//   $("form").submit(function(event){
//     var userInput = parseInt($("#number").val());
//     console.log(typeof userInput);
//     for(var i=userInput; i>1; i-=1){
//       userInput *= (i-1);
//     }
//     alert(userInput);
//     event.preventDefault();
//   });
// });
