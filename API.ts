interface SStorage<T> {
  [key: string]: T;
}

class LocalStorage<T> {
  private storage: SStorage<T> = {};

  setItem(key: string, value: T) {
    this.storage[key] = value;
  }
  clearItem(key: string) {
    delete this.storage[key];
  }
  getItem(key: string): T {
    return this.storage[key];
  }
  clear() {
    this.storage = {};
  }
}

const stringStorage = new LocalStorage<string>();
stringStorage.getItem("ket");
stringStorage.setItem("hello", "how are you");

const booleanStorage = new LocalStorage<boolean>();
booleanStorage.getItem("xxx");
booleanStorage.setItem("hello", true);

interface SuccessFn {
  atitude: number;
  longitude: number;
  altitude: number | null;
  accuracy: number;
  altitudeAccuracy: number | null;
  heading: number;
  speed: number | null;
}
interface ErrorFn {
  code: number;
  message: string;
}
interface OptionsObj {
  enableHighAccuracy: boolean;
  maximumAge: number;
  timeout: number;
}

class geolocation {
  getCurrentPosition(
    successFn: SuccessFn,
    errorFn?: ErrorFn,
    optionsObj?: OptionsObj
  ): void {}
  watchPosition(success: SuccessFn, error?: ErrorFn, options?: OptionsObj) {}
  clearWatch(id: number): void {}
}
