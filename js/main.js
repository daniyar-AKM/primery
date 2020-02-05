// // // // function showMessage() {
// // // //     let message = "Привет, я JavaScript!"; // локальная переменная
  
// // // //     alert( message );
// // // //   }
  
// // // //   showMessage(); // Привет, я JavaScript!
  
// // // // //   alert( message ); // <-- будет ошибка, т.к. переменная видна только внутри функции

// // // // function showMessage(a) {
// // // //   alert( 'Всем привет!'+a );
// // // // }//declaration

// // // // let fake = function (a,b,c){}//expression

// // // // showMessage(4);
// // // // showMessage(6);

// // // // var sayHi = function(person) {
// // // //     alert( "Привет, " + person );
// // // //   };
  
// // // // sayHi('Мастера Кунг-Фу ')

// // // function showMessage() {
// // //   alert( 'Всем привет!' );
// // // }

// // // showMessage();

// // // let numbers = [1,10,15,20 ,-5,8,14];
// // // for(let i = 0;i <numbers.length; i ++ ){
// // //   // console.log(numbers[i])
// // // }
// // // numbers.forEach(function(item,i){
// // //  console.log(item)
// // //  console.log(i)
// // // })

// // let people = [

// // {name:"Jonh,",
// //   age:22,
// //   profession:"DevOps"},

// //   {name:"Abbot",
// //   age:35,
// //   profession:"banker"},

// // {name:"Nick",
// //   age:55,
// //   profession:"Project Manager",

// // }
// // ]

// // // for(let i = 0; i < people.length; i++) {
// // //     console.log(people[i])
// // // }

// // // for(let person of people) {
// // //   console.log(person)
// // // }wq  

// // // people.forEach(person => console.log(person));
  
// //   // console.log(index)
// //   // console.log(arr)

// // let newPeople =people.map(person => {
// // return person
// // })
// // console.log(newPeople)

// // function caesarCipher(s, k) {
// //   let res = str.replace(abc,'def')
// //   console.log(res())
// //   }
 
// // function caesarCipher() {
// //   let str = 'abcdefghijklmnopqrstuvwxyz';
// //   let res = str.replace(/\s*$/, '');
// //   console.log(res)
// // // }
  
// var str = 'Caesar Cipher';

// function CaesarCipher(str, offset){  
//   var charArray = str.split('');
//   var result = charArray.map(function( char){return }.join('');  

//   function shiftChar(char, offset){
//     var isAlpha = /[A-z]/;

//     if(isAlpha.test(char)){
//       char = String.fromCharCode(char.charCodeAt(0) + offset);
//       if(char > 'Z' && char < 'a' || char > 'z')
//         char = String.fromCharCode(char.charCodeAt(0) - 26);
//     }
//     return char;
//   }
//   return result;
// }

// console.log(CaesarCipher( str, 2))

// function rot13(str) {
//   // LBH QVQ VG!
//   return str.replace(/[A-Z]/g, L =>
//     String.fromCharCode((L.charCodeAt(0) % 26) + 65)
//   );
// }
// let str = 'abcdefghijklmnopqrstuvwxyz'
// let res = str.replace(abc, 'def')
// let alp=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
// let spread = [...alp];



// console.log(spread)

function caesarCipher(str,number) {
  let alph=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
  let newAlph = [...alph];
  newAlph.unshift(...newAlph.splice(newAlph.length-number))
  

}