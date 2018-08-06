type Constructor<T = {}> = new (...args: any[]) => T;

function Loggable<T extends Constructor>(Base: T) {
  return class extends Base {
    log(text: string) {
      console.log("Log:", text);
    }
  };
}

function Timeable<T extends Constructor>(Base: T) {
  return class extends Base {
    public now = Date.now();
  }
}

class Special {
  public foo = "bar";
}

const SuperSpecial = Loggable(Special);
const ExtraSpecial = Loggable(Timeable(Special));

new SuperSpecial().log("Something");
console.log(new ExtraSpecial().now);
