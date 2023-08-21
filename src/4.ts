class Key {
  constructor(private signature: number = Math.random()) {}

  getSignature(): number {
    return this.signature;
  }
}

class Person {
  constructor(private key: Key) {}

  getKey(): Key {
    return this.key;
  }
}

abstract class House {
  constructor(public door: boolean, private key: Key, private tenants: Person[] = []) {}

  comeIn(person: Person): void {
    if (this.door) {
      this.tenants.push(person);
    }
  }

  abstract openDoor(k: Key): void;
}

class MyHouse extends House {
  constructor(key: Key) {
    super(false, key);
  }
  openDoor(k: Key): void {
    if (k === key) {
      this.door === true;
    }
  }
}

const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);

export {};
