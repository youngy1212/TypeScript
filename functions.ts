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
