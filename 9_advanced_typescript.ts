class Long {
  public foo: string
  private bar: string

  constructor(foo: string, bar: string) {
    this.foo = foo;
    this.bar = bar;
  }

  other() {}
}

class Short {
  constructor(public foo: string, private bar: string) {}

  baz() {}
}

new Short("foo", "bar").foo;

type Medium = Short | Long;

function thisOrThat(t: Medium) {
  if ((<Short>t).baz) {
    (<Short>t).baz();
  } else {
    (<Long>t).other();
  }
}

function isShort(t: Medium): t is Short {
  return (<Short>t).baz !== undefined;
}

function betterThisOrThat(t: Medium) {
  if (isShort(t)) {
    t.baz();
  } else {
    t.other();
  }
}

const str: any = "string";
const isString = typeof str === "string";

if (str instanceof Short) {
  str.baz()
}
