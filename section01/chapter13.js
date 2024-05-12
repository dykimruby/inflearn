// 콜백함수 : 자신이 아닌 다른 함수에, 인수로써 전달된 함수를 의미

/*
function main(value) { // value라는 매개변수에 sub()라는 함수가 들어옴
  value(); //value 매개변수에 저장된 함수를 main함수 안에서 호출시켜줄 수 있음.
  //value라는 매개변수 안에 sub()라는 함수가 저장되어있기 때문에
}

function sub() {
  console.log("sub");
}

main(sub); //서브라는 함수를 값으로써 인수로 전달할 수 있음. [콜백함수]
// 결과 : sub라는 문자열 출력
*/

//1. 콜백함수
function main(value) {
  // console.log(value); 
  value(); // value 매개변수가 담겨있어서 호출하는 거 또한 가능하다 (usb함수 호출)
}

function sub() { //자바스크립트에서는 이러한 함수도 문자열이나 숫자 같은 값으로 취급된다.
  console.log("I am sub");
}

// main(1); //옛날에 했던 방식
main(sub); // 함수를 값으로 취급하기 때문에 다른함수의 인수로써 넣을 수 있는 것이다.
// 이렇게 하면 콘솔에 sub함수 그 자체가 출력이 된다. sub() {~~~}

//이렇듯 어떠한 함수를 다른함수의 인수로 전달해서 나중에 호출시키도록 이렇듯 해당함수에서 알아서 호출하도록 설정한 sub와 같은 함수를 콜백함수라고 한다.

// 2. 콜백함수의 활용
function repeat(count, callback) {
  for (let idx = 1; idx <= count; idx++) {
    callback(idx);
  }
}

repeat(5, (idx) => {
  console.log(idx);
});

repeat(5, (idx) => {
  console.log(idx * 2);
});

repeat(5, (idx) => {
  console.log(idx * 3);
});
