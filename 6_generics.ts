// function identity(x: number): number {
//   return x;
// }
//
// function identity(x: string): string {
//   return x;
// }

function identity<T>(x: T): T {
  return x;
}

identity("String");
identity<number>(3);



function transform<T, U extends T>(x: T): U {
  return <U>x;
}

transform<string, null>("String");



function genLength<T extends { length: number }>(x: T): number {
  return x.length;
}

genLength("String");
genLength(3);



class GenericClass<T> {
  y: T

  identity(x: T): T[] {
    return [x, this.y];
  }
}

let gc = new GenericClass<string>();
gc.identity("Test");
gc.y;
