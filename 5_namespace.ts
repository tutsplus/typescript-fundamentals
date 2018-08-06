namespace Numbers {
  export function add(x: number, y: number) {
    return x + y;
  }
}

namespace Strings {
  export function add(x: string, y: string) {
    return x + y;
  }
}

Numbers.add(1, 2);
Strings.add("a", "b");
