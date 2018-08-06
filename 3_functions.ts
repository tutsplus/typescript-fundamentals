class Functions {
  add(left: number, right: number): number {
    return left + right;
  }

  doSomething(): void {
    // return true;
  }

  throwError(e: Error): never {
    throw e;
  }

  optional(x: number, y?: number) {}

  default(x: number = 0, y: number) {}

  infinite(x: number, y: number, ...rest: number[]) {}
}




class That {
  func(): (this: void) => void {
    // return function() {
    //
    // }

    return () => {

    };
  }
}

let f = new That().func();
f();




class Overload {
  test(x: number): number
  test(x: string): string
  test(x: any): any {
    return x + x;
  }
}
