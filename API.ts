//로컬 스토리지에 들어갈 아이템들의 타입을 설정
//추상화 클래스 abstract
//앞서 만들었던 Items라는 타입을 protected 키워드를 이용해 오직 하위 클래스에서만 접근 가능하도록 함
//나머지 메소드들 또한 전부 abstract로 연결, 제네릭을 활용
abstract class LocalStorage<T> {
  protected items: Items<T>;
  constructor() {
    this.items = {};
  }
  abstract length(): number;
  abstract key(index: number): T;
  abstract getItem(key: string): T;
  abstract setItem(key: string, value: T): void;
  abstract removeItem(key: string): void;
  abstract clear(): void;
}

//interface 상속에 용이
// 로컬 스토리지 내부에 저장되는 데이터는 key: value쌍의 값으로 저장
// 반환 값은 T 제네릭으로 설정하여, 무슨 타입이든 반환할 수 있음
interface Items<T> {
  [key: string]: T;
}

//실제 사용될 ClASS를 만들어서 상속받아서 사용. Public으로 만들어 접근할 수 있음
class SuperStorage extends LocalStorage<string> {
  constructor() {
    super();
  }
  public key(index: number) {
    return Object.keys(this.items)[index];
  }
  public length() {
    return Object.keys(this.items).length;
  }
  public getItem(key: string) {
    return this.items[key];
  }
  public setItem(key: string, value: string) {
    this.items[key] = value;
  }
  public removeItem(key: string) {
    delete this.items[key];
  }
  public clear() {
    this.items = {};
  }
}

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

//지역
//overloading = 글자 그대로 이름은 동일하되 서로 다른 타입들을 덧붙이는 것

type GeolocationCoords = {
  latitude: number;
  longitude: number;
  altitude: number;
  accuracy: number;
  altitudeAccuracy: number;
  heading: number;
  speed: number;
};
type Position = {
  coords: GeolocationCoords;
};
type GeoError = {
  code: number;
  message: string;
};
type SuccessFunction = (position: Position) => void;
type ErrorFunction = (error: GeoError) => void;
type GeoOptions = {
  maximumAge: number;
  timeout: number;
  enableHighAccuracy: boolean;
};
// 다음으로 successFn, errorFn의 콜백 함수에 대한 타입을 설정할 차례입니다.
// 앞서 만든 GeoOptions, GeoError, GeolocationCoords 그리고 Position을 successFn과 errorFn의 파라미터에 적용시킬 타입으로 사용
type GetCurrentPosition = {
  (success: SuccessFunction): void;
  (success: SuccessFunction, error: ErrorFunction): void;
  (success: SuccessFunction, error: ErrorFunction, options: GeoOptions): void;
};

type WatchCurrentPosition = {
  (success: SuccessFunction): number;
  (success: SuccessFunction, error: ErrorFunction): number;
  (success: SuccessFunction, error: ErrorFunction, options: GeoOptions): number;
};

// 이후, 사용법에 제시된 getCurrentPosition()과 watchPosition() 메소드의 전체 타입을 지정하도록 하겠습니다.
//앞서 만든 SuccessFunction 타입과 ErrorFunction을 연결 지을 수 있도록 GetCurrentPosition과 WatchCurrentPosition 타입을 만든 후, return되는 타입을 설정
// 이를 하나로 묶은 GeolocationAPI라는 interface를 만듬 -> 추후 상속을 위해.
interface GeolocationAPI {
  getCurrentPosition: GetCurrentPosition;
  watchPosition: WatchCurrentPosition;
  clearWatch: (id: number) => void;
}

//실제로 API로 사용될 클래스 Geolocator
//getCurrentPosition()과 watchPosition() 메소드에서 전달되는 error와 options는 없을 수도 있기 때문에 ? 연산자를 통해 필수가 아닌 선택적인 요소
class Geolocator implements GeolocationAPI {
  getCurrentPosition: GetCurrentPosition = (
    success: SuccessFunction,
    error?: ErrorFunction,
    options?: GeoOptions
  ) => {
    return;
  };
  watchPosition: WatchCurrentPosition = (
    success: SuccessFunction,
    error?: ErrorFunction,
    options?: GeoOptions
  ) => {
    return 1;
  };
  clearWatch = (id: number) => {};
}
