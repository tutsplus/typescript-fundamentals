function logMethod(target: any, key: string, descriptor: PropertyDescriptor) {
  let original = descriptor.value;

  descriptor.value = function(...args: any[]) {
    let value = original.apply(this, args);
    console.log(key + '(' + args + ') => ' + value);
    return value;
  }

  return descriptor;
}

function timesTwo(target: any, key: string, descriptor: PropertyDescriptor) {
  let original = descriptor.value;

  descriptor.value = function(...args: number[]) {
    let value = original.apply(this, args.map((a) => 2 * a));
    return value;
  }

  return descriptor;
}

class Calc {
  @timesTwo
  @logMethod
  static sum(x: number, y: number, z: number): number {
    return x + y + z;
  }
}

let x = Calc.sum(1, 2, 3);
