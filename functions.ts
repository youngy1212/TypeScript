// function add(a: number, b: number) {
//   return a + b;
// }

const add = (a: number, b: number) => a + b;

type Add = (a: number, b: number) => number; //call signature

const add2: Add = (a, b) => a + b; //타입을 미리 지정해 둠

//overloading
//외부라이브러리-> 오버로딩을 많이 사용

//서로 다른 여러개의 call signature 을 가지고있을때 overloading
type Add2 = {
  (a: number, b: number): number;
  (a: number, b: string): number;
};

const add3: Add2 = (a, b) => {
  if (typeof b === "string") return a;
  return a + b;
};

//예시
type Config = {
  path: string;
  state: object;
};

type Push = {
  (path: string): void;
  (config: Config): void;
};

const push: Push = (config) => {
  if (typeof config === "string") {
    console.log(config);
  } else {
    console.log(config.path);
  }
};

//여러개의 파라미터를 가지는 경우
type Add4 = {
  (a: number, b: number): number;
  (a: number, b: number, c: number): number;
};

//c는 옵션이란걸 알려줘여함
const add4: Add4 = (a, b, c?: number) => {
  if (c) return a + b + c;
  return a + b;
};

add4(1, 2);
add4(1, 2, 3);

//Polymorphism 다향성

// type SuperPrint = {
//   (arr: number[]): void;
//   (arr: boolean[]): void;
//   (arr: (number | boolean)[]): void;
// };

type SuperPrint = {
  //제네릭사용
  <TypePlaceholder>(arr: TypePlaceholder[]): TypePlaceholder;
};

const superPrint: SuperPrint = (arr) => arr[0];

//타입스크립트는 유추하고 generic -> 유추한 타입으로 바꿔줌
const a1 = superPrint([1, 2, 3, 4]);
const a2 = superPrint([true, false, true]);
const a3 = superPrint([2, 3, true, false]);

//generic 사용
//call signature를 작성할때, 들어올 타입을 확실히 모를때 사용
//'제네릭은 선언 시점이 아니라 생성 시점에 타입을 명시하여 하나의
//타입만이 아닌 다양한 타입을 사용할 수 있도록 하는 기법이다.'

function superPrint2<T>(a: T[]) {
  return a[0];
}

//제네릭 예시
type Player1<E> = {
  name: string;
  extraInfo: E;
};

type CoExtra = {
  favFood: string;
};

type CoPlayer = Player1<CoExtra>;

const tt: CoPlayer = {
  name: "tt",
  extraInfo: {
    favFood: "찌개",
  },
};

const lynn: Player1<null> = {
  name: "lynn",
  extraInfo: null,
};

type A = Array<number>;
let a7: A = [1, 2, 3, 4];
