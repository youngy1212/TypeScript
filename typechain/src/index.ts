import { init, exit } from "myPackage";

init({
  url: "true",
});

exit(1);

class Block {
  constructor(private data: string) {}
  static hello() {
    return "hi";
  }
}
