var list = document.querySelectorAll('.list');
var input1 = document.querySelector('#input1');
var input2 = document.querySelector('#input2');


// var dayList = ["sunday","monday","tuesday","wednesday","thursday","friday","saturday"];
// var dayList2 =["sunday","monday","tuesday","wednesday","thursday","friday","saturday"];
// // console.log(input1);
// console.log(moment);

input1.addEventListener('change', function1);
input2.addEventListener('change', function1);
function function1(){
  var re = new Date(input1.value).getDay();
  var we = new Date(input2.value).getDay();

  for (var i = 0; i < list.length; i++) {
    list[i].classList.remove('red');
    list[i].classList.remove('blue');
    list[i].classList.remove('green');

   if(re === we){
      list[re].classList.add('green');
    }
    else if (re !== '' && we !== '') {
      list[re].classList.add('red');
      list[we].classList.add('blue');
    }

}
}



//
// input2.addEventListener('change', function(){
// var we = new Date(input2.value).getDay();
// for (var i = 0; i < list.length; i++){
// if (list[i].innerHTML === dayList2[we]){
//     list[i].classList.add('blue');
// }
// // else if(list[i].innerHTML  === dayList[re]){
// // list[i].classList.add('green');
// // }
// }
//
// };
