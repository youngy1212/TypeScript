let a = [1, 2];
let b: string[] = ["il", "l"];
//위 아래는 같지만, 위처럼 TS가 추론하게끔 하는게 좋음

//Alias타입
type Age = number; // 이런식으로도 type을 사용할 수 있음
type Player = {
  name: string;
  age?: Age;
};
/*plyer은 name은 같지만 age는 없을 수 있음 : 선택적 타입 추가 */

const jyj: Player = {
  name: "jyj",
};
const playerlyee: Player = {
  name: "lyee",
  age: 12,
};

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
