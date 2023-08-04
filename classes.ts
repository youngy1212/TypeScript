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

type Words = {
  [key: string]: string;
};

class Dict {
  private words: Words;
  constructor() {
    this.words = {};
  }
  add(word: Word) {
    if (this.words[word.term] === undefined) {
      this.words[word.term] = word.def;
    }
  }
  get(term: string) {
    return this.words[term];
  }
  delete(term: string) {
    delete this.words[term];
  }
  update(word: Word) {
    if (this.words[word.term] !== undefined) {
      this.words[word.term] = word.def;
    }
  }

  showAll() {
    return this.words;
  }
  count() {
    //길이
    return Object.keys(this.words).length;
  }
  upsert(word: Word) {
    //추가+ 수정
    this.words[word.term] = word.def;
  }
  exists(term: string) {
    //: 해당 단어가 사전에 존재하는지 여부를 알려줌.
    return this.words.hasOwnProperty(term);
  }

  bulkAdd(bulk: Word[]) {
    for (let word of bulk) {
      if (this.words[word.term] === undefined) {
        this.words[word.term] = word.def;
      }
    }
  }
  //다음과 같은 방식으로. 여러개의 단어를 한번에 추가할 수 있게 해줌. [{term:"김치", definition:"대박이네~"}, {term:"아파트", definition:"비싸네~"}]

  bulkDelete(term: string[]) {
    for (let word of term) {
      delete this.words[word];
    }
  }
  //다음과 같은 방식으로. 여러개의 단어를 한번에 삭제할 수 있게 해줌. ["김치", "아파트"]
}

class Word {
  constructor(public term: string, public def: string) {}
}

const kimchi = new Word("kimchi", "한국의 음식");
const dict = new Dict();

dict.add(kimchi);
