// 1. 함수 표현식

function funcA() { //함수 선언문으로 함수 생성
  // console.log("funcA");
}

let varA = funcA; //초기값으로 funcA를 변수에 저장 가능!
//varA(); 
console.log(varA); //함수자체가 콘솔에 출력이 된다.
//자바스크립트에서는 함수도 숫자나 문자열과 같은 하나의 값으로써 취급.
varA(); //funcA라는 함수를 변수의 이름으로 호출할 수 있음.

let  varB = function funcB(){ //값으로써 함수 생성 => 이런 경우는생성할 때 함수의 이름을 생략해도 된다!! let varB = function () <- 익명함수 : 이름이 없다.
  // console.log("funcB");
}

varB();
//funcB(); 함수 선언문으로 함수를 생성한 게 아니라, 값으로써 함수가 생성된 거기 때문에, 이 함수의 이름으로는 호출불가
//호이스팅의 대상X

// 2. 화살표 함수 : 함수를 이전보다 더 빠르고 간결하게 생성할 수 있도록 해주는 문법

// let varC = function () { //함수 표현식으로 함수를 표현해줄 때에는 이런식으로 함수를 만들어 줬지만,지금부터 살펴볼 화살표 함수는 빠르고 간결하게 가능
//  return 1; 
// } 

// 위와 동일
// 1)
// let varC = () => { //function을 지워주고 오른쪽에 화살표=>를 쓰면 된다.
//  return 1; //이런식으로 값을 반환하기만 한다면, 아래처럼 쓰는 것도 가능
// }
// 2)
// let varC = () => 1; //이렇게 중괄호와 return문을 지워줘도 된다.

// 매개변수는 괄호 안에 넣어주면 된다.
let varC = (value) => value + 1;

console.log(varC(10)); //함수호출 할 때 인수로 10을 준 것.

//결과값을 즉시 반환이 아닌 추가적인 작업을 해야된다면, 화살표 끝에 중괄호를 열어준다음,추가적인 작업을 해준다음, return문을 써주면된다.
// let varC = (value) => {
//  console.log(value);
//  return value + 1;
// };
