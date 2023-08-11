import crypto from "crypto";

//타입스크립트로 작성되지 않은 패키지를 import할때
//crypto ts가 모르겠다는 오류 -> d파일 작성 (비효율적)
// DefinitelyTyped  => TypeScript type 정의를 위한 리포지토리
// 해당 패키지를 다운

interface BlockShape {
  hash: string;
  prevHash: string;
  height: number;
  data: string;
}

class Block implements BlockShape {
  public hash: string;
  constructor(
    public prevHash: string,
    public height: number,
    public data: string
  ) {
    this.hash = Block.calculateHash(prevHash, height, data);
  }

  static calculateHash(prevHash: string, height: number, data: string) {
    const toHash = `${prevHash}${height}${data}`;
    return crypto.createHash("sha234").update(toHash).digest("hex");
  }
}
