//추상클래스
abstract class User {
  constructor(
    private firstName: string,
    private lastName: string,
    protected nickname: string
  ) {}
  abstract getNickName(): void;
  private getFullName() {
    return `${this.firstName}${this.lastName}`;
  }
}

//상속받음
class Player7 extends User {
  getNickName() {
    //private 상속받았어도 접근 불가!
    this.nickname;
  }
}

const young = new Player7("young", "ji", "지영");
//young.firstName; // private 기 떄문
//young.getFullName();// private 메서드에도 반응함

//new User() 사용할 수없음. 추상클래스이기 때문

//----

type Word = {
  term: string;
  definition: string;
};

type Words = {
  [key: string]: string;
};

class Dict {
  private words: Words;
  constructor() {
    this.words = {};
  }
  add(term: string, definition: string) {
    if (!this.get(term)) {
      this.words[term] = definition;
    }
  }
  get(term: string) {
    return this.words[term];
  }
  delete(term: string) {
    delete this.words[term];
  }
  update(term: string, newDef: string) {
    if (this.get(term)) {
      this.words[term] = newDef;
    }
  }

  showAll() {
    let output = "\n--- Dictionary Content ---\n";
    Object.keys(this.words).forEach(
      (term) => (output += `${term}: ${this.words[term]}\n`)
    );
    output += "--- End of Dictionary ---\n";
    console.log(output);
  }
  count() {
    //길이
    return Object.keys(this.words).length;
  }
  upsert(term: string, definition: string) {
    //추가+ 수정
    if (this.get(term)) {
      this.update(term, definition);
    } else {
      this.add(term, definition);
    }
  }
  exists(term: string) {
    //: 해당 단어가 사전에 존재하는지 여부를 알려줌.
    return this.words.hasOwnProperty(term);
    //return this.get(term) ? true : false;
  }

  bulkAdd(bulk: Word[]) {
    bulk.forEach((word) => this.add(word.term, word.definition));
  }
  //다음과 같은 방식으로. 여러개의 단어를 한번에 추가할 수 있게 해줌. [{term:"김치", definition:"대박이네~"}, {term:"아파트", definition:"비싸네~"}]

  bulkDelete(terms: string[]) {
    terms.forEach((term) => this.delete(term));
  }
  //다음과 같은 방식으로. 여러개의 단어를 한번에 삭제할 수 있게 해줌. ["김치", "아파트"]

  static hello() {
    //static메소드
    return "hello"; //static JS
  }
}

const dictionary = new Dict();

const KIMCHI = "김치";

//kimchi.def = "XXX"; // readonly 기 때문 타입스크립트는 내용을 수정하는 것을 보호!

//interfaces
type Team = "read" | "blue" | "yellow";
type Health = 1 | 5 | 10;
//team은 뭐든지 될 수 있음

interface Player6 {
  nickname: string;
  team: Team;
  health: Health;
}
//type과 interface 같은 기능
//차이점은? interface 하나의 목적으로만 사용가능
//interface Hello = string //사용불가능 : 오직 오브젝트 모양만 정할 수 있음

const nico: Player6 = {
  nickname: "ncio",
  team: "yellow",
  health: 1,
};

interface User2 {
  readonly name: string;
}

interface Player5 extends User2 {}

const yjy: Player5 = {
  name: "yj",
};

///합쳐진 인터페이스 : 타입으로는 불가능
interface User3 {
  name: string;
}
interface User3 {
  lastName: string;
}
interface User3 {
  health: number;
}

const user3: User3 = {
  name: "user",
  lastName: "3",
  health: 2,
};

//Interfaces 와 추상클래스
abstract class User4 {
  constructor(protected firstName: string, protected lastName: string) {}
  abstract sayHi(name: string): string;
  abstract fullName(): string;
}

class Player4 extends User4 {
  fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
  sayHi(name: string) {
    return `hello ${name}. My name is ${this.fullName()}`;
  }
}

//abstract로 상속받은 클래스를 js로 변환하게되면, abstract코드도 js파일에 남게된다.
//인터페이스는 가벼움. 인터페이스는 컴파일시 JS로 변환되지 않고 사라짐

//인터페이스로 변경
interface User5 {
  firstName: string;
  lastName: string;
  sayHi(name: string): string;
  fullName(): string;
}
interface Human {
  health: number;
}

class Player8 implements User5, Human {
  constructor(
    //private불가능: string;
    public firstName: string,
    public lastName: string,
    public health: number
  ) {}
  fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
  sayHi(name: string) {
    return `hello ${name}. My name is ${this.fullName()}`;
  }
}

//인터페이스 와 type의 차이
type typePlayer = {
  name: string;
};
type PlayerA = typePlayer & {
  lastName: string;
};

const playerA: PlayerA = {
  name: "A",
  lastName: "AA",
};

//
interface PlayerB {
  name: string;
}
interface PlayerBB extends PlayerB {
  lastName: string;
}
interface PlayerBB {
  heath: number;
}
const playerB: PlayerBB = {
  name: "B",
  lastName: "BB",
  heath: 1,
};

//상속해서 사용
type Playera = {
  firstName: string;
};

interface Playerb {
  firstName: string;
}

class UserA implements Playera {
  //Playera Playerb 둘 다 가능
  constructor(public firstName: string) {}
}

//클래스나 오브젝트의 모양을 정의할 경우 interface
//다른경우는 type 사용을 추천!
