//함수선언

function greeting () {
  console.log("안녕하세요");
}

console.log("호출 전");
greeting();
console.log("호출 후");

//함수
function getArea (width, height) { //매개변수
    //중첩함수 : 자바스크립트 안에서는 또다른 함수를 선언하는 것도 가능하다!
  function another(){
    console.log("another");
  }
  another();

  //let width = 10;
  //let height = 20;
  let area = width * height;

  //console.log(area);
  return area; //반환값 : 함수 호출의 결과값 => 함수가 결과값을 반환하도록 만들어줌.
  //함수가 리턴문을 만나게 되면, 그냥 값을 반환하고 종료되기 때문에, 
  console.log("hello"); //return 밑에 코드를 추가적으로 적어도 이 코드는 실질적으로 수행X

}

let area1 = getArea(10, 20); //인수, 반환값을 변수에 담아서 활용가능
console.log(area1);

let area2 = getArea(30, 20);
console.log(area2);

getArea(120, 200);

// 호이스팅 : 자바스크립트에서의 호이스팅이란 코드 밑바닥에 작성되어있는 선언문들을 최상단으로 끌어올려져서 실행(내부적으로)
// -> 끌어올리다 라는 뜻
//자바스크립트의 독특한 기능 : 자바스크립트에서는 함수의 선언을 함수의 호출보다 아래에 두어도 아무런 문제없이 수행이 잘 된다!!