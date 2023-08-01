let a = [1, 2];
let b: string[] = ["il", "l"];
//위 아래는 같지만, 위처럼 TS가 추론하게끔 하는게 좋음

//Alias타입
type Age = number; // 이런식으로도 type을 사용할 수 있음
type Player = {
  readonly name: string;
  age?: Age;
};
/*plyer은 name은 같지만 age는 없을 수 있음 : 선택적 타입 추가 */

// player.age가 undefined일 가능성 체크
// if (player.age && player.age < 10) {
// }

//argument의 타입지정 : 함수의 return값 지정
// function PlayerMaker(name: string): Player {
//   return {
//     name, //name: name
//   };
// }

//화살표 함수를 사용했을때 위 : 아래 같음
const PlayerMaker = (name: string): Player => ({ name });

const jyj2 = PlayerMaker("jyj");
jyj2.age = 12;
//jyj2.name = "las"//오류! readonly

const numbers: readonly number[] = [1, 2, 3, 4];
//numbers.push(1); // readonly 오류 // immutability(불변성) 부여

//Tuple : 특정위치에 특정 타입이 있어야함!
const Player2: readonly [string, number, boolean] = ["jyj", 1, true];

//undefined: 선언X 할당X  null: 선언O 할당X
let c: undefined = undefined;
let d: null = null;

//any : 모든타입 ! JS처럼 모든 타입을 사용하고 싶은 경우 *사용하지 않는 걸 추천
const e: any[] = [1, 2, 3, 4];
const f: any = true;
e + f;

//타입을 모를경우
let g: unknown;

if (typeof g === "number") {
  let l = g + 1;
}

if (typeof g === "string") {
  let l = g.toUpperCase();
}

//void 아무것도 리턴하지않는 함수
//never : 함수가 return되지 않을때
function helloError(): never {
  throw new Error("XXXX"); //리턴하지 않고 에러 발생시킴
}

function hello(name: string | number) {}
