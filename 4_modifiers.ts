class Example {
  public known: string
  private secret: number
  protected shared: boolean
  readonly fact: any

  private _story: string;
  get story() { return this._story; }
  set story(newStory: string) { this._story = newStory; }

  private constructor() {

  }

  static constructInstance() {
    return new Example();
  }
}

class Example2 extends Example {
  public f() {
    this.secret;
    this.shared;
  }
}

// let ex = new Example();
let ex2 = Example.constructInstance();

ex.known;
ex.secret;
ex.shared;
ex.fact;
ex.fact = "Did you know...";

ex.story;
ex.story = "True story";
