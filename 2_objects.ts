interface Sample {
  type: string
  value: string
  foo: { bar: number[] }
  baz()
}

var obj: Sample = {
  type: "Hello",
  value: "World",
  foo: { bar: [1, 2, 3] },
  baz: () => "true"
};



abstract class Entity {
  type: string = "Generic Entity"
  value: string

  constructor(value: string) {
    this.value = value;
  }
}

interface Describable {
  description()
}

class Human extends Entity implements Describable {
  type = "Human"
  country: string

  constructor(value: string, country: string) {
    super(value);
    this.country = country;
  }

  description() {
    return `${this.value} is a ${this.type} from ${this.country}`;
  }
}

// var generic = new Entity("Unknown");
var me: Describable = new Human("Markus", "Austria");
me.description();
